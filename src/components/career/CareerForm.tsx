"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long")
    .regex(/^[a-zA-Z\s]+$/, "Only letters allowed"),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(100),

  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter valid 10-digit Indian number"),

  resume_link: z
    .string()
    .trim()
    .url("Enter valid resume URL (Drive / Dropbox etc.)"),

  linkedin_url: z
    .string()
    .trim()
    .url("Enter valid LinkedIn profile URL"),

  message: z
    .string()
    .trim()
    .max(500, "Message too long")
    .optional()
    .or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

export default function CareerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

const onSubmit = async (data: FormData) => {
  const toastId = toast.loading("Submitting application...");

  try {
    const payload = {
      ...data,
      message: data.message?.trim() ? data.message : "-",
    };

    const response = await fetch("/api/career", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      throw new Error(result.error || "Submission failed");
    }

    toast.success("🎉 Application submitted successfully!", {
      id: toastId,
    });

    reset();
  } catch (err: any) {
    toast.error(err.message || "Something went wrong. Try again.", {
      id: toastId,
    });
  }
};


  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">
          Join Master Media 🚀
        </h2>
        <p className="text-gray-600 mt-3">
          Apply now and become part of a fast-growing digital team.
        </p>
      </div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-100"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Input Fields */}
          {[
            ["name", "Full Name"],
            ["email", "Email Address"],
            ["phone", "Phone Number"],
            ["resume_link", "Resume Link (Drive / Dropbox)"],
            ["linkedin_url", "LinkedIn Profile URL"],
          ].map(([key, label], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-1"
            >
              <input
                {...register(key as keyof FormData)}
                disabled={isSubmitting}
                placeholder={label}
                className="
                  w-full rounded-xl px-4 py-3
                  border border-gray-200 bg-white text-black
                  text-sm
                  focus:outline-none
                  focus:ring-2 focus:ring-primary
                  focus:border-primary
                  transition
                "
              />

              {errors[key as keyof FormData] && (
                <p className="text-xs text-red-500">
                  {errors[key as keyof FormData]?.message}
                </p>
              )}
            </motion.div>
          ))}

          {/* Message (Optional) */}
          <div className="space-y-1">
            <textarea
              rows={4}
              {...register("message")}
              disabled={isSubmitting}
              placeholder="Optional message (Why should we hire you?)"
              className="
                w-full rounded-xl px-4 py-3
                border border-gray-200
                text-sm resize-none
                focus:outline-none
                focus:ring-2 focus:ring-primary
                focus:border-primary
                transition
              "
            />

            {errors.message && (
              <p className="text-xs text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isSubmitting}
            className="
              w-full
              bg-primary hover:opacity-90
              text-white py-3 rounded-xl
              font-semibold text-sm
              transition
              disabled:opacity-70
            "
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
