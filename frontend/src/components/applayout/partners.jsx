import { motion } from "framer-motion";
import abbott from "../../assets/partners/abbott.png";
import corcym from "../../assets/partners/CORCYM Logo.jpg";
import cordis from "../../assets/partners/Cordis .jpeg";
import maquet from "../../assets/partners/maquet.png";
import medtronic from "../../assets/partners/medtronic.png";
// import nipro from "../../assets/partners/nipro.png";
import peter from "../../assets/partners/peter surgical logo.png";
import lifesciences from "../../assets/partners/r.k lifesciences.jpeg";
import sorin from "../../assets/partners/sorin.jpeg";
import terumo from "../../assets/partners/terumo logo.jpeg";
import ttk from "../../assets/partners/ttk.png";

export default function PartnersSection() {
  const partners = [
    { name: "Abbott", logo: abbott },
    { name: "CORCYM", logo: corcym },

    { name: "TTK Healthcare", logo: ttk },
    // { name: "Nipro Medical", logo: nipro },
    { name: "Sorin Group Medical", logo: sorin },
    { name: "Maquet Getinge Group", logo: maquet },
    { name: "Medtronic", logo: medtronic },
    { name: "Cordis", logo: cordis },
    { name: "Terumo", logo: terumo },
    { name: "Peter Surgical", logo: peter },
    { name: "R.K Lifesciences", logo: lifesciences },
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
                className="group flex-shrink-0 w-48 md:w-60 h-36 md:h-40 bg-white border border-[#E5E7EB] rounded-2xl flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:border-[#10B981]/50 transition-all duration-300"
              >
                <div className="flex-1 flex items-center justify-center px-6 py-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full max-h-16 md:max-h-20 w-full object-contain"
                  />
                </div>

                <p className="py-2 border-t border-[#F1F5F9] text-xs md:text-sm text-[#6B7280] text-center font-medium tracking-wide group-hover:text-[#047857] transition-colors duration-300">
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
