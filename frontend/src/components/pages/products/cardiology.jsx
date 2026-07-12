import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../applayout/footer";

import acrobatStabilizer from "../../../assets/products/cardiology/acrobat -i stabilizer (GETTINGE MAQUET).jpg";
import acrobatVacuum from "../../../assets/products/cardiology/acrobat suv vacuum stabilizer (GETTINGE MAQUET).jpg";
import acrobatPositioner from "../../../assets/products/cardiology/Acrobat-i Positioner (GETTINGE MAQUET).jpg";

import heartLungPack from "../../../assets/products/cardiology/HEART LUNG PACK (Prymax Healthcare).jpeg";
import inflation from "../../../assets/products/cardiology/INFLATION (Prymax Healthcare).jpeg";
import linearIab from "../../../assets/products/cardiology/Linear 7.5 Fr. IAB Catheter (GETTINGE MAQUET).jpg";
import megaIab from "../../../assets/products/cardiology/Mega 7.5 Fr. & 8 Fr. IABP Catheters (GETTINGE MAQUET).jpg";
import plsKit from "../../../assets/products/cardiology/Pls kit (GETTINGE MAQUET).jpg";
import sensation7 from "../../../assets/products/cardiology/Sensation 7 Fr. IAB Catheter (GETTINGE MAQUET).jpg";
import sensationPlus from "../../../assets/products/cardiology/Sensation Plus 7.5 Fr. & 8 Fr. IAB Catheters (GETTINGE MAQUET).jpg";
import standardPmKit from "../../../assets/products/cardiology/STANDARD PM KIT ((Prymax Healthcare).jpeg";

const cardiologyItems = [
  {
    name: "Acrobat-i Stabilizer",
    brand: "GETTINGE MAQUET",
    image: acrobatStabilizer,
  },
  {
    name: "Acrobat SUV Vacuum Stabilizer",
    brand: "GETTINGE MAQUET",
    image: acrobatVacuum,
  },
  {
    name: "Acrobat-i Positioner",
    brand: "GETTINGE MAQUET",
    image: acrobatPositioner,
  },

  {
    name: "Heart Lung Pack",
    brand: "Prymax Healthcare",
    image: heartLungPack,
  },
  {
    name: "Inflation Device",
    brand: "Prymax Healthcare",
    image: inflation,
  },
  {
    name: "Linear 7.5 Fr. IAB Catheter",
    brand: "GETTINGE MAQUET",
    image: linearIab,
  },
  {
    name: "Mega 7.5 Fr. & 8 Fr. IABP Catheters",
    brand: "GETTINGE MAQUET",
    image: megaIab,
  },
  {
    name: "PLS Kit",
    brand: "GETTINGE MAQUET",
    image: plsKit,
  },
  {
    name: "Sensation 7 Fr. IAB Catheter",
    brand: "GETTINGE MAQUET",
    image: sensation7,
  },
  {
    name: "Sensation Plus 7.5 Fr. & 8 Fr. IAB Catheters",
    brand: "GETTINGE MAQUET",
    image: sensationPlus,
  },
  {
    name: "Standard PM Kit",
    brand: "Prymax Healthcare",
    image: standardPmKit,
  },
];

export default function Cardiology() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.06 },
    },
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero */}
      <section
        className="relative h-[50vh] md:h-[55vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/websitebg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#111827]/65"></div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
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
            Advanced products and support solutions for cardiac care.
          </motion.p>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-[#F8FAFC] py-4 border-b border-[#E5E7EB]">
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
      <section className="bg-[#F8FAFC] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {cardiologyItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0px 18px 32px rgba(16,185,129,0.18)",
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#E5E7EB]"
              >
                <div className="bg-[#F9FAFB] h-48 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-3"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.35 }}
                  />
                </div>

                <div className="p-4 text-center">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#ECFDF5] text-[#047857] mb-3">
                    {item.brand}
                  </span>

                  <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#111827] min-h-[56px] flex items-center justify-center leading-snug">
                    {item.name}
                  </h3>

                  <a href="tel:+91 7701905739">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 bg-[#10B981] hover:bg-[#047857] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition"
                    >
                      Enquire Now
                    </motion.button>
                  </a>
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
