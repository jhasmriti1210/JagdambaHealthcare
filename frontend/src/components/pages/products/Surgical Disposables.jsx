import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../applayout/footer";

import applicator from "../../../assets/products/surgicaldisposables/Applicator .jpeg";
import compositeMesh from "../../../assets/products/surgicaldisposables/Composite mesh.jpeg";
import endoGia from "../../../assets/products/surgicaldisposables/ENDO GIA .jpeg";
import endopathTrocar from "../../../assets/products/surgicaldisposables/ENDOPATH TROCAR.jpeg";
import giaReload from "../../../assets/products/surgicaldisposables/GIA RELOAD.jpeg";
import gloves from "../../../assets/products/surgicaldisposables/gloves.jpeg";
import harmonic from "../../../assets/products/surgicaldisposables/HARMONIC.jpeg";
import hemoLockClips from "../../../assets/products/surgicaldisposables/hemo lock clips .jpeg";
import ligatingClip300 from "../../../assets/products/surgicaldisposables/Ligating clip ( LT 300).jpeg";
import ligatingClip100 from "../../../assets/products/surgicaldisposables/Ligating clip (LT 100).jpeg";
import ligatingClip200 from "../../../assets/products/surgicaldisposables/Ligating clip (LT 200).jpeg";
import ligatingClip400 from "../../../assets/products/surgicaldisposables/Ligating clip (LT 400).jpeg";
import mask from "../../../assets/products/surgicaldisposables/mask.jpeg";
import proleneMesh from "../../../assets/products/surgicaldisposables/prolene mesh.jpeg";
import skinStapler from "../../../assets/products/surgicaldisposables/skin stapler.jpeg";
import suture from "../../../assets/products/surgicaldisposables/suture.jpeg";

const surgicalDisposablesItems = [
  { name: "Applicator", brand: "Surgical Disposable", image: applicator },
  { name: "Composite Mesh", brand: "Surgical Mesh", image: compositeMesh },
  { name: "ENDO GIA", brand: "Surgical Stapling", image: endoGia },
  {
    name: "ENDOPATH Trocar",
    brand: "Endoscopic Access",
    image: endopathTrocar,
  },
  { name: "GIA Reload", brand: "Surgical Stapling", image: giaReload },
  { name: "Gloves", brand: "Disposable Care", image: gloves },
  { name: "Harmonic", brand: "Surgical Instrument", image: harmonic },
  { name: "Hemo Lock Clips", brand: "Surgical Clips", image: hemoLockClips },
  {
    name: "Ligating Clip LT 300",
    brand: "Surgical Clips",
    image: ligatingClip300,
  },
  {
    name: "Ligating Clip LT 100",
    brand: "Surgical Clips",
    image: ligatingClip100,
  },
  {
    name: "Ligating Clip LT 200",
    brand: "Surgical Clips",
    image: ligatingClip200,
  },
  {
    name: "Ligating Clip LT 400",
    brand: "Surgical Clips",
    image: ligatingClip400,
  },
  { name: "Mask", brand: "Disposable Care", image: mask },
  { name: "Prolene Mesh", brand: "Surgical Mesh", image: proleneMesh },
  { name: "Skin Stapler", brand: "Surgical Stapling", image: skinStapler },
  { name: "Suture", brand: "Surgical Suture", image: suture },
];

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

      <section className="bg-[#F8FAFC] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {surgicalDisposablesItems.map((item, index) => (
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
