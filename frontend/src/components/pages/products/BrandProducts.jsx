import { useRef } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import abbott from "../../../assets/partners/abbott.png";
import corcym from "../../../assets/partners/CORCYM Logo.jpg";
import cordis from "../../../assets/partners/Cordis .jpeg";
import maquet from "../../../assets/partners/maquet.png";
import medtronic from "../../../assets/partners/medtronic.png";
import nipro from "../../../assets/partners/nipro.png";
import peter from "../../../assets/partners/peter surgical logo.png";
import lifesciences from "../../../assets/partners/r.k lifesciences.jpeg";
import sorin from "../../../assets/partners/sorin.jpeg";
import terumo from "../../../assets/partners/terumo logo.jpeg";
import ttk from "../../../assets/partners/ttk.png";

// Brand name keyword -> logo. Brands without a match show their initials.
const brandLogos = [
  ["abbott", abbott],
  ["corcym", corcym],
  ["cordis", cordis],
  ["maquet", maquet],
  ["getinge", maquet],
  ["medtronic", medtronic],
  ["nipro", nipro],
  ["peter", peter],
  ["r.k", lifesciences],
  ["sorin", sorin],
  ["terumo", terumo],
  ["ttk", ttk],
];

const getBrandLogo = (brand) =>
  brandLogos.find(([key]) => brand.toLowerCase().includes(key))?.[1];

const getInitials = (brand) =>
  brand
    .replace(/[^A-Za-z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

export default function BrandProducts({ items }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sectionRef = useRef(null);

  const brands = [...new Set(items.map((item) => item.brand))];
  const hasBrandStep = brands.length > 1;

  const selectedBrand = brands.includes(searchParams.get("brand"))
    ? searchParams.get("brand")
    : null;

  const selectBrand = (brand) => {
    setSearchParams(brand ? { brand } : {});
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const showBrands = hasBrandStep && !selectedBrand;
  const visibleItems = selectedBrand
    ? items.filter((item) => item.brand === selectedBrand)
    : items;

  return (
    <section
      ref={sectionRef}
      className="scroll-mt-20 bg-[#F8FAFC] py-10 sm:py-12 md:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {showBrands ? (
          <>
            <div className="text-center">
              <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-[#111827]">
                Choose a Brand
              </h2>
              <p className="mt-2 text-sm md:text-base text-[#4B5563]">
                Select a brand to view its products
              </p>
            </div>

            <motion.div
              key="brands"
              className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {brands.map((brand) => {
                const logo = getBrandLogo(brand);
                const count = items.filter((i) => i.brand === brand).length;

                return (
                  <motion.button
                    key={brand}
                    type="button"
                    variants={fadeUp}
                    whileHover={{
                      y: -6,
                      boxShadow: "0px 18px 34px rgba(16,185,129,0.16)",
                    }}
                    onClick={() => selectBrand(brand)}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white text-left shadow-sm transition-colors hover:border-[#10B981]/60"
                  >
                    <div className="flex h-24 sm:h-32 items-center justify-center bg-white p-3 sm:p-5">
                      {logo ? (
                        <img
                          src={logo}
                          alt={brand}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#ECFDF5] font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-[#047857]">
                          {getInitials(brand)}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 items-center justify-between gap-2 border-t border-[#F1F5F9] px-3 py-3 sm:px-4">
                      <div className="min-w-0">
                        <h3 className="break-words text-sm sm:text-base font-semibold leading-snug text-[#111827]">
                          {brand}
                        </h3>
                        <p className="text-xs text-[#6B7280]">
                          {count} {count === 1 ? "Product" : "Products"}
                        </p>
                      </div>
                      <FaArrowRight
                        size={12}
                        className="flex-shrink-0 text-[#10B981] transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </>
        ) : (
          <>
            {hasBrandStep && (
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => selectBrand(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#047857] shadow-sm transition hover:border-[#10B981] hover:text-[#10B981]"
                >
                  <FaArrowLeft size={11} />
                  All Brands
                </button>

                <h2 className="font-['Playfair_Display'] text-xl md:text-3xl font-bold text-[#111827]">
                  {selectedBrand}{" "}
                  <span className="text-base md:text-lg font-medium text-[#6B7280]">
                    ({visibleItems.length})
                  </span>
                </h2>
              </div>
            )}

            <motion.div
              key={selectedBrand || "all"}
              className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {visibleItems.map((item, index) => (
                <motion.article
                  key={`${item.name}-${index}`}
                  variants={fadeUp}
                  whileHover={{
                    y: -7,
                    boxShadow: "0px 18px 34px rgba(16,185,129,0.16)",
                  }}
                  className="flex w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm"
                >
                  <div className="flex h-48 sm:h-52 items-center justify-center overflow-hidden bg-[#F9FAFB] p-4">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-contain"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5 text-center">
                    {item.brand && (
                      <div>
                        <span className="inline-flex max-w-full items-center justify-center rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#047857]">
                          {item.brand}
                        </span>
                      </div>
                    )}

                    <h3 className="font-['Playfair_Display'] mt-4 flex min-h-[56px] items-center justify-center break-words px-1 text-base sm:text-lg font-semibold leading-snug text-[#111827]">
                      {item.name}
                    </h3>

                    <a
                      href="tel:+917701905739"
                      aria-label={`Call to enquire about ${item.name}`}
                      className="mt-auto block pt-4"
                    >
                      <motion.span
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex w-full items-center justify-center rounded-full bg-[#10B981] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#047857]"
                      >
                        Enquire Now
                      </motion.span>
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
