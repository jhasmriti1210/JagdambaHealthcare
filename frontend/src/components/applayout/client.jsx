import { motion } from "framer-motion";
import aiims from "../../assets/clients/aiims.jpg";
import medanta from "../../assets/clients/medants.jpg";
import igims from "../../assets/clients/igims.jpg";
import heart from "../../assets/clients/igims.jpg";
import fourA from "../../assets/clients/igims.jpg";
import paras from "../../assets/clients/igims.jpg";
import ruban from "../../assets/clients/ruban.jpg";
import ford from "../../assets/clients/ford.jpg";
import mediversal from "../../assets/clients/mediversal.jpg";
import asian from "../../assets/clients/asian.jpg";
import igic from "../../assets/clients/igims.jpg";

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
    { name: "Asian Hospital", logo: asian },
    { name: "IGIC", logo: igic },
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-['Playfair_Display'] text-lg md:text-xl font-medium text-[#047857]">
            — Our Clients —
          </p>

          <h2 className="font-['Playfair_Display'] mt-4 text-4xl md:text-6xl font-bold text-[#111827]">
            Trusted by Leading Healthcare Institutions
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-[#4B5563] text-base md:text-lg leading-relaxed">
            We proudly serve some of India's most respected hospitals,
            healthcare organizations, and medical institutions through
            dependable products and dedicated support.
          </p>
        </motion.div>

        {/* Client Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0px 15px 30px rgba(16,185,129,0.15)",
              }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex items-center justify-center text-center min-h-[120px] shadow-sm"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 md:h-20 object-contain mb-4"
                />

                <h3 className="font-['Playfair_Display'] text-lg md:text-xl font-semibold text-[#111827]">
                  {client.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
