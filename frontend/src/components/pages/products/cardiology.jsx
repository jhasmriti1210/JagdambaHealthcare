import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../applayout/footer";
import { FaExternalLinkAlt } from "react-icons/fa";

import abbottLogo from "../../../assets/partners/abbott.png";
import cordisLogo from "../../../assets/partners/Cordis .jpeg";
import medtronicLogo from "../../../assets/partners/medtronic.png";
import peterLogo from "../../../assets/partners/peter surgical logo.png";
import terumoLogo from "../../../assets/partners/terumo logo.jpeg";
import asahiLogo from "../../../assets/partners/asahi.jpeg";
import bostonscientificLogo from "../../../assets/partners/bostonscientific.png";
import cookmedicalLogo from "../../../assets/partners/cookmedical.jpeg";

const cardiologyBrands = [
  {
    name: "Abbott",
    logo: abbottLogo,
    url: "https://www.cardiovascular.abbott/int/en/hcp/products.html",
  },
  {
    name: "Asahi",
    logo: asahiLogo,
    url: "https://asahi-inteccusa-medical.com/full-product-listing/",
  },
  {
    name: "Boston Scientific",
    logo: bostonscientificLogo,
    url: "https://www.bostonscientific.com/content/dam/bostonscientific/Interventional%20Cardiology/product/ic-product-catalog.pdf",
  },
  {
    name: "Medtronic",
    logo: medtronicLogo,
    url: "https://www.medtronic.com/en-us/healthcare-professionals/products/cardiovascular.html",
  },
  {
    name: "Cook Medical",
    logo: cookmedicalLogo,
    url: "https://www.cookmedical.com/products/",
  },
  { name: "Cordis", logo: cordisLogo, url: "https://cordis.com/na/products" },
  {
    name: "Peter Surgical",
    logo: peterLogo,
    url: "https://peters-surgical.in/our-products/",
  },
  { name: "Terumo", logo: terumoLogo, url: "https://terumocv.com/products/" },
];

const getInitials = (name) =>
  name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

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

      <section className="bg-[#F8FAFC] py-10 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-[#111827]">
              Our Cardiology Brands
            </h2>
            <p className="mt-2 text-sm md:text-base text-[#4B5563]">
              Click a brand to visit its official website
            </p>
          </div>

          <motion.div
            className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {cardiologyBrands.map((brand) => (
              <motion.a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${brand.name} website`}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  boxShadow: "0px 18px 34px rgba(16,185,129,0.16)",
                }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-colors hover:border-[#10B981]/60"
              >
                <div className="flex h-24 sm:h-32 items-center justify-center bg-white p-3 sm:p-5">
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#ECFDF5] font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-[#047857]">
                      {getInitials(brand.name)}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 items-center justify-between gap-2 border-t border-[#F1F5F9] px-3 py-3 sm:px-4">
                  <h3 className="break-words text-sm sm:text-base font-semibold leading-snug text-[#111827]">
                    {brand.name}
                  </h3>
                  <FaExternalLinkAlt
                    size={12}
                    className="flex-shrink-0 text-[#10B981] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
