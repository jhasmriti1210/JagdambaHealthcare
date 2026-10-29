import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../applayout/footer";
import BrandProducts from "./BrandProducts";
import headerBg from "../../../assets/products/surgicaldisposable/bg.png";

const images = import.meta.glob(
  "../../../assets/products/surgicaldisposable/**/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);

const surgicalDisposablesItems = [
  ["Composite Mesh", "Composite mesh.jpeg"],
  ["ENDOPATH Trocar", "ENDOPATH TROCAR.jpeg"],
  ["Harmonic", "HARMONIC.jpeg"],
  ["Ligating Clip LT 100", "Ligating clip (LT 100).jpeg"],
  ["Ligating Clip LT 200", "Ligating clip (LT 200).jpeg"],
  ["Ligating Clip LT 300", "Ligating clip ( LT 300).jpeg"],
  ["Ligating Clip LT 400", "Ligating clip (LT 400).jpeg"],
  ["Prolene Mesh", "prolene mesh.jpeg"],
  ["Prolene Suture", "suture.jpeg"],
  ["ENDO GIA", "ENDO GIA .jpeg"],
  ["GIA Reload", "GIA RELOAD.jpeg"],
  [
    "Fenestrated Tracheostomy Tube with Inner Cannula",
    "Fenestarted Tracheostomy Tube With INNER Cannula (Covidien).webp",
  ],
  ["Hem-o-lok Clip Applicator", "Applicator .jpeg"],
  ["Hem-o-lok Clips", "hemo lock clips .jpeg"],
  ["Visistat Skin Stapler", "skin stapler.jpeg"],
  [
    "Epidural Mini Pack System 1 with Clamp 18G",
    "EPIDURAL MINI PACK SYSTEM 1 WITH CLAMP 18G.webp",
  ],
  [
    "Portex Epidural Minipack System 1",
    "Portex Eqidural Minipack System 1.webp",
  ],
  ["Portex ET Tube", "ET Tube.webp"],
  ["Jelco IV Cannula 20G 45mm", "Jelco IV CANNULA 20G 45MM.webp"],
  ["Arterial Cannula 20G", "ARTERIAL CANNULA BD 20G.webp"],
  ["BD Pen Needles", "BD Pen Needles.webp"],
  ["Radifocus Guide Wire", "Radifocus Guide Wire Terumo.webp"],
  ["LeaderFlex", "LeaderFlex (Vygon).webp"],
  [
    "Pressure Monitoring Kit",
    "Pressure Monitoring Kit (B.L Lifesciences).webp",
  ],
  ["Double Pigtail Ureteral Stent", "Double pigtal stent.webp"],
  ["SH024", "SH024 Surgiwear.webp"],
  ["Anesthetic Face Mask", "Anesthetic Face mask.webp"],
  ["Disposable Surgical Gowns", "Disposable Surgical Gowns.png"],
  [
    "Endotracheal Tube North Nasal Cuffed",
    "Endotracheal Tube North Nasal Cuffed.webp",
  ],
  [
    "Endotracheal Tube South Oral Cuffed",
    "Endotracheal Tube South oral cuffed.webp",
  ],
  ["Nitrile Examination Gloves", "gloves.jpeg"],
  ["Face Mask", "mask.jpeg"],
  ["SLS Clip", "SLS Clip.webp"],
  ["Surgical Gloves", "Surgical gloves .png"],
  ["Surgical Mask", "Surgical Mask.png"],
].map(([name, file]) => ({
  name,
  image:
    images[
      `../../../assets/products/surgicaldisposable/all surgical disposables/${file}`
    ],
}));

export default function SurgicalDisposables() {
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
      <section
        className="relative h-[50vh] md:h-[55vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${headerBg})`,
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
            Surgical Disposables
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-white/90 text-lg md:text-2xl"
          >
            Quality disposable products and surgical essentials for safe
            healthcare procedures.
          </motion.p>
        </motion.div>
      </section>

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
            <span className="text-[#111827] font-medium">
              Surgical Disposables
            </span>
          </div>
        </div>
      </section>

      <BrandProducts items={surgicalDisposablesItems} />

      <Footer />
    </div>
  );
}
