import { motion } from "framer-motion";
import Partners from "../app-layout/partners";
import PartnerAndContact from "../app-layout/partnerAndContact";
import Footer from "../app-layout/footer";

const products = [
  {
    id: 1,
    name: "EDWARDS LIFESCIENCES",
    logo: "/products/edwards.png",
  },
  {
    id: 2,
    name: "ARTIVION",
    logo: "/products/artivion.png",
    featured: true,
  },
  {
    id: 3,
    name: "DHANAM INSTRUMENTS",
    logo: "/products/dhanam.png",
  },
  {
    id: 4,
    name: "KAI MEDICAL",
    logo: "/products/kai.png",
  },
  {
    id: 5,
    name: "MAGNET MEDICAL",
    logo: "/products/magnet.png",
  },
  {
    id: 6,
    name: "VENUS MEDTECH",
    logo: "/products/venus.png",
  },
];

export default function Products() {
  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -90 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 90 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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
      {/* Hero Section */}
      <section
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/products-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#003B5C]/60"></div>

        <motion.div
          className="relative z-10 text-center px-6"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="text-white text-6xl md:text-8xl font-bold"
          >
            Our Product
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-white text-xl md:text-4xl font-medium max-w-5xl mx-auto"
          >
            Redefining Medical Access, One Innovation at a Time
          </motion.p>
        </motion.div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <Partners />
      </motion.div>

      {/* Products Section */}
      <section className="bg-[#247AA8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-white text-xl">— Products —</p>

            <h2 className="mt-4 text-6xl font-light text-white">
              Our Products
            </h2>
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
                  y: -14,
                  scale: 1.03,
                  boxShadow: "0px 25px 45px rgba(0,0,0,0.25)",
                }}
                className={`rounded-[30px] p-8 text-center shadow-lg ${
                  product.featured ? "bg-[#D8E7F6]" : "bg-[#F5F5F5]"
                }`}
              >
                <motion.img
                  src={product.logo}
                  alt={product.name}
                  className="h-52 mx-auto object-contain"
                  whileHover={{ scale: 1.08, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <h3 className="mt-6 text-2xl font-semibold text-[#005B8F] uppercase">
                  {product.name}
                </h3>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-[#005B8F] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#004873] transition"
                >
                  Contact Us →
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-[#F7F7F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <p className="text-[#005B8F] text-xl font-medium">
                — Our Leadership
              </p>

              <h2 className="mt-8 text-5xl md:text-6xl font-bold text-[#005B8F]">
                Gagandeep Kathuria
              </h2>

              <h3 className="mt-4 text-2xl md:text-3xl text-black">
                Founder & Managing Director
              </h3>

              <p className="mt-12 text-xl md:text-2xl leading-relaxed text-black">
                An IIM Ahmedabad alumnus with over 20 years of experience,
                Gagandeep is a visionary business leader with proven expertise
                in scaling MedTech ventures across domains like Cardiac Rhythm
                Management, Electrophysiology, Interventional Cardiology, and
                Structural Heart.
              </p>

              <p className="mt-6 text-xl md:text-2xl leading-relaxed text-black">
                Known for empowering teams and fostering growth, he is committed
                to transforming healthcare access through smart distribution
                models and strategic partnerships.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -10 }}
                className="bg-[#247AA8] rounded-[40px] overflow-hidden w-full max-w-4xl"
              >
                <img
                  src="/about/leadership.png"
                  alt="Gagandeep Kathuria"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <PartnerAndContact />
      </motion.div>

      <Footer />
    </div>
  );
}
