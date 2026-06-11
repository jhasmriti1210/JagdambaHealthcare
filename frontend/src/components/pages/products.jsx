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
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/products-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#003B5C]/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-6xl md:text-8xl font-bold">
            Our Product
          </h1>

          <p className="mt-8 text-white text-xl md:text-4xl font-medium max-w-5xl mx-auto">
            Redefining Medical Access, One Innovation at a Time
          </p>
        </div>
      </section>

      {/* Add other products page sections below */}
      <Partners />

      {/* Products Section */}
      <section className="bg-[#247AA8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-white text-xl">— Products —</p>

            <h2 className="mt-4 text-6xl font-light text-white">
              Our Products
            </h2>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className={`rounded-[30px] p-8 text-center shadow-lg ${
                  product.featured ? "bg-[#D8E7F6]" : "bg-[#F5F5F5]"
                }`}
              >
                <img
                  src={product.logo}
                  alt={product.name}
                  className="h-52 mx-auto object-contain"
                />

                <h3 className="mt-6 text-2xl font-semibold text-[#005B8F] uppercase">
                  {product.name}
                </h3>

                <button className="mt-8 bg-[#005B8F] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#004873] transition">
                  Contact Us →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-[#F7F7F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
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
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="bg-[#247AA8] rounded-[40px] overflow-hidden w-full max-w-4xl">
                <img
                  src="/about/leadership.png"
                  alt="Gagandeep Kathuria"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PartnerAndContact />
      <Footer />
    </div>
  );
}
