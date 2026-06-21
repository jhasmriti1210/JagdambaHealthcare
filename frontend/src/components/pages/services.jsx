import { motion } from "framer-motion";
import Partners from "../app-layout/partners";
import PartnerAndContact from "../app-layout/partnerAndContact";
import Footer from "../app-layout/footer";

export default function Services() {
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
      transition: { staggerChildren: 0.14 },
    },
  };

  const services = [
    {
      img: "/services/services1.jpg",
      title: "Cardiology",
      subtitle: "Comprehensive cardiology and cardiovascular care solutions.",
      points: [
        "Cardiology products and consumables.",
        "Support for hospitals and cardiac centers.",
        "Trusted solutions for cardiovascular care.",
      ],
      bg: "bg-white",
    },
    {
      img: "/services/services2.jpg",
      title: "Cardiac Surgery",
      subtitle: "Reliable products for advanced cardiac surgical procedures.",
      points: [
        "High-quality cardiac surgery products.",
        "Support for surgical interventions.",
        "Designed for safety and performance.",
      ],
      bg: "bg-[#ECFDF5]",
    },
    {
      img: "/services/services3.jpg",
      title: "Critical Care",
      subtitle: "Essential products for critical care units and hospitals.",
      points: [
        "Critical care consumables.",
        "Reliable hospital support products.",
        "Timely availability for urgent care needs.",
      ],
      bg: "bg-white",
    },
    {
      img: "/services/services4.jpg",
      title: "Cardiac Equipment",
      subtitle: "Equipment support for cardiac departments and specialists.",
      points: [
        "Cardiac equipment solutions.",
        "Support for diagnostic and treatment needs.",
        "Reliable products from trusted brands.",
      ],
      bg: "bg-[#ECFDF5]",
    },
    {
      img: "/services/services5.png",
      title: "Surgical Disposables",
      subtitle: "Quality surgical disposable products for safe procedures.",
      points: [
        "Sterile and dependable disposables.",
        "Products for hospitals and surgical units.",
        "Quality-focused supply and service.",
      ],
      bg: "bg-white",
    },
  ];

  const chooseCards = [
    {
      img: "/trustqua.png",
      title: "Trusted Quality",
      text: "We supply healthcare products that meet high standards of quality, reliability, and performance.",
    },
    {
      img: "/industryexp.png",
      title: "Industry Expertise",
      text: "Backed by 9+ years of experience, we understand the evolving needs of healthcare institutions.",
    },
    {
      img: "/healthsupp.png",
      title: "Responsive Support",
      text: "Our team is committed to providing dependable service, timely delivery, and personalized assistance.",
    },
    {
      img: "/excellence.png",
      title: "Healthcare Excellence",
      text: "We focus on building long-term partnerships and delivering excellence across every healthcare solution.",
    },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[55vh] md:h-[65vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/servicesbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#111827]/40"></div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="text-[#10B981] text-lg font-semibold tracking-wide"
          >
            — Services —
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-['Playfair_Display'] mt-4 text-white text-5xl md:text-7xl font-bold"
          >
            Our Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-['Playfair_Display'] mt-6 text-white/90 text-lg md:text-2xl font-medium max-w-4xl mx-auto"
          >
            Advanced healthcare solutions with a wide portfolio of medical
            devices, surgical disposables, cardiology, cardiac surgery, and
            critical care products.
          </motion.p>
        </motion.div>
      </section>

      <Partners />

      {/* Services Section */}
      <section className="bg-gradient-to-br from-[#111827] to-[#1F2937] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="font-['Playfair_Display'] text-[#10B981] text-lg font-medium">
              — Our Services —
            </p>

            <h2 className="font-['Playfair_Display'] mt-4 text-4xl md:text-6xl font-bold text-white">
              What We Offer
            </h2>

            <p className="font-['Playfair_Display'] mt-6 max-w-4xl mx-auto text-white/80 text-lg md:text-xl leading-relaxed">
              Advanced healthcare solutions with a wide portfolio of medical
              devices, surgical disposables, cardiology, cardiac surgery, and
              critical care products designed to support hospitals, clinics, and
              healthcare institutions with reliability and excellence.
            </p>
          </motion.div>

          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${service.bg} rounded-[28px] p-6 md:p-8 mb-7 shadow-xl border border-white/10`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              whileHover={{
                scale: 1.01,
                boxShadow: "0px 22px 42px rgba(16,185,129,0.18)",
              }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className={`w-full h-[360px] object-cover rounded-3xl ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                  variants={index % 2 === 0 ? fadeLeft : fadeRight}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className={index % 2 !== 0 ? "lg:order-1" : ""}
                  variants={index % 2 === 0 ? fadeRight : fadeLeft}
                >
                  <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#111827]">
                    {service.title}
                  </h3>

                  <p className="font-['Playfair_Display'] mt-4 text-lg text-[#4B5563] leading-relaxed">
                    {service.subtitle}
                  </p>

                  <ul className="font-['Playfair_Display'] mt-6 space-y-3 text-base md:text-lg text-[#374151] leading-relaxed">
                    {service.points.map((point, i) => (
                      <motion.li
                        key={i}
                        className="flex gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-[#10B981] flex-shrink-0"></span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="font-['Playfair_Display'] text-[#047857] text-lg font-medium">
              — Why Choose Us —
            </p>

            <h2 className="font-['Playfair_Display'] mt-4 text-4xl md:text-5xl font-bold text-[#111827]">
              What Sets Us Apart
            </h2>

            <p className="font-['Playfair_Display'] mt-5 max-w-4xl mx-auto text-[#4B5563] text-lg leading-relaxed">
              Trusted quality, industry expertise, responsive support, and a
              strong commitment to delivering excellence in healthcare. We focus
              on building long-term partnerships through dependable service,
              timely delivery, and customer-focused solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {chooseCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0px 18px 36px rgba(16,185,129,0.18)",
                }}
                className="font-['Playfair_Display'] bg-white border border-[#E5E7EB] rounded-[26px] p-5 text-center shadow-sm hover:border-[#10B981]/40 transition"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-52 object-cover rounded-2xl"
                />

                <h3 className="mt-6 text-2xl font-bold text-[#111827]">
                  {card.title}
                </h3>

                <p className="mt-4 text-[#4B5563] text-base leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
