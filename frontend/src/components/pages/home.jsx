import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../app-layout/footer";
import Partners from "../app-layout/partners";
import PartnerAndContact from "../app-layout/partnerAndContact";

export default function Home() {
  const navigate = useNavigate();
  const partners = [
    { name: "Edwards Lifesciences", logo: "/partners/edwards.png" },
    { name: "Magnet Medical", logo: "/partners/magnet.png" },
    { name: "Kai Medical", logo: "/partners/kai.png" },
    { name: "Dhanam", logo: "/partners/dhanam.png" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -90 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 90 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } },
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.img
          src="/img.png"
          alt="Healthcare"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-[#111827]/70"></div>

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="font-['Playfair_Display'] text-white font-light text-5xl md:text-7xl leading-tight"
          >
            Essential to Advancing Care
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-['Playfair_Display'] mt-6 text-white/90 text-xl md:text-3xl font-light max-w-5xl"
          >
            Redefining the Standards of Healthcare Access, Delivery, and
            Innovation
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="font-['Playfair_Display'] mt-10 bg-[#10B981] hover:bg-[#047857] text-white px-10 py-4 rounded-2xl text-xl font-semibold transition"
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

      {/* About Section */}
      <section className="bg-[#F8FAFC] py-20">
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
              alt="About Jagdamba Healthcare"
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
            <p className="font-['Playfair_Display'] text-lg font-semibold text-[#047857]">
              — About Us
            </p>

            <h2 className="font-['Playfair_Display'] mt-8 text-4xl md:text-5xl font-bold text-[#111827]">
              Who We Are
            </h2>

            <p className="font-['Playfair_Display'] mt-10 text-lg md:text-xl leading-relaxed text-[#4B5563] max-w-3xl">
              At Jagdamba Healthcare, we are committed to bridging the gap
              between trusted healthcare solutions and people’s everyday medical
              needs. Our mission is to enhance healthcare access through
              quality, care, reliability, and ethical service.
            </p>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about")}
              className="font-['Playfair_Display'] mt-10 px-10 py-3 border border-[#10B981] text-[#047857] rounded-xl text-lg font-semibold hover:bg-[#10B981] hover:text-white transition"
            >
              Read More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#111827] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="font-['Playfair_Display'] text-[#10B981] text-xl font-medium">
              — Core Values —
            </p>

            <h2 className="font-['Playfair_Display'] mt-6 text-3xl md:text-5xl font-bold text-white">
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
                text: "Ethical practices, quality, and care in everything we do.",
              },
              {
                img: "/values/innovation.jpg",
                title: "Trust & Reliability",
                text: "Building long-term trust through dependable healthcare service.",
              },
              {
                img: "/values/partnership.jpg",
                title: "Care & Collaboration",
                text: "Creating lasting value with patients, partners, and providers.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -14,
                  scale: 1.03,
                  boxShadow: "0px 25px 45px rgba(16,185,129,0.25)",
                }}
                className="bg-white rounded-3xl p-6 shadow-xl"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-72 object-cover rounded-2xl"
                />

                <h3 className="font-['Playfair_Display'] mt-6 text-2xl font-bold text-[#047857] text-center">
                  {card.title}
                </h3>

                <p className="font-['Playfair_Display'] mt-6 text-center text-[#4B5563] text-lg leading-relaxed">
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
              className="lg:col-span-1 bg-white rounded-[30px] p-12 shadow-md border border-[#E5E7EB]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <p className="font-['Playfair_Display'] text-[#047857] font-semibold mb-6">
                — Our Services
              </p>

              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827] leading-tight">
                Transforming Access to Quality Healthcare
              </h2>

              <p className=" font-['Playfair_Display'] mt-8 text-[#4B5563] text-lg leading-relaxed">
                Our services are designed to deliver trusted healthcare support
                with quality, care, and strong operational excellence.
              </p>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="font-['Playfair_Display'] mt-10 border border-[#10B981] text-[#047857] px-8 py-3 rounded-xl font-semibold hover:bg-[#10B981] hover:text-white transition"
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
                    title: "Quality Healthcare Support",
                    img: "/services/logistics.jpg",
                    text: "Reliable service focused on patient care and trusted delivery.",
                    bg: "bg-[#047857]",
                  },
                  {
                    title: "Access & Care",
                    img: "/services/access.jpg",
                    text: "Making healthcare more reachable, dependable, and people-focused.",
                    bg: "bg-[#047857]",
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
                  className="bg-[#111827] rounded-[30px] p-6 text-white shadow-xl max-w-2xl w-full"
                >
                  <h3 className="font-['Playfair_Display'] text-center text-xl font-semibold mb-8">
                    Growth & Healthcare Excellence
                  </h3>

                  <img
                    src="/services/market.jpg"
                    alt="Healthcare Excellence"
                    className="w-full h-72 object-cover rounded-3xl"
                  />

                  <p className="font-['Playfair_Display'] text-center mt-6 text-white/90">
                    Supporting better healthcare outcomes through trust,
                    quality, and continuous improvement.
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
