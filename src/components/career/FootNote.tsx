import { motion } from "framer-motion";

function FootNote() {
  return (
    <section className="w-full bg-linear-to-r from-[#0b1225c0] via-[#28377d] to-[#0B1225] text-black py-10 lg:py-20 text-center px-4 lg:px-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full font-20 text-white"
      >
        Didn&apos;t find your role? <br />
        <span className="text-white w-full leading-relaxed font-semibold text-[36px]">
          We&apos;re always looking for sharp minds.
        </span>
      </motion.p>
    </section>
  );
}

export default FootNote;
