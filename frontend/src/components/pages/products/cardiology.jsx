import { motion } from "framer-motion";
import Footer from "../../app-layout/footer";
import { Link } from "react-router-dom";

const cardiologyItems = [
  { name: "ECG Machine", image: "/cardiology/ecg.jpg" },
  { name: "Cardiac Monitor", image: "/cardiology/monitor.jpg" },
  { name: "Defibrillator", image: "/cardiology/defibrillator.jpg" },
  { name: "Stethoscope", image: "/cardiology/stethoscope.jpg" },
  { name: "Holter Monitor", image: "/cardiology/holter.jpg" },
  { name: "Pacemaker", image: "/cardiology/pacemaker.jpg" },
];

export default function Cardiology() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-[55vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/websitebg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#111827]/65"></div>

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
            Cardiology Products
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-white/90 text-lg md:text-2xl"
          >
            Advanced instruments and solutions for cardiac care.
          </motion.p>
        </motion.div>
      </section>

      {/* Breadcrumb */}

      <section className="bg-[#F8FAFC] py-5 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm md:text-base text-[#4B5563]">
            <Link
              to="/products"
              className="text-[#047857] font-semibold hover:text-[#10B981] transition"
            >
              Products
            </Link>

            <span className="mx-2 text-[#9CA3AF]">/</span>

            <span className="text-[#111827] font-medium">Cardiology</span>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {cardiologyItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0px 20px 35px rgba(16,185,129,0.22)",
                }}
                className="bg-white rounded-[26px] overflow-hidden shadow-lg border border-[#E5E7EB]"
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.35 }}
                />

                <div className="p-6 text-center">
                  <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#111827]">
                    {item.name}
                  </h3>

                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-5 bg-[#10B981] hover:bg-[#047857] text-white px-6 py-3 rounded-full font-semibold transition"
                  >
                    Enquire Now
                  </motion.button>
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
