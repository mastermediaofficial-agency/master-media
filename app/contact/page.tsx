import JoinForm from "./contactForm";

export default function contact() {
  return (
    <section className="min-h-screen bg-[#d7e2f7] flex items-center justify-center px-4 lg:px-10 py-16">
      <div
        className="
          max-w-400 w-full
          grid grid-cols-1 lg:grid-cols-2
          gap-10
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>

          <p className="text-gray-600 max-w-md">
            Fill out the form and our team will reach out to you shortly. We’re
            always open to collaborations, hiring, and new ideas.
          </p>

          <div className="space-y-4 pt-4">
            <div>
              <p className="font-semibold text-gray-900">Customer Support</p>
              <p className="text-gray-600 text-sm">support@yourdomain.com</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Careers</p>
              <p className="text-gray-600 text-sm">careers@yourdomain.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <div
          className="
            bg-white rounded-3xl shadow-xl
            p-6 sm:p-8
          "
        >
          <JoinForm />
        </div>
      </div>
    </section>
  );
}
