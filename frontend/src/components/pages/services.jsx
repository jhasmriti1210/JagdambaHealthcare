import { motion } from "framer-motion";
import Partners from "../app-layout/partners";
import PartnerAndContact from "../app-layout/partnerAndContact";
import Footer from "../app-layout/footer";

export default function Services() {
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

  const services = [
    {
      img: "/services/logistics.jpg",
      title: "Operational & Logistical Excellence",
      subtitle:
        "Automation and Standardization to Streamline Healthcare Delivery",
      points: [
        "Transition from traditional systems to standardized inventory management.",
        "Improve supply chain transparency and reduce stockouts.",
        "Streamline delivery to ensure timely access to life-saving devices.",
      ],
      bg: "bg-[#F5F5F5]",
    },
    {
      img: "/services/access.jpg",
      title: "Access & Expansion",
      subtitle: "Reaching underserved markets with local insight and reach.",
      points: [
        "Expand access to advanced medical technologies.",
        "Build stronger regional healthcare networks.",
        "Support market penetration and sustainable growth.",
      ],
      bg: "bg-[#D8E7F6]",
    },
    {
      img: "/services/analytics.jpg",
      title: "Market Insights & Growth Strategy",
      subtitle: "Data-driven planning and business intelligence solutions.",
      points: [
        "Healthcare market intelligence and analytics.",
        "Growth planning and commercial strategy support.",
        "Performance optimization through actionable insights.",
      ],
      bg: "bg-[#F5F5F5]",
    },
  ];

  const chooseCards = [
    {
      img: "/services/expertise.jpg",
      title: "20+ Years of Industry Expertise",
      text: "We bring decades of specialized knowledge in cardiology, cardiac surgery, and structural heart technologies — ensuring strategic, knowledgeable representation.",
    },
    {
      img: "/services/partnership.jpg",
      title: "Global Partnerships, Local Execution",
      text: "We partner with leading international MedTech brands to deliver tailored solutions through a deeply connected network across Northern & Eastern India.",
    },
    {
      img: "/services/logistics-excellence.jpg",
      title: "Operational & Logistical Excellence",
      text: "From real-time inventory systems to standardized processes, we optimize supply chains and ensure consistent product availability.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/services-hero.jpg')",
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
            Our Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-white text-xl md:text-4xl font-medium max-w-5xl mx-auto"
          >
            Empowering Healthcare Access Through Precision, Innovation, and
            Partnership.
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

      {/* Services Section */}
      <section className="bg-[#247AA8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-white text-xl font-medium">— Our Services —</p>

            <h2 className="mt-4 text-6xl md:text-8xl font-light text-white">
              What We Offer
            </h2>
          </motion.div>

          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${service.bg} rounded-[32px] p-8 md:p-12 mb-8 shadow-xl`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              whileHover={{
                scale: 1.015,
                boxShadow: "0px 25px 45px rgba(0,0,0,0.25)",
              }}
            >
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[450px] object-cover rounded-3xl"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={index % 2 === 0 ? fadeLeft : fadeRight}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={index % 2 === 0 ? fadeRight : fadeLeft}
                >
                  <h3 className="text-4xl md:text-6xl font-semibold text-[#005B8F]">
                    {service.title}
                  </h3>

                  <p className="mt-6 text-xl">{service.subtitle}</p>

                  <ul className="mt-8 space-y-4 list-disc pl-6 text-lg">
                    {service.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#F7F7F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-[#005B8F] text-xl font-medium">
              — Why Choose Us —
            </p>

            <h2 className="mt-4 text-5xl md:text-7xl font-bold text-[#005B8F]">
              What Sets Us Apart
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  y: -14,
                  scale: 1.03,
                  boxShadow: "0px 25px 45px rgba(0,0,0,0.25)",
                }}
                className="bg-[#247AA8] rounded-[30px] p-8 text-center shadow-lg"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-72 object-cover rounded-3xl"
                />

                <h3 className="mt-8 text-3xl font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-6 text-white text-lg leading-relaxed">
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
