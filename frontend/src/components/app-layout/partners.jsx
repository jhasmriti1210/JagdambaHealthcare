import { motion } from "framer-motion";
import ttk from "../../assets/partners/ttk.png";
import nipro from "../../assets/partners/nipro.png";
import sorin from "../../assets/partners/sorin.png";
import maquet from "../../assets/partners/maquet.png";
import medtronic from "../../assets/partners/medtronic.png";
import abbott from "../../assets/partners/abbott.png";
import asahi from "../../assets/partners/asa.png";
import cordis from "../../assets/partners/cordis.png";
import terumo from "../../assets/partners/terumo.png";
import peter from "../../assets/partners/peters.png";
import rk from "../../assets/partners/rk.png";

export default function PartnersSection() {
  const partners = [
    { name: "TTK Healthcare", logo: ttk },
    { name: "Nipro Medical", logo: nipro },
    { name: "Sorin Group Medical", logo: sorin },
    { name: "Maquet Getinge Group", logo: maquet },
    { name: "Medtronic", logo: medtronic },
    { name: "Abbott", logo: abbott },
    { name: "Asahi", logo: asahi },
    { name: "Cordis", logo: cordis },
    { name: "Terumo", logo: terumo },
    { name: "Peter Surgical", logo: peter },
    { name: "R.K Lifesciences", logo: rk },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative bg-[#F8FAFC] py-16 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-['Playfair_Display'] text-lg md:text-xl font-medium text-[#047857]">
            — Trusted Brands —
          </p>

          <h2 className="font-['Playfair_Display'] mt-4 text-4xl md:text-6xl font-bold text-[#111827] leading-tight">
            Partnering with Global Healthcare Leaders
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-[#4B5563] text-base md:text-lg leading-relaxed">
            We collaborate with internationally recognized healthcare and
            medical technology brands to deliver reliable, high-quality
            solutions to healthcare institutions across India.
          </p>
        </motion.div>

        <div className="relative mt-14 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10"></div>

          <motion.div
            className="flex gap-6 md:gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 32,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ duration: 0.25 }}
                className="group flex-shrink-0 w-44 md:w-52 h-28 bg-white border border-[#E5E7EB] rounded-2xl flex flex-col items-center justify-center px-5 shadow-sm hover:shadow-xl hover:border-[#10B981]/50 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-14 md:max-h-16 max-w-[150px] object-contain opacity-100"
                />

                <p className="mt-3 text-xs text-[#6B7280] text-center font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
