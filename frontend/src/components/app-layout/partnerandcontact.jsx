import { motion } from "framer-motion";

export default function PartnerAndContact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -90 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 90 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18 },
    },
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Partner With Us Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/websitebg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          className="relative z-10 px-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display'] text-white text-4xl md:text-6xl font-bold"
          >
            Partner with Us
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-['Playfair_Display'] mt-8 text-white/90 text-xl md:text-2xl font-light"
          >
            Discover how we can help scale your healthcare presence across
            India.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 bg-[#10B981] hover:bg-[#047857] text-white px-12 py-4 rounded-xl text-xl font-bold transition"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Section - Reduced Size */}
      <section className="bg-[#111827] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
            <motion.div
              className="bg-[#F8FAFC] rounded-[28px] p-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <p className="text-[#047857] text-lg font-medium">— Contact Us</p>

              <h2 className="font-['Playfair_Display'] mt-5 text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
                Partnering for Better Patient Outcomes
              </h2>

              <p className="font-['Playfair_Display'] mt-8 text-lg md:text-xl text-[#4B5563] leading-relaxed">
                From advanced medical technologies to reliable healthcare
                solutions, we help hospitals, clinics, and healthcare
                professionals deliver exceptional patient care with confidence.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#F8FAFC] rounded-[28px] p-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-lg text-[#111827] mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#10B981] outline-none pb-2 text-[#111827] focus:border-[#047857]"
                  />
                </div>

                <div>
                  <label className="block text-lg text-[#111827] mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#10B981] outline-none pb-2 text-[#111827] focus:border-[#047857]"
                  />
                </div>

                <div>
                  <label className="block text-lg text-[#111827] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-[#10B981] outline-none pb-2 text-[#111827] focus:border-[#047857]"
                  />
                </div>

                <div>
                  <label className="block text-lg text-[#111827] mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="3"
                    className="w-full bg-transparent border-b border-[#10B981] outline-none resize-none text-[#111827] focus:border-[#047857]"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full md:w-56 border border-[#10B981] text-[#047857] py-3 rounded-xl text-lg font-semibold hover:bg-[#10B981] hover:text-white transition"
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
