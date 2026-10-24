import { motion } from "framer-motion";
import aiims from "../../assets/clients/aiims.jpeg";
import medanta from "../../assets/clients/medanta.avif";
import igims from "../../assets/clients/igims.jpeg";
import heart from "../../assets/clients/heart.jpeg";
import fourA from "../../assets/clients/4a-heart.jpeg";
import paras from "../../assets/clients/paras-hmri.jpeg";
import ruban from "../../assets/clients/ruban.webp";
import ford from "../../assets/clients/ford.png";
import mediversal from "../../assets/clients/mediversal.png";
import igic from "../../assets/clients/igic.jpeg";

export default function Clients() {
  const clients = [
    { name: "AIIMS", logo: aiims },
    { name: "Medanta", logo: medanta },
    { name: "IGIMS", logo: igims },
    { name: "Heart Hospital", logo: heart },
    { name: "4A Heart Hospital", logo: fourA },
    { name: "Paras HMRI", logo: paras },
    { name: "Ruban Memorial Hospital", logo: ruban },
    { name: "Ford Hospital", logo: ford },
    { name: "Mediversal Hospital", logo: mediversal },
    { name: "IGIC", logo: igic },
  ];

  // Split into two rows that scroll in opposite directions
  const half = Math.ceil(clients.length / 2);
  const rows = [
    { items: clients.slice(0, half), from: "0%", to: "-50%" },
    { items: clients.slice(half), from: "-50%", to: "0%" },
  ];

  return (
    <section className="relative bg-[#F8FAFC] py-12 md:py-14 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-['Playfair_Display'] text-base md:text-lg font-medium text-[#047857]">
            — Our Partners —
          </p>

          <h2 className="font-['Playfair_Display'] mt-2 text-3xl md:text-4xl font-bold text-[#111827]">
            Trusted by Leading Healthcare Institutions
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-[#4B5563] text-sm md:text-base">
            Serving India's most respected hospitals and medical institutions
            with dependable products and dedicated support.
          </p>
        </motion.div>

        {/* Client Marquee */}
        <div className="relative mt-10 space-y-4 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10"></div>

          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex w-max gap-4"
              animate={{ x: [row.from, row.to] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            >
              {[...row.items, ...row.items].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="group flex-shrink-0 flex items-center gap-3 h-16 md:h-[72px] pl-2 pr-5 bg-white border border-[#E5E7EB] rounded-xl shadow-sm hover:border-[#10B981]/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="h-12 w-12 md:h-14 md:w-14 flex-shrink-0 flex items-center justify-center rounded-lg bg-white overflow-hidden">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <span className="whitespace-nowrap text-sm md:text-base font-semibold text-[#111827] group-hover:text-[#047857] transition-colors duration-300">
                    {client.name}
                  </span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
