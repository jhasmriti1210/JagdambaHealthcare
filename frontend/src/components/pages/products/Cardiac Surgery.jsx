import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../app-layout/footer";

import product1 from "../../../assets/products/cardiacsurgery/arterialcannula.jpeg";
import product2 from "../../../assets/products/cardiacsurgery/arterialfilter.jpeg";
import product3 from "../../../assets/products/cardiacsurgery/CarbomedicsoptiformheartvalveCorcymmedical.jpeg";
import product4 from "../../../assets/products/cardiacsurgery/CARDIOPLEGIADELIVERYSET.jpeg";
import product5 from "../../../assets/products/cardiacsurgery/CardioplegiaPerfusionAdapters.jpeg";
import product6 from "../../../assets/products/cardiacsurgery/Cardioroot.jpg";
import product7 from "../../../assets/products/cardiacsurgery/CompletesetofCVCkit.jpeg";
import product8 from "../../../assets/products/cardiacsurgery/Coronaryshunts.jpeg";
import product9 from "../../../assets/products/cardiacsurgery/Hlscannulae.jpg";
import product10 from "../../../assets/products/cardiacsurgery/HLSSetadvanced.jpg";
import product11 from "../../../assets/products/cardiacsurgery/INSPIRE6Fsorin.jpeg";
import product12 from "../../../assets/products/cardiacsurgery/intergardknittedtrifurcatedandquadrifurcated.jpg";
import product13 from "../../../assets/products/cardiacsurgery/IntergardKnittedUltrathin.jpg";
import product14 from "../../../assets/products/cardiacsurgery/intergardknittedvasculargraft.jpg";
import product15 from "../../../assets/products/cardiacsurgery/intergardsilver.jpg";
import product16 from "../../../assets/products/cardiacsurgery/intergardsynergy.jpg";
import product17 from "../../../assets/products/cardiacsurgery/IntergardWovenAorticArchandHemabridge.jpg";
import product18 from "../../../assets/products/cardiacsurgery/IntergardWovenThoracicAorticGraft.jpg";
import product19 from "../../../assets/products/cardiacsurgery/PerfusionTubing.jpeg";
import product20 from "../../../assets/products/cardiacsurgery/rotaflowIIsystem.jpg";
import product21 from "../../../assets/products/cardiacsurgery/TTKChitra.jpeg";
import product22 from "../../../assets/products/cardiacsurgery/TTKChitraMITRAL.jpeg";
import product23 from "../../../assets/products/cardiacsurgery/venouscannulaMAQUET.jpeg";
import product24 from "../../../assets/products/cardiacsurgery/VesselLoops.jpeg";
import product25 from "../../../assets/products/cardiacsurgery/sorin.jpeg";

const cardiacSurgeryItems = [
  { name: "Arterial Cannula", brand: "MAQUET", image: product1 },
  { name: "Arterial Filter", brand: "MAQUET", image: product2 },
  {
    name: "Carbomedics Optiform Heart Valve",
    brand: "Corcym Medical",
    image: product3,
  },
  { name: "Cardioplegia Delivery Set", brand: "Sorin", image: product4 },
  {
    name: "Cardioplegia Perfusion Adapters",
    brand: "Sorin",
    image: product5,
  },
  { name: "Cardioroot", brand: "Sorin", image: product6 },
  { name: "Complete Set of CVC Kit", brand: "Nipro", image: product7 },
  { name: "Coronary Shunts", brand: "Nipro", image: product8 },
  { name: "HLS Cannulae", brand: "Getinge", image: product9 },
  { name: "HLS Set Advanced", brand: "Getinge", image: product10 },
  { name: "INSPIRE 6F", brand: "Sorin", image: product11 },
  {
    name: "Intergard Knitted Trifurcated",
    brand: "Getinge",
    image: product12,
  },
  {
    name: "Intergard Knitted Ultrathin",
    brand: "Getinge",
    image: product13,
  },
  {
    name: "Intergard Knitted Vascular Graft",
    brand: "Getinge",
    image: product14,
  },
  { name: "Intergard Silver", brand: "Getinge", image: product15 },
  { name: "Intergard Synergy", brand: "Getinge", image: product16 },
  {
    name: "Intergard Woven Aortic Arch",
    brand: "Getinge",
    image: product17,
  },
  {
    name: "Intergard Woven Thoracic Aortic Graft",
    brand: "Getinge",
    image: product18,
  },
  { name: "Perfusion Tubing", brand: "Sorin", image: product19 },
  { name: "Rotaflow II System", brand: "Getinge", image: product20 },
  { name: "TTK Chitra Valve", brand: "TTK Healthcare", image: product21 },
  {
    name: "TTK Chitra Mitral Valve",
    brand: "TTK Healthcare",
    image: product22,
  },
  { name: "Venous Cannula", brand: "MAQUET", image: product23 },
  { name: "Vessel Loops", brand: "Peter Surgical", image: product24 },
  { name: "Sorin Product", brand: "Sorin", image: product25 },
];

export default function CardiacSurgery() {
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
            Cardiac Surgery Products
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-white/90 text-lg md:text-2xl"
          >
            Advanced cardiac surgery solutions and surgical support systems.
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

            <span className="text-[#111827] font-medium">Cardiac Surgery</span>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#F8FAFC] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {cardiacSurgeryItems.map((item, index) => (
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
