"use client";

import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

const schema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name is too long")
      .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters"),

    email: z
      .string()
      .trim()
      .email("Enter a valid email address")
      .max(100)
      .optional()
      .or(z.literal("")),

    phone: z
      .string()
      .trim()
      .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number")
      .optional()
      .or(z.literal("")),

    message: z
      .string()
      .trim()
      .max(500, "Message too long")
      .optional()
      .or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    const hasEmail = data.email?.trim();
    const hasPhone = data.phone?.trim();

    if (!hasEmail && !hasPhone) {
      ctx.addIssue({
        path: ["email"],
        message: "Email or phone number is required",
        code: z.ZodIssueCode.custom,
      });

      ctx.addIssue({
        path: ["phone"],
        message: "Email or phone number is required",
        code: z.ZodIssueCode.custom,
      });
    }
  });

type FormData = z.infer<typeof schema>;

export default function JoinForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading("Submitting your request...");

    try {
      const payload = {
        ...data,
        message: data.message?.trim() ? data.message : "-",
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      toast.success("Thanks! Our team will contact you shortly.", {
        id: toastId,
      });

      reset();
    } catch (err) {
      console.error(err);

      toast.error("Something went wrong. Please try again.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="w-full  space-y-4">
      <div className="space-y-2 text-center">
        <h2 className="font-24 font-bold text-gray-900 leading-tight text-left sm:text-center">
          Still having second thoughts?{" "}
          <span className="text-blue-600">
            <span className="sm:hidden">
              <br />
            </span>
            Let’s talk.
          </span>
        </h2>
        <p className="font-14 lg:font-18 text-gray-600">
          Share your details and we&apos;ll personally reach out.
        </p>
      </div>

      <motion.div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {[
            ["name", "Full Name"],
            ["email", "Email Address"],
            ["phone", "Phone Number"],
            ["message", "Write a message (Optional)"],
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
                  w-full rounded-xl px-4 py-3 border border-gray-200
                  font-16 text-black
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-500
                  focus:border-blue-500
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

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {/* <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full
                bg-blue-600 hover:bg-blue-700
                text-white py-3 rounded-xl
                font-18 font-semibold
                transition
              "
            >
              {isSubmitting ? "Submitting…" : "Request a Call"}
            </button> */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="
              w-full
              inline-flex items-center justify-center gap-2
              bg-blue-600 hover:bg-blue-700
              text-white font-16
              py-3 rounded-xl
              font-semibold cursor-pointer
              transition-all duration-300
              hover:shadow-lg hover:-translate-y-0.5
              disabled:opacity-70 disabled:cursor-not-allowed
            "
            >
              {isSubmitting ? (
                "Submitting…"
              ) : (
                <>
                  Request a Call
                  <FiPhoneCall size={16} />
                </>
              )}
            </button>

            {/* <button
              type="button"
              onClick={() => {
                reset();
                setSuccess(false);
              }}
              className="
                w-full
                border border-gray-300
                text-gray-700
                py-3 rounded-xl
                text-sm font-semibold
                hover:bg-gray-100
                transition
              "
            >
              Reset
            </button> */}
          </div>

          <p className="font-16 text-gray-500 text-center pt-2">
            By submitting, you agree to our{" "}
            <Link
              href={"/privacy"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 cursor-pointer hover:text-blue-400"
            >
              Terms & Privacy Policy
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
