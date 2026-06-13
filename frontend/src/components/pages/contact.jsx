import { motion } from "framer-motion";
import Footer from "../app-layout/footer";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14 } },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section
        className="relative h-[55vh] md:h-[65vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/websitebg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#111827]/60"></div>

        <motion.div
          className="relative z-10 text-center px-6"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="font-['Playfair_Display'] text-white text-5xl md:text-7xl font-bold"
          >
            Contact Us
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-white/90 text-lg md:text-2xl font-medium max-w-4xl mx-auto"
          >
            Let’s Build the Future of Healthcare, Together
          </motion.p>
        </motion.div>
      </section>

      {/* Query Form */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
            <motion.div
              className="bg-[#F8FAFC] rounded-[26px] p-7 md:p-8 h-fit border border-[#E5E7EB]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <p className="text-[#047857] text-lg font-medium">— Contact Us</p>

              <h2 className="font-['Playfair_Display'] mt-4 text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
                Let's Start a Conversation
              </h2>

              <p className="mt-6 text-lg text-[#4B5563] leading-relaxed">
                Whether you're looking for healthcare solutions, strategic
                partnerships, product information, or business support, our team
                is here to assist you.
              </p>

              <p className="mt-4 text-base text-[#6B7280] leading-relaxed">
                Reach out to us and we'll connect you with the right specialist
                to address your requirements promptly and professionally.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#F8FAFC] rounded-[26px] p-7 md:p-8 border border-[#E5E7EB]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
            >
              <form className="space-y-5">
                <div>
                  <label className="block text-base text-[#111827] mb-1.5">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#10B981] outline-none pb-2 text-base focus:border-[#047857]"
                  />
                </div>

                <div>
                  <label className="block text-base text-[#111827] mb-1.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#10B981] outline-none pb-2 text-base focus:border-[#047857]"
                  />
                </div>

                <div>
                  <label className="block text-base text-[#111827] mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-[#10B981] outline-none pb-2 text-base focus:border-[#047857]"
                  />
                </div>

                <div>
                  <label className="block text-base text-[#111827] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows="3"
                    className="w-full bg-transparent border-b border-[#10B981] outline-none resize-none text-base focus:border-[#047857]"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full md:w-56 border border-[#10B981] text-[#047857] py-3 rounded-xl text-base font-semibold hover:bg-[#10B981] hover:text-white transition"
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-[#111827] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-[#10B981] text-lg font-medium">
              — Our Location —
            </p>

            <h2 className="font-['Playfair_Display'] mt-3 text-4xl md:text-5xl font-bold text-white">
              Get In Touch With Us
            </h2>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                icon: <FaMapMarkerAlt className="text-[#10B981] text-5xl" />,
                title: "Address",
                bg: "bg-white",
                content: (
                  <>
                    227, 2nd Floor, SRS Tower, Sector 31, Faridabad
                    <br />– 121003, Haryana, India
                  </>
                ),
              },
              {
                icon: <FaPhoneAlt className="text-[#10B981] text-5xl" />,
                title: "Phone",
                bg: "bg-[#ECFDF5]",
                content: (
                  <>
                    <p>+91 9717266311</p>
                    <p>0129 - 4751558</p>
                  </>
                ),
              },
              {
                icon: <HiOutlineMail className="text-[#10B981] text-5xl" />,
                title: "Email",
                bg: "bg-white",
                content: <>info@jagdambahealthcare.in</>,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0px 20px 35px rgba(16,185,129,0.2)",
                }}
                className={`${card.bg} rounded-[24px] p-7 text-center shadow-lg`}
              >
                <motion.div
                  className="flex justify-center"
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {card.icon}
                </motion.div>

                <h3 className="font-['Playfair_Display'] mt-5 text-3xl font-bold text-[#111827]">
                  {card.title}
                </h3>

                <div className="mt-4 text-base leading-relaxed text-[#4B5563]">
                  {card.content}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#111827] py-5">
        <motion.div
          className="max-w-[1500px] mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <motion.div
            className="overflow-hidden rounded-[18px] shadow-xl"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              title="Jagdamba Healthcare Location"
              src="https://maps.google.com/maps?q=227%20SRS%20Tower%20Sector%2031%20Faridabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="430"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
