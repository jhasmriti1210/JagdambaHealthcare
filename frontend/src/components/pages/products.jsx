import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Partners from "../app-layout/partners";
import PartnerAndContact from "../app-layout/partnerAndContact";
import Footer from "../app-layout/footer";

const products = [
  {
    id: 1,
    name: "CARDIOLOGY",
    logo: "/products/cardiology.png",
    path: "/products/cardiology",
  },
  {
    id: 2,
    name: "NEPHROLOGY",
    logo: "/products/nephrology.png",
    path: "/products/nephrology",
    featured: true,
  },
  {
    id: 3,
    name: "UROLOGY",
    logo: "/products/urology.png",
    path: "/products/urology",
  },
  {
    id: 4,
    name: "GASTRO",
    logo: "/products/gastro.png",
    path: "/products/gastro",
  },
];

export default function Products() {
  const fadeUp = {
    hidden: { opacity: 0, y: 70 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/websitebg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#111827]/60"></div>
        <motion.div
          className="relative z-10 text-center px-6"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="font-['Playfair_Display'] text-white text-5xl md:text-7xl font-bold"
          >
            Our Products
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-['Playfair_Display'] mt-6 text-white/90 text-lg md:text-2xl font-medium max-w-4xl mx-auto"
          >
            Explore our healthcare product categories and medical solutions.
          </motion.p>
        </motion.div>
      </section>

      <Partners />

      {/* Products Section */}
      <section className="bg-[#003B5C] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-[#10B981] text-lg font-medium">— Products —</p>

            <h2 className="font-['Playfair_Display'] mt-3 text-4xl md:text-6xl font-bold text-white">
              Our Product Categories
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                  scale: 1.03,
                  boxShadow: "0px 20px 35px rgba(16,185,129,0.25)",
                }}
                className={`rounded-[26px] p-6 text-center shadow-lg ${
                  product.featured ? "bg-[#ECFDF5]" : "bg-white"
                }`}
              >
                <img
                  src={product.logo}
                  alt={product.name}
                  className="h-40 mx-auto object-contain"
                />

                <h3 className="font-['Playfair_Display'] mt-6 text-2xl font-semibold text-[#111827]">
                  {product.name}
                </h3>

                <Link to={product.path}>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-[#10B981] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#047857] transition"
                  >
                    View Products →
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PartnerAndContact />
      <Footer />
    </div>
  );
}
