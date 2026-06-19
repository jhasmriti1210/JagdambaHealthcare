import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../app-layout/footer";

import endotrachealTube from "../../../assets/products/criticalcare/Endotrachealtube.jpeg";
import ivCannula from "../../../assets/products/criticalcare/ivcannula.jpeg";
import ivSet from "../../../assets/products/criticalcare/ivset.jpeg";
import oxygenMask from "../../../assets/products/criticalcare/oxygenmask.jpeg";
import tracheostomyTube from "../../../assets/products/criticalcare/tracheostomytube.jpeg";

const criticalCareItems = [
  {
    name: "Endotracheal Tube",
    brand: "Critical Care",
    image: endotrachealTube,
  },
  {
    name: "IV Cannula",
    brand: "Critical Care",
    image: ivCannula,
  },
  {
    name: "IV Set",
    brand: "Critical Care",
    image: ivSet,
  },
  {
    name: "Oxygen Mask",
    brand: "Critical Care",
    image: oxygenMask,
  },
  {
    name: "Tracheostomy Tube",
    brand: "Critical Care",
    image: tracheostomyTube,
  },
];

export default function CriticalCare() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
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
            Critical Care Products
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-white/90 text-lg md:text-2xl"
          >
            Essential critical care consumables and hospital support products.
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

            <span className="text-[#111827] font-medium">Critical Care</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-[#F8FAFC] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {criticalCareItems.map((item, index) => (
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
                    className="w-full h-full object-cover"
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

                  <a href="tel:+917701905739">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 bg-[#10B981] hover:bg-[#047857] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition"
                    >
                      Call for Enquiry
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
