import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../applayout/footer";
import BrandProducts from "./BrandProducts";

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
  {
    name: "Cardioplegia Delivery Set",
    brand: "Sorin",
    image: product4,
  },
  {
    name: "Cardioplegia Perfusion Adapters",
    brand: "Sorin",
    image: product5,
  },
  {
    name: "Cardioroot",
    brand: "Sorin",
    image: product6,
  },
  {
    name: "Complete Set of CVC Kit",
    brand: "Nipro",
    image: product7,
  },
  {
    name: "Coronary Shunts",
    brand: "Nipro",
    image: product8,
  },
  {
    name: "HLS Cannulae",
    brand: "Getinge",
    image: product9,
  },
  {
    name: "HLS Set Advanced",
    brand: "Getinge",
    image: product10,
  },
  {
    name: "INSPIRE 6F",
    brand: "Sorin",
    image: product11,
  },
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
  {
    name: "Intergard Silver",
    brand: "Getinge",
    image: product15,
  },
  {
    name: "Intergard Synergy",
    brand: "Getinge",
    image: product16,
  },
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
  {
    name: "Perfusion Tubing",
    brand: "Sorin",
    image: product19,
  },
  {
    name: "Rotaflow II System",
    brand: "Getinge",
    image: product20,
  },
  {
    name: "TTK Chitra Valve",
    brand: "TTK Healthcare",
    image: product21,
  },
  {
    name: "TTK Chitra Mitral Valve",
    brand: "TTK Healthcare",
    image: product22,
  },
  {
    name: "Venous Cannula",
    brand: "MAQUET",
    image: product23,
  },
  {
    name: "Vessel Loops",
    brand: "Peter Surgical",
    image: product24,
  },
  {
    name: "Sorin Product",
    brand: "Sorin",
    image: product25,
  },
];

export default function CardiacSurgery() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      {/* Hero */}
      <section
        className="relative min-h-[420px] h-[50vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/websitebg.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#111827]/65" />

        <motion.div
          className="relative z-10 w-full max-w-5xl px-5 sm:px-6 text-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm sm:text-base md:text-lg font-semibold tracking-wide text-[#10B981]"
          >
            — Cardiac Surgery —
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white"
          >
            Cardiac Surgery Products
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-3xl text-base sm:text-lg md:text-2xl leading-relaxed text-white/90"
          >
            Advanced cardiac surgery solutions and reliable surgical support
            systems for modern healthcare institutions.
          </motion.p>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <section className="border-b border-[#E5E7EB] bg-[#F8FAFC] py-4">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center text-sm sm:text-base text-[#4B5563]">
            <Link
              to="/products"
              className="font-semibold text-[#047857] transition hover:text-[#10B981]"
            >
              Products
            </Link>

            <span className="mx-2 text-[#9CA3AF]">/</span>

            <span className="font-medium text-[#111827]">Cardiac Surgery</span>
          </div>
        </div>
      </section>


      <BrandProducts items={cardiacSurgeryItems} />

      <Footer />
    </div>
  );
}
