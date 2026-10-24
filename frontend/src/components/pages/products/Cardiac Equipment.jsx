import { motion } from "framer-motion";
import Footer from "../../applayout/footer";
import BrandProducts from "./BrandProducts";
import { Link } from "react-router-dom";

const urologyItems = [
  {
    name: "Ureteroscope",
    image: "/urology/ureteroscope.jpg",
  },
  {
    name: "Cystoscope",
    image: "/urology/cystoscope.jpg",
  },
  {
    name: "Stone Retrieval Basket",
    image: "/urology/basket.jpg",
  },
  {
    name: "Lithotripsy System",
    image: "/urology/lithotripsy.jpg",
  },
  {
    name: "Guidewire",
    image: "/urology/guidewire.jpg",
  },
  {
    name: "Urological Catheter",
    image: "/urology/catheter.jpg",
  },
];

export default function Urology() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
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
            Urology Products
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-white/90 text-lg md:text-2xl"
          >
            Innovative solutions designed for advanced urological diagnosis,
            treatment, and patient care.
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

            <span className="text-[#111827] font-medium">Urology</span>
          </div>
        </div>
      </section>


      <BrandProducts items={urologyItems} />

      <Footer />
    </div>
  );
}
