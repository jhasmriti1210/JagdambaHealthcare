import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Link } from "react-router-dom";

import Partners from "../app-layout/partners";
import PartnerAndContact from "../app-layout/partnerandcontact";
import Footer from "../app-layout/footer";

import cardiologyImg from "../../assets/products/cardiology/bg.jpg";
import cardiacSurgeryImg from "../../assets/products/cardiacsurgery/bg.jpg";
import criticalCareImg from "../../assets/products/criticalcare/bg.jpg";
import cardiacEquipmentImg from "../../assets/products/cardiacequipment/bg.jpg";
import surgicalDisposablesImg from "../../assets/products/surgicaldisposables/bg.png";

function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const products = [
  {
    id: 1,
    name: "Cardiology",
    description: "Cardiology products and cardiovascular care solutions.",
    logo: cardiologyImg,
    path: "/products/cardiology",
  },
  {
    id: 2,
    name: "Cardiac Surgery",
    description: "Reliable solutions for advanced cardiac surgical care.",
    logo: cardiacSurgeryImg,
    path: "/products/cardiac-surgery",
    featured: true,
  },
  {
    id: 3,
    name: "Critical Care",
    description: "Essential consumables and products for critical care units.",
    logo: criticalCareImg,
    path: "/products/critical-care",
  },
  {
    id: 4,
    name: "Surgical Disposables",
    description: "Quality surgical disposable products for safe procedures.",
    logo: surgicalDisposablesImg,
    path: "/products/surgical-disposables",
  },
  {
    id: 5,
    name: "Cardiac Equipment",
    description: "Equipment support for hospitals and cardiac departments.",
    logo: cardiacEquipmentImg,
    path: "",
  },
];

const introStats = [
  { number: 9, suffix: "+", label: "Years Experience" },
  { number: 5, suffix: "", label: "Product Divisions" },
  { number: 11, suffix: "+", label: "Trusted Brands" },
  { number: 10, suffix: "+", label: "Major Clients" },
];

const introContent = {
  label: "— Healthcare Product Solutions",
  title:
    "Trusted Medical Products for Hospitals, Clinics & Healthcare Institutions",
  description:
    "We supply high-quality medical devices, cardiology products, critical care consumables, cardiac equipment, surgical disposables, and hospital solutions backed by 9+ years of industry experience.",
};

export default function Products() {
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
      transition: { staggerChildren: 0.14 },
    },
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero */}
      <section
        className="relative h-[55vh] md:h-[65vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/productsbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#111827]/45"></div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="text-[#10B981] text-lg font-semibold tracking-wide"
          >
            — Product Divisions —
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-['Playfair_Display'] mt-4 text-white text-5xl md:text-7xl font-bold"
          >
            Our Products
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-white/90 text-lg md:text-2xl font-medium max-w-4xl mx-auto"
          >
            Explore our Product Divisions in Cardiology and Cardiovascular
            Products.
          </motion.p>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="bg-[#e9ebf0] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-[#10B981] text-lg font-medium">— Products —</p>

            <h2 className="font-['Playfair_Display'] mt-3 text-4xl md:text-6xl font-bold text-black">
              Explore Our Product Categories
            </h2>

            <p className="mt-4 text-[#4B5563] max-w-3xl mx-auto text-base md:text-lg">
              Select a division to view related products, equipment, and
              healthcare solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0px 20px 35px rgba(16,185,129,0.25)",
                }}
                className={`rounded-[26px] p-6 text-center border shadow-lg ${
                  product.featured
                    ? "bg-[#ECFDF5] border-[#10B981]"
                    : "bg-white border-[#E5E7EB]"
                }`}
              >
                <div className="bg-[#F8FAFC] rounded-2xl p-5 h-44 flex items-center justify-center">
                  <img
                    src={product.logo}
                    alt={product.name}
                    className="h-32 mx-auto object-contain"
                  />
                </div>

                <h3 className="font-['Playfair_Display'] mt-6 text-2xl font-bold text-[#111827]">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm text-[#4B5563] leading-relaxed min-h-[44px]">
                  {product.description}
                </p>

                {product.path ? (
                  <Link to={product.path}>
                    <motion.button
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 bg-[#10B981] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#047857] transition"
                    >
                      View Products →
                    </motion.button>
                  </Link>
                ) : (
                  <motion.button
                    disabled
                    className="mt-6 bg-gray-300 text-gray-600 px-7 py-3 rounded-full font-semibold cursor-not-allowed"
                  >
                    Coming Soon
                  </motion.button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Partners />

      {/* Intro Section */}
      <section className="bg-[#F8FAFC] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <p className="text-[#047857] text-lg font-medium">
                {introContent.label}
              </p>

              <h2 className="font-['Playfair_Display'] mt-3 text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
                {introContent.title}
              </h2>

              <p className="mt-5 text-[#4B5563] text-base md:text-lg leading-relaxed">
                {introContent.description}
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {introStats.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition"
                >
                  <h3 className="text-3xl font-bold text-[#10B981]">
                    <AnimatedCounter value={item.number} suffix={item.suffix} />
                  </h3>

                  <p className="mt-1 text-sm text-[#4B5563]">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <PartnerAndContact />
      <Footer />
    </div>
  );
}
