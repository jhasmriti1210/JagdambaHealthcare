import { motion } from "framer-motion";
import Partners from "../app-layout/partners";
import PartnerAndContact from "../app-layout/partnerAndContact";
import Footer from "../app-layout/footer";

export default function About() {
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
            About Us
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-white/90 text-lg md:text-2xl font-medium max-w-4xl mx-auto"
          >
            Redefining Medical Access, One Innovation at a Time
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
              <p className="text-[#047857] text-lg font-medium">— About Us</p>

              <h2 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#111827]">
                Who We Are
              </h2>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-[#4B5563]">
                At Jagdamba Healthcare, we are committed to bridging the gap
                between trusted healthcare solutions and people’s everyday
                medical needs. Our mission is to enhance healthcare access
                through quality, care, reliability, and ethical service.
              </p>

              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 border border-[#10B981] text-[#047857] rounded-xl text-base font-semibold hover:bg-[#10B981] hover:text-white transition"
              >
                Contact Us
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
                src="/about/about-section.png"
                alt="Who We Are"
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
            <p className="text-[#10B981] text-lg font-medium">
              — Core Values —
            </p>

            <h2 className="mt-3 font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-white">
              What We Stand For
            </h2>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                img: "/about/integrity.jpg",
                title: "Integrity & Excellence",
                text: "Ethical practices, quality, and care in everything we do.",
                bg: "bg-white",
              },
              {
                img: "/about/agility.jpg",
                title: "Trust & Reliability",
                text: "Building long-term trust through dependable healthcare service.",
                bg: "bg-[#ECFDF5]",
              },
              {
                img: "/about/partnership.jpg",
                title: "Care & Collaboration",
                text: "Creating lasting value with patients, partners, and providers.",
                bg: "bg-white",
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
                className={`${card.bg} rounded-[24px] p-5 shadow-lg`}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-52 object-cover rounded-2xl"
                />

                <h3 className="mt-5 text-center text-2xl font-semibold text-[#047857]">
                  {card.title}
                </h3>

                <p className="mt-3 text-center text-base leading-relaxed text-[#4B5563]">
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
                  <img
                    src="/about/mission-icon.png"
                    alt="Mission"
                    className="w-8 h-8"
                  />
                </div>

                <div>
                  <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#111827]">
                    Our Mission
                  </h2>

                  <p className="mt-3 text-lg text-[#111827]">
                    To redefine healthcare support through:
                  </p>

                  <ul className="mt-4 list-disc pl-6 space-y-2 text-base text-[#4B5563] leading-relaxed">
                    <li>Seamless access to reliable healthcare solutions</li>
                    <li>Ethical operations rooted in care and trust</li>
                    <li>Better outcomes through quality and collaboration</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeLeft} className="flex gap-5">
                <div className="w-16 h-16 bg-[#ECFDF5] rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src="/about/vision-icon.png"
                    alt="Vision"
                    className="w-8 h-8"
                  />
                </div>

                <div>
                  <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#111827]">
                    Our Vision
                  </h2>

                  <p className="mt-3 text-lg text-[#4B5563] leading-relaxed">
                    To be India's trusted healthcare partner for accessible,
                    reliable, and quality-driven care.
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
                src="/about/mission-bg.jpg"
                alt="Medical Technology"
                className="absolute top-0 right-0 w-[82%] rounded-[28px] shadow-xl"
                whileHover={{ scale: 1.02 }}
              />

              <motion.img
                src="/about/mission-front.jpg"
                alt="Healthcare"
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
              <p className="text-[#047857] text-lg font-medium">
                — Our Leadership
              </p>

              <h2 className="font-['Playfair_Display'] mt-4 text-4xl md:text-5xl font-bold text-[#111827]">
                Sunil Jha
              </h2>

              <h3 className="font-['Playfair_Display'] mt-3 text-xl md:text-2xl text-[#4B5563]">
                Founder & Managing Director
              </h3>

              <p className="font-['Playfair_Display'] mt-6 text-base md:text-lg leading-relaxed text-[#4B5563]">
                An IIM Ahmedabad alumnus with over 20 years of experience, Sunil
                Jha is a visionary business leader with proven expertise in
                scaling healthcare ventures across multiple domains.
              </p>

              <p className="font-['Playfair_Display'] mt-4 text-base md:text-lg leading-relaxed text-[#4B5563]">
                Known for empowering teams and fostering growth, he is committed
                to transforming healthcare access through smart distribution
                models and strategic partnerships.
              </p>
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
                  alt="Sunil Jha"
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
