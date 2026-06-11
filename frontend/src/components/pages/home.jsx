import { motion } from "framer-motion";
import Footer from "../app-layout/footer";
import Partners from "../app-layout/partners";
import PartnerAndContact from "../app-layout/partnerAndContact";

export default function Home() {
  const partners = [
    { name: "Edwards Lifesciences", logo: "/partners/edwards.png" },
    { name: "Magnet Medical", logo: "/partners/magnet.png" },
    { name: "Kai Medical", logo: "/partners/kai.png" },
    { name: "Dhanam", logo: "/partners/dhanam.png" },
  ];

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
    <div className="w-full min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.img
          src="/hero-bg.jpg"
          alt="Healthcare"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="text-white font-light text-5xl md:text-8xl leading-tight"
          >
            Essential to Advancing Care
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-white text-lg md:text-3xl font-light max-w-5xl"
          >
            Redefining the Standards of Healthcare Access, Delivery, and
            Innovation
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-[#005B99] hover:bg-[#00497A] text-white px-10 py-4 rounded-2xl text-xl font-semibold transition"
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
      </motion.div>

      {/* Clientele Section */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-xl text-black font-light">— Our Partners —</p>

            <h2 className="mt-6 text-4xl md:text-6xl font-light text-[#005B99]">
              Collaborating with Global Leaders in MedTech
            </h2>
          </motion.div>

          <motion.div
            className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-14 items-center"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.12, y: -8 }}
                className="flex justify-center items-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-24 md:max-h-32 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
          >
            <motion.img
              src="/about/about-us.png"
              alt="About Trivexa"
              className="w-full max-w-2xl rounded-3xl shadow-xl object-cover"
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
          >
            <p className="text-lg font-semibold text-black">— About Us</p>

            <h2 className="mt-8 text-4xl md:text-6xl font-bold text-[#005B8F]">
              Who We Are
            </h2>

            <p className="mt-10 text-lg md:text-xl leading-relaxed text-black max-w-3xl">
              At Trivexa Medtech Pvt Ltd, we are committed to bridging the gap
              between cutting-edge global medical technologies and India’s
              diverse healthcare needs. With over 20 years of expertise, our
              mission is to enhance healthcare delivery through strategic
              distribution, operational excellence, and market intelligence.
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-10 py-3 border border-[#005B8F] text-[#005B8F] rounded-xl text-lg font-semibold hover:bg-[#005B8F] hover:text-white transition"
            >
              Read More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#1F79A8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-white text-xl font-medium">— Core Values —</p>

            <h2 className="mt-6 text-5xl md:text-7xl font-bold text-white">
              What We Stand For
            </h2>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                img: "/values/integrity.jpg",
                title: "Integrity & Excellence",
                text: "Ethical practices, quality, and compliance in everything we do.",
              },
              {
                img: "/values/innovation.jpg",
                title: "Forward Thinking & Agility",
                text: "Adapting with innovation and offering responsive support.",
              },
              {
                img: "/values/partnership.jpg",
                title: "Partnership & Collaboration",
                text: "Creating lasting value with partners and providers for better outcomes.",
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
                className="bg-white rounded-3xl p-6 shadow-xl"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-72 object-cover rounded-2xl"
                />

                <h3 className="mt-6 text-3xl font-bold text-[#005B8F] text-center">
                  {card.title}
                </h3>

                <p className="mt-6 text-center text-gray-700 text-lg leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f5f5f5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-1 bg-white rounded-[30px] p-12 shadow-md"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <p className="text-[#005B8F] font-semibold mb-6">
                — Our Services
              </p>

              <h2 className="text-4xl font-bold text-[#005B8F] leading-tight">
                Transforming Access to Medical Innovation Across India
              </h2>

              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                At Trivexa Medtech Pvt Ltd, our services are designed to bridge
                the gap between world-class medical technologies and the unique
                needs of India's healthcare ecosystem.
              </p>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 border border-[#005B8F] text-[#005B8F] px-8 py-3 rounded-xl font-semibold hover:bg-[#005B8F] hover:text-white transition"
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
                {[
                  {
                    title: "Operational & Logistical Excellence",
                    img: "/services/logistics.jpg",
                    text: "Automation and standardization to streamline healthcare delivery.",
                    bg: "bg-[#267AA6]",
                  },
                  {
                    title: "Access & Expansion",
                    img: "/services/access.jpg",
                    text: "Reaching underserved markets with broad insight and reach.",
                    bg: "bg-[#267AA6]",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ scale: 1.04, y: -10 }}
                    className={`${service.bg} rounded-[30px] p-8 text-white shadow-xl`}
                  >
                    <h3 className="text-center text-xl font-semibold mb-8">
                      {service.title}
                    </h3>

                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-64 object-cover rounded-3xl"
                    />

                    <p className="text-center mt-6 text-white/90">
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
                  whileHover={{ scale: 1.04, y: -10 }}
                  className="bg-[#004E82] rounded-[30px] p-8 text-white shadow-xl max-w-2xl w-full"
                >
                  <h3 className="text-center text-xl font-semibold mb-8">
                    Market Insights & Growth Strategy
                  </h3>

                  <img
                    src="/services/market.jpg"
                    alt="Market Insights"
                    className="w-full h-72 object-cover rounded-3xl"
                  />

                  <p className="text-center mt-6 text-white/90">
                    Data-driven intelligence to accelerate growth and market
                    adoption.
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
