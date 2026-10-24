import { motion } from "framer-motion";
import Footer from "../applayout/footer";
import ContactForm from "../applayout/contactform";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const MAP_QUERY = encodeURIComponent(
  "Hari Bihar Colony, Mithapur, Patna, Bihar 800001",
);

const contactCards = [
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    lines: [
      {
        text: "First Floor, Shop No. 1 & 2, Hari Bihar Colony, near Mani International Hotel, opposite Krishi Bhawan, Mithapur, Patna, Bihar – 800001",
      },
    ],
    action: {
      label: "Get Directions",
      href: `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`,
    },
  },
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    lines: [
      { text: "+91 8178996877", href: "tel:+918178996877" },
      { text: "+91 7701905739", href: "tel:+917701905739" },
    ],
  },
  {
    icon: HiOutlineMail,
    title: "Email Us",
    lines: [
      {
        text: "info@jagdambahealthcare.com",
        href: "mailto:info@jagdambahealthcare.com",
      },
    ],
  },
];

const businessHours = [
  { day: "Mon – Fri", time: "9 AM – 7 PM" },
  { day: "Sat", time: "9 AM – 5 PM" },
  { day: "Sun", time: "Closed", closed: true },
];

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
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-[#111827] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-[#10B981] text-sm font-semibold uppercase tracking-[0.2em]">
              Reach Us
            </p>
            <h2 className="font-['Playfair_Display'] mt-2 text-3xl md:text-4xl font-bold text-white">
              We're Here Whenever You Need Us
            </h2>
          </motion.div>

          <motion.div
            className="mt-8 grid gap-5 lg:grid-cols-2"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={fadeLeft}
              className="divide-y divide-white/10 rounded-[20px] border border-white/10 bg-white/[0.04] px-4 sm:px-5"
            >
              {contactCards.map((card) => (
                <div key={card.title} className="flex gap-3 sm:gap-4 py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/15 text-[#10B981]">
                    <card.icon size={16} />
                  </div>
                  <div className="min-w-0 text-sm leading-relaxed text-white/70">
                    <h3 className="text-base font-semibold text-white">
                      {card.title}
                    </h3>
                    {card.lines.map((line) =>
                      line.href ? (
                        <a
                          key={line.text}
                          href={line.href}
                          className="mr-4 inline-block break-words transition hover:text-[#10B981]"
                        >
                          {line.text}
                        </a>
                      ) : (
                        <p key={line.text}>{line.text}</p>
                      ),
                    )}
                    {card.action && (
                      <a
                        href={card.action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[#10B981] hover:underline"
                      >
                        {card.action.label}
                        <FaArrowRight size={10} />
                      </a>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-3 sm:gap-4 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/15 text-[#10B981]">
                  <FaClock size={16} />
                </div>
                <div className="text-sm leading-relaxed text-white/70">
                  <h3 className="text-base font-semibold text-white">
                    Business Hours
                  </h3>
                  <p>
                    {businessHours.map((row, i) => (
                      <span key={row.day} className="block sm:inline">
                        {i > 0 && <span className="hidden sm:inline"> · </span>}
                        {row.day}:{" "}
                        <span
                          className={row.closed ? "text-red-400" : "text-white"}
                        >
                          {row.time}
                        </span>
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              className="overflow-hidden rounded-[20px] border border-white/10 h-[280px] lg:h-auto"
            >
              <iframe
                title="Jagdamba Healthcare location"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
