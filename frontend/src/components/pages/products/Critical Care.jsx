import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../applayout/footer";
import BrandProducts from "./BrandProducts";

const images = import.meta.glob(
  "../../../assets/products/criticalcare/**/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);

const criticalCareItems = [
  ["Ligaclip 200", "ALL CRITICAL CARE/LIGACLIP 200.webp"],
  ["Ligaclip 300", "ALL CRITICAL CARE/LIGACLIP 300.webp"],
  ["Ligaclip 400", "ALL CRITICAL CARE/LIGACLIP 400.jpg"],
  ["Ligaclip LT 100", "ALL CRITICAL CARE/LT 100.webp"],
  ["Hem-o-lok Clip 544230", "ALL CRITICAL CARE/HEMOLOCK 544230.webp"],
  ["Hem-o-lok Clip 544240", "ALL CRITICAL CARE/HEMOLOCK 544240.webp"],
  ["Hem-o-lok Clip 544250", "ALL CRITICAL CARE/WeckHemoLok544250.webp"],
  ["Horizon Clip 001204", "ALL CRITICAL CARE/HORIZON CLIP 001204.webp"],
  ["Horizon Clip 001205", "ALL CRITICAL CARE/HORIZON CLIP 001205....webp"],
  ["Horizon Clip 00204", "ALL CRITICAL CARE/HORIZON CLIP 00204.webp"],
  ["Horizon Ligating Clip", "ALL CRITICAL CARE/HORIZON LIGATING CLIP.webp"],
  ["Appose ULC Skin Stapler", "ALL CRITICAL CARE/SKIN STAPLER.webp"],
  ["Epidural Minipack", "ALL CRITICAL CARE/EPIDURAL MINIPACK.webp"],
].map(([name, file]) => ({
  name,
  image: images[`../../../assets/products/criticalcare/${file}`],
}));

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
          backgroundImage: "url('/bg2.jpg')",
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

      <BrandProducts items={criticalCareItems} />

      <Footer />
    </div>
  );
}
