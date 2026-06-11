import { motion } from "framer-motion";
import Partners from "../app-layout/partners";
import PartnerAndContact from "../app-layout/partnerAndContact";
import Footer from "../app-layout/footer";

export default function About() {
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

  const cardHover = {
    y: -14,
    scale: 1.03,
    boxShadow: "0px 25px 45px rgba(0,0,0,0.25)",
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/about-hero.jpg')",
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
            About Us
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-white text-xl md:text-4xl font-medium max-w-5xl mx-auto"
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

      {/* Who We Are Section */}
      <section className="bg-[#F7F7F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <p className="text-[#005B8F] text-xl font-medium">— About Us</p>

              <h2 className="mt-8 text-5xl md:text-6xl font-bold text-[#005B8F]">
                Who We Are
              </h2>

              <p className="mt-10 text-xl md:text-2xl leading-relaxed text-gray-800">
                At Trivexa Medtech Pvt Ltd, we are committed to bridging the gap
                between cutting-edge global medical technologies and India’s
                diverse healthcare needs. With over 20 years of expertise, our
                mission is to enhance healthcare delivery through strategic
                distribution, operational excellence, and market intelligence.
              </p>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-10 py-4 border border-[#005B8F] text-[#005B8F] rounded-2xl text-xl font-semibold hover:bg-[#005B8F] hover:text-white transition duration-300"
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
                className="w-full max-w-3xl rounded-[32px] shadow-xl object-cover"
                whileHover={{ scale: 1.04, rotate: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#247AA8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-white text-lg md:text-xl font-medium">
              — Core Values —
            </p>

            <h2 className="mt-4 text-5xl md:text-7xl font-light text-white">
              What We Stand For
            </h2>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                img: "/about/integrity.jpg",
                title: "Integrity & Excellence",
                text: "Ethical practices, quality, and compliance in everything we do.",
                bg: "bg-[#F5F5F5]",
              },
              {
                img: "/about/agility.jpg",
                title: "Forward Thinking & Agility",
                text: "Adapting with innovation and offering 24x7 responsive support.",
                bg: "bg-[#CFE1F3]",
              },
              {
                img: "/about/partnership.jpg",
                title: "Partnership & Collaboration",
                text: "Creating lasting value with partners and providers for better outcomes.",
                bg: "bg-[#F5F5F5]",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={cardHover}
                className={`${card.bg} rounded-[28px] p-6 shadow-lg`}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-72 object-cover rounded-2xl"
                />

                <h3 className="mt-8 text-center text-3xl font-semibold text-[#005B8F]">
                  {card.title}
                </h3>

                <p className="mt-6 text-center text-xl leading-relaxed text-black">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[#F8F8F8] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-20"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div variants={fadeLeft} className="flex gap-8">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="w-24 h-24 bg-[#F1F1F1] rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src="/about/mission-icon.png"
                    alt="Mission"
                    className="w-12 h-12"
                  />
                </motion.div>

                <div>
                  <h2 className="text-5xl font-bold text-[#005B8F]">
                    Our Mission
                  </h2>

                  <p className="mt-6 text-2xl text-black">
                    To redefine MedTech distribution through:
                  </p>

                  <ul className="mt-8 list-disc pl-8 space-y-4 text-xl text-black leading-relaxed">
                    <li>Seamless access to world-class innovations</li>
                    <li>
                      Efficient and ethical operations rooted in compliance and
                      trust
                    </li>
                    <li>
                      Scalable strategies that empower providers and improve
                      patient outcomes
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeLeft} className="flex gap-8">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  className="w-24 h-24 bg-[#F1F1F1] rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src="/about/vision-icon.png"
                    alt="Vision"
                    className="w-12 h-12"
                  />
                </motion.div>

                <div>
                  <h2 className="text-5xl font-bold text-[#005B8F]">
                    Our Vision
                  </h2>

                  <p className="mt-6 text-2xl text-black leading-relaxed">
                    To be India's most trusted partner in expanding access to
                    advanced medical technologies.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative h-[700px] hidden lg:block"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
            >
              <motion.img
                src="/about/mission-bg.jpg"
                alt="Medical Technology"
                className="absolute top-0 right-0 w-[85%] rounded-[32px] shadow-xl"
                whileHover={{ scale: 1.03 }}
              />

              <motion.img
                src="/about/mission-front.jpg"
                alt="Healthcare"
                className="absolute bottom-0 right-0 w-[75%] rounded-[32px] shadow-2xl border-8 border-white"
                whileHover={{ scale: 1.04, x: -10, y: -10 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-[#F7F7F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <p className="text-[#005B8F] text-xl font-medium">
                — Our Leadership
              </p>

              <h2 className="mt-8 text-5xl md:text-6xl font-bold text-[#005B8F]">
                Gagandeep Kathuria
              </h2>

              <h3 className="mt-4 text-2xl md:text-3xl text-black">
                Founder & Managing Director
              </h3>

              <p className="mt-12 text-xl md:text-2xl leading-relaxed text-black">
                An IIM Ahmedabad alumnus with over 20 years of experience,
                Gagandeep is a visionary business leader with proven expertise
                in scaling MedTech ventures across domains like Cardiac Rhythm
                Management, Electrophysiology, Interventional Cardiology, and
                Structural Heart.
              </p>

              <p className="mt-6 text-xl md:text-2xl leading-relaxed text-black">
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
                whileHover={{ scale: 1.03, y: -10 }}
                className="bg-[#247AA8] rounded-[40px] overflow-hidden w-full max-w-4xl"
              >
                <img
                  src="/about/leadership.png"
                  alt="Gagandeep Kathuria"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <PartnerAndContact />
      </motion.div>

      <Footer />
    </div>
  );
}
