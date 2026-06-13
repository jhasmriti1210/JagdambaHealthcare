import { motion } from "framer-motion";

export default function PartnersSection() {
  const partners = [
    { name: "Edwards", logo: "/partners/edwards.png" },
    { name: "Magnet", logo: "/partners/magnet.png" },
    { name: "Kai", logo: "/partners/kai.png" },
    { name: "Dhanam", logo: "/partners/dhanam.png" },
    { name: "Artivion", logo: "/partners/artivion.png" },
    { name: "Venus", logo: "/partners/venus.png" },
    { name: "Partner 7", logo: "/partners/p7.png" },
    { name: "Partner 8", logo: "/partners/p8.png" },
    { name: "Partner 9", logo: "/partners/p9.png" },
    { name: "Partner 10", logo: "/partners/p10.png" },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="font-['Playfair_Display'] bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-['Playfair_Display'] text-lg md:text-xl font-medium text-black">
            — Our Partners —
          </p>

          <h2 className="mt-6 text-4xl md:text-6xl font-semibold text-[#047857] leading-tight">
            Collaborating with Global Leaders in MedTech
          </h2>
        </motion.div>

        {/* Moving Logos */}
        <div className="relative mt-24 overflow-hidden">
          <motion.div
            className="flex gap-20"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.15,
                  y: -8,
                }}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-24 md:h-32 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
