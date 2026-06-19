import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../app-layout/footer";
import Partners from "../app-layout/partners";
import PartnerAndContact from "../app-layout/partnerAndContact";
import Client from "../app-layout/client";

export default function Home() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 70 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -70 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 70 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.16 },
    },
  };

  const coreValues = [
    {
      img: "/aboutpage/about1.png",
      title: "Quality & Compliance",
      text: "We follow strict quality standards to deliver dependable healthcare products and solutions.",
      bg: "bg-white",
    },
    {
      img: "/aboutpage/about2.png",
      title: "Trust & Integrity",
      text: "We build long-term relationships through honesty, transparency, and ethical service.",
      bg: "bg-[#ECFDF5]",
    },
    {
      img: "/aboutpage/about3.png",
      title: "Customer-Centric Approach",
      text: "We work closely with hospitals, clinics, and healthcare institutions to support their needs.",
      bg: "bg-white",
    },
    {
      img: "/aboutpage/about4.png",
      title: "Innovation & Improvement",
      text: "We continuously improve our services to make healthcare solutions more accessible.",
      bg: "bg-[#ECFDF5]",
    },
    {
      img: "/aboutpage/about5.png",
      title: "Reliable Timely Service",
      text: "We focus on timely delivery, dependable support, and consistent professional service.",
      bg: "bg-white",
    },
  ];

  const services = [
    {
      title: "Medical Product Supply",
      img: "/services/logistics.jpg",
      text: "High-quality medical devices, cardiology products, surgical disposables, and consumables.",
      bg: "bg-[#047857]",
    },
    {
      title: "Hospital Support Solutions",
      img: "/services/access.jpg",
      text: "Reliable product availability, timely delivery, and dedicated support for healthcare institutions.",
      bg: "bg-[#047857]",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.img
          src="/img.png"
          alt="Jagdamba Healthcare"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-[#111827]/55"></div>

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="font-['Playfair_Display'] text-[#10B981] text-lg md:text-xl font-semibold"
          >
            Jagdamba Healthcare
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-['Playfair_Display'] mt-4 text-white font-bold text-5xl md:text-7xl leading-tight max-w-5xl"
          >
            Your Lifeline in Cardiology and Cardiovascular Products
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-['Playfair_Display'] mt-6 text-white/90 text-lg md:text-2xl font-light max-w-4xl"
          >
            Delivering trusted medical devices, critical care consumables,
            surgical disposables, and hospital solutions with quality and care.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="font-['Playfair_Display'] mt-10 bg-[#10B981] hover:bg-[#047857] text-white px-10 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <Partners />
        <Client />
      </motion.div>

      {/* About Section */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
          >
            <motion.img
              src="/about/about-us.png"
              alt="About Jagdamba Healthcare"
              className="w-full max-w-2xl rounded-3xl shadow-xl object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
          >
            <p className="font-['Playfair_Display'] text-lg font-semibold text-[#047857]">
              — About Us
            </p>

            <h2 className="font-['Playfair_Display'] mt-6 text-4xl md:text-5xl font-bold text-[#111827]">
              Who We Are
            </h2>

            <p className="font-['Playfair_Display'] mt-8 text-base md:text-lg leading-relaxed text-[#4B5563] max-w-3xl">
              At Jagdamba Healthcare, we are dedicated to advancing healthcare
              through the supply of high-quality medical devices, surgical
              disposables, cardiology products, critical care consumables, and
              hospital solutions. Backed by 9+ years of industry experience, we
              have earned the trust of healthcare professionals by consistently
              delivering reliable products and exceptional service.
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about")}
              className="font-['Playfair_Display'] mt-8 px-9 py-3 border border-[#10B981] text-[#047857] rounded-xl text-base font-semibold hover:bg-[#10B981] hover:text-white transition"
            >
              Read More
            </motion.button>
          </motion.div>
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

      {/* Services Section */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-1 bg-white rounded-[30px] p-10 shadow-md border border-[#E5E7EB]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <p className="font-['Playfair_Display'] text-[#047857] font-semibold mb-5">
                — Our Services
              </p>

              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827] leading-tight">
                Transforming Access to Quality Healthcare
              </h2>

              <p className="font-['Playfair_Display'] mt-6 text-[#4B5563] text-base leading-relaxed">
                Our services are designed to support hospitals, clinics, and
                healthcare institutions with reliable product supply, quality
                assurance, and timely service.
              </p>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/services")}
                className="font-['Playfair_Display'] mt-8 border border-[#10B981] text-[#047857] px-8 py-3 rounded-xl font-semibold hover:bg-[#10B981] hover:text-white transition"
              >
                Read More
              </motion.button>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ scale: 1.03, y: -8 }}
                    className={`${service.bg} rounded-[30px] p-7 text-white shadow-xl`}
                  >
                    <h3 className="font-['Playfair_Display'] text-center text-xl font-semibold mb-6">
                      {service.title}
                    </h3>

                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-64 object-cover rounded-3xl"
                    />

                    <p className="font-['Playfair_Display'] text-center mt-5 text-white/90">
                      {service.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="flex justify-center mt-8"
                variants={fadeUp}
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="bg-[#111827] rounded-[30px] p-6 text-white shadow-xl max-w-2xl w-full"
                >
                  <h3 className="font-['Playfair_Display'] text-center text-xl font-semibold mb-6">
                    Growth & Healthcare Excellence
                  </h3>

                  <img
                    src="/services/market.jpg"
                    alt="Healthcare Excellence"
                    className="w-full h-72 object-cover rounded-3xl"
                  />

                  <p className="font-['Playfair_Display'] text-center mt-5 text-white/90">
                    Supporting better healthcare outcomes through trust,
                    quality, product availability, and continuous improvement.
                  </p>
                </motion.div>
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
