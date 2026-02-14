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

  email: z.string().trim().email("Enter a valid email address").max(100),

  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter valid 10-digit Indian number"),

  resume_link: z
    .string()
    .trim()
    .url("Enter valid resume URL (Drive / Dropbox etc.)"),

  linkedin_url: z.string().trim().url("Enter valid LinkedIn profile URL"),

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

      toast.success("Application submitted successfully!", {
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
    <div className="w-full bg-white px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-38 font-bold text-primary">Join Master Media.</h2>
          <p className="font-20 text-gray-600 mt-3">
            Apply now and become part of a fast-growing digital team with
            passion.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-5 border border-gray-100"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {[
              ["name", "Full Name*"],
              ["email", "Email Address*"],
              ["phone", "Phone Number*"],
              ["resume_link", "Resume Link* (Drive / Dropbox)"],
              ["linkedin_url", "LinkedIn Profile URL*"],
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
                  font-16
                  focus:outline-none
                  focus:ring-1 focus:ring-primary
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
            <div className="space-y-1">
              <textarea
                rows={3}
                {...register("message")}
                disabled={isSubmitting}
                placeholder="Optional message (Why should we hire you?)"
                className="
                w-full rounded-xl px-4 py-3
                border border-gray-200 bg-white text-black
                font-16 resize-none
                focus:outline-none
                focus:ring-1 focus:ring-primary
                focus:border-primary
                transition
              "
              />

              {errors.message && (
                <p className=" text-red-500">{errors.message.message}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSubmitting}
              className="
              w-full
              bg-primary hover:opacity-90
              text-white py-3 rounded-xl
              font-semibold font-16 cursor-pointer
              transition
              disabled:opacity-70
            "
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
