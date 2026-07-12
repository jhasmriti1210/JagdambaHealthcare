import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Partners from "../app-layout/partners";
import PartnerAndContact from "../app-layout/partnerandcontact";
import Footer from "../app-layout/footer";
import { useState } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);
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

  const coreValues = [
    {
      img: "/aboutpage/about1.png",
      title: "Quality & Compliance",
      text: "We follow strict quality standards to ensure dependable healthcare products and solutions.",
      bg: "bg-white",
    },
    {
      img: "/aboutpage/about2.png",
      title: "Trust & Integrity",
      text: "We build long-term relationships through honesty, transparency, and ethical business practices.",
      bg: "bg-[#ECFDF5]",
    },
    {
      img: "/aboutpage/about3.png",
      title: "Customer-Centric Approach",
      text: "We work closely with healthcare institutions to understand and support their evolving needs.",
      bg: "bg-white",
    },
    {
      img: "/aboutpage/about4.png",
      title: "Innovation & Improvement",
      text: "We continuously improve our services to make advanced healthcare solutions more accessible.",
      bg: "bg-[#ECFDF5]",
    },
    {
      img: "/aboutpage/about5.png",
      title: "Reliable Timely Service",
      text: "We focus on timely delivery, consistent support, and dependable service when it matters most.",
      bg: "bg-white",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section
        className="relative h-[55vh] md:h-[65vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/aboutbg.png')",
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
            — About Us—
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-['Playfair_Display'] text-white text-5xl md:text-7xl font-bold"
          >
            About Us
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-['Playfair_Display'] mt-5 text-white/90 text-lg md:text-2xl font-medium max-w-4xl mx-auto"
          >
            Jagdamba Healthcare: Your Lifeline in Cardiology and Cardiovascular
            Products.
          </motion.p>
        </motion.div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <Partners />
      </motion.div>

      {/* Who We Are */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <p className="font-['Playfair_Display'] text-[#047857] text-lg font-medium">
                — About Us
              </p>

              <h2 className="font-['Playfair_Display'] mt-4 text-4xl md:text-5xl font-bold text-[#111827]">
                Who We Are
              </h2>

              <p className="font-['Playfair_Display'] mt-6 text-base md:text-lg leading-relaxed text-[#4B5563]">
                At Jagdamba Healthcare, we are dedicated to advancing healthcare
                through the supply of high-quality medical devices, surgical
                disposables, cardiology products, critical care consumables, and
                hospital solutions. Backed by 9+ years of industry experience,
                we have earned the trust of healthcare professionals by
                consistently delivering reliable products and exceptional
                service.
              </p>

              {showMore && (
                <>
                  <p className="font-['Playfair_Display'] mt-5 text-base md:text-lg leading-relaxed text-[#4B5563]">
                    With a strong focus on quality, trust, and service
                    excellence, we work closely with hospitals, clinics,
                    diagnostic centers, and healthcare institutions to meet
                    their evolving medical needs. We understand that in
                    healthcare, every product matters.
                  </p>

                  <p className="font-['Playfair_Display'] mt-5 text-base md:text-lg leading-relaxed text-[#4B5563]">
                    Our mission extends beyond product supply. We aim to build
                    long-term partnerships by offering dependable service,
                    timely delivery, and personalized support.
                  </p>

                  <p className="font-['Playfair_Display'] mt-5 text-base md:text-lg leading-relaxed text-[#4B5563]">
                    At Jagdamba Healthcare, integrity, reliability, and patient
                    care remain at the heart of everything we do. As we continue
                    to grow, our goal is to be recognized as a trusted
                    healthcare partner.
                  </p>
                </>
              )}

              <motion.button
                onClick={() => setShowMore(!showMore)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-['Playfair_Display'] mt-8 px-8 py-3 border border-[#10B981] text-[#047857] rounded-xl text-base font-semibold hover:bg-[#10B981] hover:text-white transition"
              >
                {showMore ? "Read Less" : "Read More"}
              </motion.button>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
            >
              <motion.img
                src="/whoweare.png"
                alt="Jagdamba Healthcare"
                className="w-full max-w-xl rounded-[28px] shadow-xl object-cover"
                whileHover={{ scale: 1.03 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#111827] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="font-['Playfair_Display'] text-[#10B981] text-lg font-medium">
              — Core Values —
            </p>

            <h2 className="font-['Playfair_Display'] mt-3 text-4xl md:text-6xl font-bold text-white">
              What We Stand For
            </h2>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {coreValues.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0px 20px 35px rgba(16,185,129,0.2)",
                }}
                className={`${card.bg} rounded-[24px] p-4 shadow-lg`}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-40 object-cover rounded-2xl"
                />

                <h3 className="font-['Playfair_Display'] mt-4 text-center text-xl font-semibold text-[#047857]">
                  {card.title}
                </h3>

                <p className="font-['Playfair_Display'] mt-3 text-center text-sm leading-relaxed text-[#4B5563]">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F8FAFC] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              className="space-y-10"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div variants={fadeLeft} className="flex gap-5">
                <div className="w-16 h-16 bg-[#ECFDF5] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#047857] text-2xl font-bold">M</span>
                </div>

                <div>
                  <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#111827]">
                    Our Mission
                  </h2>

                  <p className="font-['Playfair_Display'] mt-3 text-lg text-[#111827]">
                    To provide reliable, high-quality healthcare products and
                    solutions that empower medical professionals and enhance
                    patient care.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeLeft} className="flex gap-5">
                <div className="w-16 h-16 bg-[#ECFDF5] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#047857] text-2xl font-bold">V</span>
                </div>

                <div>
                  <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#111827]">
                    Our Vision
                  </h2>

                  <p className="font-['Playfair_Display'] mt-3 text-lg text-[#4B5563] leading-relaxed">
                    To become a trusted leader in healthcare distribution by
                    delivering excellence, innovation, and value to the
                    healthcare community.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative h-[480px] hidden lg:block"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
            >
              <motion.img
                src="/mission.png"
                alt="Healthcare Products"
                className="absolute top-0 right-0 w-[82%] rounded-[28px] shadow-xl"
                whileHover={{ scale: 1.02 }}
              />

              <motion.img
                src="/vision.png"
                alt="Medical Solutions"
                className="absolute bottom-0 right-0 w-[72%] rounded-[28px] shadow-2xl border-6 border-white"
                whileHover={{ scale: 1.03 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <p className="font-['Playfair_Display'] text-[#047857] text-lg font-medium">
                — Our Leadership
              </p>

              <h2 className="font-['Playfair_Display'] mt-4 text-4xl md:text-5xl font-bold text-[#111827]">
                Mr. Sunil Kumar Jha
              </h2>

              <h3 className="font-['Playfair_Display'] mt-3 text-xl md:text-2xl text-[#4B5563]">
                Proprietor
              </h3>

              <p className="font-['Playfair_Display'] mt-6 text-base md:text-lg leading-relaxed text-[#4B5563]">
                Mr. Sunil Kumar Jha, Proprietor of Jagdamba Healthcare, leads
                the company with a strong focus on quality, reliability, and
                long-term service relationships with healthcare institutions.
              </p>

              <p className="font-['Playfair_Display'] mt-4 text-base md:text-lg leading-relaxed text-[#4B5563]">
                With 9+ years of industry experience, Jagdamba Healthcare
                continues to support hospitals, clinics, vendors and medical
                professionals with dependable healthcare products and timely
                service.
              </p>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-['Playfair_Display'] mt-8 px-8 py-3 bg-[#10B981] text-white rounded-xl text-base font-semibold hover:bg-[#047857] transition"
                >
                  Connect With Us
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -6 }}
                className="bg-[#047857] rounded-[32px] overflow-hidden w-full max-w-2xl"
              >
                <img
                  src="/about/leadership.png"
                  alt="Mr. Sunil Kumar Jha"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <PartnerAndContact />
      <Footer />
    </div>
  );
}
