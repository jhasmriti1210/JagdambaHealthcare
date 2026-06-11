import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Footer from "../app-layout/footer";
import Partners from "../app-layout/partners";
import PartnerAndContact from "../app-layout/partnerAndContact";

export default function Home() {
  const partners = [
    { name: "Edwards Lifesciences", logo: "/partners/edwards.png" },
    { name: "Magnet Medical", logo: "/partners/magnet.png" },
    { name: "Kai Medical", logo: "/partners/kai.png" },
    { name: "Dhanam", logo: "/partners/dhanam.png" },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt="Healthcare"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-white font-light text-5xl md:text-8xl leading-tight">
            Essential to Advancing Care
          </h1>

          <p className="mt-6 text-white text-lg md:text-3xl font-light max-w-5xl">
            Redefining the Standards of Healthcare Access, Delivery, and
            Innovation
          </p>

          <button className="mt-10 bg-[#005B99] hover:bg-[#00497A] text-white px-10 py-4 rounded-2xl text-xl font-semibold transition">
            Contact Us
          </button>
        </div>
      </section>

      <Partners />
      {/* Clientele Section */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-xl text-black font-light">— Our Partners —</p>

            <h2 className="mt-6 text-4xl md:text-6xl font-light text-[#005B99]">
              Collaborating with Global Leaders in MedTech
            </h2>
          </div>

          <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-14 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-24 md:max-h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/about/about-us.png"
              alt="About Trivexa"
              className="w-full max-w-2xl rounded-3xl shadow-xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-lg font-semibold text-black">— About Us</p>

            <h2 className="mt-8 text-4xl md:text-6xl font-bold text-[#005B8F]">
              Who We Are
            </h2>

            <p className="mt-10 text-lg md:text-xl leading-relaxed text-black max-w-3xl">
              At Trivexa Medtech Pvt Ltd, we are committed to bridging the gap
              between cutting-edge global medical technologies and India’s
              diverse healthcare needs. With over 20 years of expertise, our
              mission is to enhance healthcare delivery through strategic
              distribution, operational excellence, and market intelligence.
            </p>

            <button className="mt-10 px-10 py-3 border border-[#005B8F] text-[#005B8F] rounded-xl text-lg font-semibold hover:bg-[#005B8F] hover:text-white transition">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#1F79A8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center">
            <p className="text-white text-xl font-medium">— Core Values —</p>

            <h2 className="mt-6 text-5xl md:text-7xl font-bold text-white">
              What We Stand For
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <img
                src="/values/integrity.jpg"
                alt="Integrity"
                className="w-full h-72 object-cover rounded-2xl"
              />

              <h3 className="mt-6 text-3xl font-bold text-[#005B8F] text-center">
                Integrity & Excellence
              </h3>

              <p className="mt-6 text-center text-gray-700 text-lg leading-relaxed">
                Ethical practices, quality, and compliance in everything we do.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <img
                src="/values/innovation.jpg"
                alt="Innovation"
                className="w-full h-72 object-cover rounded-2xl"
              />

              <h3 className="mt-6 text-3xl font-bold text-[#005B8F] text-center">
                Forward Thinking & Agility
              </h3>

              <p className="mt-6 text-center text-gray-700 text-lg leading-relaxed">
                Adapting with innovation and offering responsive support.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <img
                src="/values/partnership.jpg"
                alt="Partnership"
                className="w-full h-72 object-cover rounded-2xl"
              />

              <h3 className="mt-6 text-3xl font-bold text-[#005B8F] text-center">
                Partnership & Collaboration
              </h3>

              <p className="mt-6 text-center text-gray-700 text-lg leading-relaxed">
                Creating lasting value with partners and providers for better
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f5f5f5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content Card */}
            <div className="lg:col-span-1 bg-white rounded-[30px] p-12 shadow-md">
              <p className="text-[#005B8F] font-semibold mb-6">
                — Our Services
              </p>

              <h2 className="text-4xl font-bold text-[#005B8F] leading-tight">
                Transforming Access to Medical Innovation Across India
              </h2>

              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                At Trivexa Medtech Pvt Ltd, our services are designed to bridge
                the gap between world-class medical technologies and the unique
                needs of India's healthcare ecosystem.
              </p>

              <button className="mt-10 border border-[#005B8F] text-[#005B8F] px-8 py-3 rounded-xl font-semibold hover:bg-[#005B8F] hover:text-white transition">
                Read More
              </button>
            </div>

            {/* Right Services */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-[#267AA6] rounded-[30px] p-8 text-white shadow-xl">
                  <h3 className="text-center text-xl font-semibold mb-8">
                    Operational & Logistical Excellence
                  </h3>

                  <img
                    src="/services/logistics.jpg"
                    alt=""
                    className="w-full h-64 object-cover rounded-3xl"
                  />

                  <p className="text-center mt-6 text-white/90">
                    Automation and standardization to streamline healthcare
                    delivery.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#267AA6] rounded-[30px] p-8 text-white shadow-xl">
                  <h3 className="text-center text-xl font-semibold mb-8">
                    Access & Expansion
                  </h3>

                  <img
                    src="/services/access.jpg"
                    alt=""
                    className="w-full h-64 object-cover rounded-3xl"
                  />

                  <p className="text-center mt-6 text-white/90">
                    Reaching underserved markets with broad insight and reach.
                  </p>
                </div>
              </div>

              {/* Bottom Center Card */}
              <div className="flex justify-center mt-8">
                <div className="bg-[#004E82] rounded-[30px] p-8 text-white shadow-xl max-w-2xl w-full">
                  <h3 className="text-center text-xl font-semibold mb-8">
                    Market Insights & Growth Strategy
                  </h3>

                  <img
                    src="/services/market.jpg"
                    alt=""
                    className="w-full h-72 object-cover rounded-3xl"
                  />

                  <p className="text-center mt-6 text-white/90">
                    Data-driven intelligence to accelerate growth and market
                    adoption.
                  </p>
                </div>
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
