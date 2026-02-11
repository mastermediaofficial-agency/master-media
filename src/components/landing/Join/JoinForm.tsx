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
        body: JSON.stringify(data),
      });

      setSuccess(true);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-4">
      {/* 🌊 Header */}
      <div className="space-y-4">
        <span className="font-16 font-semibold text-blue-600 uppercase">
          Join Us
        </span>
        <h2 className="font-30 font-bold text-gray-900 leading-tight">
          Still having second thoughts?{" "}
        
          <span className="text-blue-600">
            Let’s talk.
          </span>
        </h2>
        <p className="text-gray-600 max-w-lg">
          Share your details and our team will personally reach out to guide you.
        </p>
      </div>

      {/* ✅ Success */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            bg-blue-50 border border-blue-200
            text-blue-700 px-4 py-3 rounded-xl
          "
        >
          🎉 Thanks! Our team will contact you shortly.
        </motion.div>
      )}

      {/* 🧾 Form Card */}
      <div className="bg-blue-50/60 rounded-3xl lg:p-4 sm:p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {[
            ["name", "Full name", "Tell us what to call you"],
            ["email", "Email address", "We’ll never spam you"],
            ["phone", "Phone number", "For quick coordination"],
            ["position", "Position / Role", "What are you applying for?"],
            ["resume", "Resume / Portfolio link", "Google Drive / GitHub / Website"],
          ].map(([key, label, hint]) => (
            <div key={key} className="space-y-1">
              {/* <label className="font-16 font-medium text-gray-700">
                {label}
              </label> */}

              <input
                {...register(key as keyof FormData)}
                disabled={isSubmitting}
                placeholder={label}
                className="
                  w-full rounded-xl px-4 py-3
                  bg-white
                  border border-transparent
                  shadow-sm
                  text-black

                  focus:outline-none
                  focus:border-blue-600
                  focus:ring-2 focus:ring-blue-200
                  transition
                "
              />

              <div className="flex justify-between">
                <p className="font-14 text-gray-500">{hint}</p>
                {errors[key as keyof FormData] && (
                  <p className="font-14 text-red-500">
                    {errors[key as keyof FormData]?.message}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* 🎯 Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                flex-1
                bg-blue-600 hover:bg-blue-700
                text-white py-3 rounded-xl
                font-semibold
                shadow-lg shadow-blue-600/30
                transition
              "
            >
              {isSubmitting ? "Submitting…" : "Request a call"}
            </button>

            <button
              type="button"
              onClick={() => {
                reset();
                setSuccess(false);
              }}
              className="
                flex-1
                bg-white
                border border-gray-300
                py-3 rounded-xl
                font-semibold text-gray-700
                hover:bg-gray-100 transition
              "
            >
              Reset
            </button>
          </div>

          <p className="font-14 text-gray-500 pt-2">
            By submitting, you agree to our{" "}
            <span className="text-blue-600 cursor-pointer">
              Terms & Privacy Policy
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
