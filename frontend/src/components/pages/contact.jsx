import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../applayout/footer";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// Form submissions are emailed to this address via FormSubmit
const FORM_ENDPOINT = "https://formsubmit.co/ajax/jhasmriti45@gmail.com";

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-white py-3 pl-11 pr-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#10B981] focus:ring-4 focus:ring-[#10B981]/10";

function Field({ label, icon: Icon, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[#374151]">
        {label}
        {required && <span className="text-[#10B981]"> *</span>}
      </span>
      <span className="relative block">
        <Icon
          className="pointer-events-none absolute left-4 top-3.5 text-[#9CA3AF]"
          size={14}
        />
        {children}
      </span>
    </label>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Website Enquiry from ${data.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

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
          backgroundImage: "url('/contactbg.png')",
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
          <motion.p
            variants={fadeUp}
            className="text-[#10B981] text-lg font-semibold tracking-wide"
          >
            — Contact Division —
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-['Playfair_Display'] text-white text-5xl md:text-7xl font-bold"
          >
            Contact Us
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-['Playfair_Display'] mt-5 text-white/90 text-lg md:text-2xl font-medium max-w-4xl mx-auto"
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
              className="flex flex-col"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <h2 className="font-['Playfair_Display'] mb-6 text-3xl md:text-4xl font-bold text-[#111827] relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-16 after:rounded-full after:bg-[#10B981]">
                Get in Touch With Us
              </h2>

              <div className="flex-1 bg-[#F8FAFC] rounded-[26px] p-7 md:p-8 border border-[#E5E7EB]">
                <h2 className="font-['Playfair_Display'] mt-4 text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
                  Let's Start a Conversation
                </h2>

                <p className="mt-6 text-lg text-[#4B5563] leading-relaxed">
                  Whether you're looking for healthcare solutions, strategic
                  partnerships, product information, or business support, our
                  team is here to assist you.
                </p>

                <p className="mt-4 text-base text-[#6B7280] leading-relaxed">
                  Reach out to us and we'll connect you with the right
                  specialist to address your requirements promptly and
                  professionally.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#F8FAFC] rounded-[26px] p-6 md:p-8 border border-[#E5E7EB] shadow-sm"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
            >
              <div className="mb-6">
                <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-[#111827]">
                  Send Us a Message
                </h3>
                <p className="mt-1.5 text-sm text-[#6B7280]">
                  Fill in the details below and our team will get back to you
                  within 24 hours.
                </p>
              </div>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-[#D1FAE5] bg-[#ECFDF5] px-6 py-12 text-center">
                  <FaCheckCircle className="text-[#10B981]" size={44} />
                  <h4 className="mt-4 font-['Playfair_Display'] text-2xl font-bold text-[#111827]">
                    Thank You!
                  </h4>
                  <p className="mt-2 max-w-sm text-sm text-[#4B5563]">
                    Your message has been sent successfully. Our team will
                    contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-semibold text-[#047857] hover:text-[#10B981] transition"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field to block spam bots */}
                  <input
                    type="text"
                    name="_honey"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" icon={FaUser} required>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Company Name" icon={FaBuilding}>
                      <input
                        type="text"
                        name="company"
                        placeholder="Hospital / Organization"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Email" icon={FaEnvelope} required>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Phone Number" icon={FaPhoneAlt}>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field label="Message" icon={FaCommentDots} required>
                    <textarea
                      rows="4"
                      name="message"
                      required
                      placeholder="Type your message here..."
                      className={`${inputClass} resize-none`}
                    ></textarea>
                  </Field>

                  {status === "error" && (
                    <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                      Something went wrong. Please try again or call us at +91
                      7701905739.
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#10B981] py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-[#047857] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane size={14} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
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
                    First Floor, Shop No. 1 & 2, Hari Bihar Colony, near Mani
                    International Hotel, opposite Krishi Bhawan, Mithapur,
                    <br />
                    Patna, Bihar – 800001
                  </>
                ),
              },
              {
                icon: <FaPhoneAlt className="text-[#10B981] text-5xl" />,
                title: "Phone",
                bg: "bg-[#ECFDF5]",
                content: (
                  <>
                    <p>+91 8178996877</p>
                    <p>+91 7701905739</p>
                  </>
                ),
              },
              {
                icon: <HiOutlineMail className="text-[#10B981] text-5xl" />,
                title: "Email",
                bg: "bg-white",
                content: (
                  <>
                    <p>jagdambahealthcare852@gmail.com</p>
                    <p>jagdambahealthcare851@gmail.com</p>
                  </>
                ),
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

      <Footer />
    </div>
  );
}
