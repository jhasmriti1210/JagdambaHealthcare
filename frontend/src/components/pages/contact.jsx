import { motion } from "framer-motion";
import Footer from "../app-layout/footer";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/contact-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#003B5C]/60"></div>

        <motion.div
          className="relative z-10 text-center px-6"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="text-white text-6xl md:text-8xl font-bold"
          >
            Contact Us
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-white text-xl md:text-4xl font-medium max-w-5xl mx-auto"
          >
            Let’s Build the Future of Healthcare, Together
          </motion.p>
        </motion.div>
      </section>

      {/* Query Form Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-[#F5F5F5] rounded-[32px] p-10 md:p-14 h-fit"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <p className="text-[#005B8F] text-xl font-medium">— Contact Us</p>

              <h2 className="mt-8 text-5xl md:text-7xl font-bold text-[#005B8F] leading-tight">
                Send Your Query
              </h2>

              <p className="mt-16 text-3xl md:text-4xl text-[#4A7698] leading-relaxed">
                Want to learn more about our services? Talk to our experts.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#F5F5F5] rounded-[32px] p-10 md:p-14"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
            >
              <form className="space-y-9">
                <div>
                  <label className="block text-xl text-black mb-4">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none pb-3 text-lg focus:border-[#247AA8]"
                  />
                </div>

                <div>
                  <label className="block text-xl text-black mb-4">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none pb-3 text-lg focus:border-[#247AA8]"
                  />
                </div>

                <div>
                  <label className="block text-xl text-black mb-4">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none pb-3 text-lg focus:border-[#247AA8]"
                  />
                </div>

                <div>
                  <label className="block text-xl text-black mb-4">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none resize-none text-lg focus:border-[#247AA8]"
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

      {/* Contact Information Section */}
      <section className="bg-[#247AA8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-white text-xl font-medium">— Our Location —</p>

            <h2 className="mt-6 text-5xl md:text-7xl font-bold text-white">
              Get In Touch With Us
            </h2>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                icon: <FaMapMarkerAlt className="text-[#247AA8] text-8xl" />,
                title: "Address",
                bg: "bg-[#F5F5F5]",
                content: (
                  <>
                    227, 2nd Floor, SRS Tower, Sector 31, Faridabad
                    <br />– 121003, Haryana, India
                  </>
                ),
              },
              {
                icon: <FaPhoneAlt className="text-[#247AA8] text-8xl" />,
                title: "Phone",
                bg: "bg-[#CFE1F3]",
                content: (
                  <>
                    <p>+91 9717266311</p>
                    <p>0129 - 4751558</p>
                  </>
                ),
              },
              {
                icon: <HiOutlineMail className="text-[#247AA8] text-8xl" />,
                title: "Email",
                bg: "bg-[#F5F5F5]",
                content: <>contact@trivexa.in</>,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -14,
                  scale: 1.03,
                  boxShadow: "0px 25px 45px rgba(0,0,0,0.25)",
                }}
                className={`${card.bg} rounded-[30px] p-10 text-center shadow-lg`}
              >
                <motion.div
                  className="flex justify-center"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  {card.icon}
                </motion.div>

                <h3 className="mt-8 text-5xl font-bold text-[#4A7698]">
                  {card.title}
                </h3>

                <div className="mt-8 text-xl leading-relaxed">
                  {card.content}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#247AA8] py-8">
        <motion.div
          className="max-w-[1900px] mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <motion.div
            className="overflow-hidden rounded-[20px] shadow-xl"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              title="Trivexa Location"
              src="https://maps.google.com/maps?q=227%20SRS%20Tower%20Sector%2031%20Faridabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="650"
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
