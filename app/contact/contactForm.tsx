"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone"),
  position: z.string().min(2, "Position required"),
  resume: z.string().url("Valid URL required"),
});

type FormData = z.infer<typeof schema>;

export default function JoinForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setSuccess(true);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">
        Join and become a master 🚀
      </h2>

      {success && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            bg-green-50 border border-green-200
            text-green-700 px-4 py-3 rounded-xl
          "
        >
          Thanks for joining! We’ll get back to you soon.
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {[
          ["name", "Full name"],
          ["email", "Email address"],
          ["phone", "Phone number"],
          ["position", "Message area"],
          ["resume", "Resume / Portfolio link"],
        ].map(([key, label]) => (
          <div key={key}>
            <input
              {...register(key as keyof FormData)}
              placeholder={label}
              disabled={isSubmitting}
              className="
                w-full rounded-xl px-4 py-3
                border border-black/30 text-black
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition
              "
            />
            {errors[key as keyof FormData] && (
              <p className="text-sm text-red-500 mt-1">
                {errors[key as keyof FormData]?.message}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full bg-blue-600 hover:bg-blue-700
            text-white py-3 rounded-xl
            font-semibold transition
          "
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
