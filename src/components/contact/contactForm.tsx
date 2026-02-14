"use client";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters"),

  email: z.string().email("Enter a valid email address").max(100),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),

  message: z.string().max(500, "Message too long").optional().or(z.literal("")), // allows empty string
});

type FormData = z.infer<typeof schema>;

const fields: Array<{
  key: Exclude<keyof FormData, "message">;
  label: string;
  placeholder: string;
  type: string;
  autoComplete: string;
}> = [
  {
    key: "name",
    label: "Full Name",
    placeholder: "Enter your full name",
    type: "text",
    autoComplete: "name",
  },
  {
    key: "email",
    label: "Email Address",
    placeholder: "you@company.com",
    type: "email",
    autoComplete: "email",
  },
  {
    key: "phone",
    label: "Phone Number",
    placeholder: "+91 9988776655",
    type: "tel",
    autoComplete: "tel",
  },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading("Submitting your message...");

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
        throw new Error("Failed to submit form");
      }

      toast.success("Thanks! We’ll contact you soon.", {
        id: toastId,
      });

      reset();
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong. Please try again.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#213d77]">
        Contact Master Media
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {fields.map((field) => (
          <div key={field.key} className="space-y-1.5">
            <label
              htmlFor={field.key}
              className="block text-sm font-medium text-slate-700"
            >
              {field.label}
              <span className="text-red-500">*</span>
            </label>

            <input
              id={field.key}
              type={field.type}
              autoComplete={field.autoComplete}
              {...register(field.key)}
              placeholder={field.placeholder}
              disabled={isSubmitting}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-[#324dd3] focus:outline-none focus:ring-4 focus:ring-[#324dd3]/20"
            />

            {errors[field.key] && (
              <p className="text-xs text-red-600">
                {errors[field.key]?.message}
              </p>
            )}
          </div>
        ))}

        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-700"
          >
            Message
          </label>

          <textarea
            id="message"
            rows={3}
            {...register("message")}
            placeholder="Tell us about your requirement..."
            disabled={isSubmitting}
            className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-[#324dd3] focus:outline-none focus:ring-4 focus:ring-[#324dd3]/20"
          />

          {errors.message && (
            <p className="text-xs text-red-600">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#324dd3] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#28377d] disabled:cursor-not-allowed disabled:opacity-70 shadow-md hover:shadow-lg"
        >
          {isSubmitting ? "Submitting..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
