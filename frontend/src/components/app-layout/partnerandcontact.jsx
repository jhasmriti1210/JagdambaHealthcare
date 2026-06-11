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
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Partner With Us Section */}
      <section
        className="relative h-[430px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/partner-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#003B5C]/45"></div>

        <motion.div
          className="relative z-10 px-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-white text-5xl md:text-8xl font-bold"
          >
            Partner with Us
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-white text-xl md:text-3xl font-light"
          >
            Discover how we can help scale your MedTech presence across India.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 bg-[#005B8F] hover:bg-[#004873] text-white px-12 py-4 rounded-xl text-xl font-bold transition"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#247AA8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-[#F5F5F5] rounded-[32px] p-12"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <p className="text-[#005B8F] text-xl font-medium">— Contact Us</p>

              <h2 className="mt-8 text-5xl md:text-7xl font-bold text-[#005B8F] leading-tight">
                Get in Touch with Us
              </h2>

              <p className="mt-16 text-3xl md:text-4xl text-[#4A7698] leading-relaxed">
                Want to learn more about our services? Talk to our experts.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#F5F5F5] rounded-[32px] p-10"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
            >
              <form className="space-y-10">
                <div>
                  <label className="block text-xl text-black mb-4">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none pb-3 focus:border-[#247AA8]"
                  />
                </div>

                <div>
                  <label className="block text-xl text-black mb-4">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none pb-3 focus:border-[#247AA8]"
                  />
                </div>

                <div>
                  <label className="block text-xl text-black mb-4">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none pb-3 focus:border-[#247AA8]"
                  />
                </div>

                <div>
                  <label className="block text-xl text-black mb-4">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none resize-none focus:border-[#247AA8]"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full md:w-72 border border-[#005B8F] text-[#005B8F] py-4 rounded-2xl text-xl font-semibold hover:bg-[#005B8F] hover:text-white transition"
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
