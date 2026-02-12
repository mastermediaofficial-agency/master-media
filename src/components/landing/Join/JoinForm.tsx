"use client";

import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";

const schema = z.object({
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
    .max(100),

  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),

  message: z
    .string()
    .trim()
    .max(500, "Message too long")
    .optional()
    .or(z.literal("")),
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

    toast.success("🎉 Thanks! Our team will contact you shortly.", {
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
      {/* Header */}
      <div className="space-y-2 text-center">
        <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
          Join Us
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          Let’s talk.
        </h2>
        <p className="text-sm text-gray-600">
          Share your details and we’ll personally reach out.
        </p>
      </div>

  

      {/* Form */}
      <motion.div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {[
  ["name", "Full Name"],
  ["email", "Email Address"],
  ["phone", "Phone Number"],
  ["message", "Write a message"],
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
                  text-sm text-black
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

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full
                bg-blue-600 hover:bg-blue-700
                text-white py-3 rounded-xl
                text-sm font-semibold
                transition
              "
            >
              {isSubmitting ? "Submitting…" : "Request a Call"}
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

          <p className="text-xs text-gray-500 text-center pt-2">
            By submitting, you agree to our{" "}
            <span className="text-blue-600 cursor-pointer">
              Terms & Privacy Policy
            </span>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
