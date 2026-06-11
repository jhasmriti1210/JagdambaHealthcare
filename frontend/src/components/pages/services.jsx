import Partners from "../app-layout/partners";
import PartnerAndContact from "../app-layout/partnerAndContact";
import Footer from "../app-layout/footer";

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/services-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#003B5C]/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-6xl md:text-8xl font-bold">
            Our Services
          </h1>

          <p className="mt-8 text-white text-xl md:text-4xl font-medium max-w-5xl mx-auto">
            Empowering Healthcare Access Through Precision, Innovation, and
            Partnership.
          </p>
        </div>
      </section>

      {/* Add other about page sections below */}
      <Partners />

      {/* Services Section */}
      <section className="bg-[#247AA8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-white text-xl font-medium">— Our Services —</p>

            <h2 className="mt-4 text-6xl md:text-8xl font-light text-white">
              What We Offer
            </h2>
          </div>

          {/* Service 1 */}
          <div className="bg-[#F5F5F5] rounded-[32px] p-8 md:p-12 mb-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <img
                src="/services/logistics.jpg"
                alt="Operational & Logistical Excellence"
                className="w-full h-[450px] object-cover rounded-3xl"
              />

              <div>
                <h3 className="text-4xl md:text-6xl font-semibold text-[#005B8F]">
                  Operational & Logistical Excellence
                </h3>

                <p className="mt-6 text-xl">
                  Automation and Standardization to Streamline Healthcare
                  Delivery
                </p>

                <ul className="mt-8 space-y-4 list-disc pl-6 text-lg">
                  <li>
                    Transition from traditional systems to standardized
                    inventory management.
                  </li>
                  <li>
                    Improve supply chain transparency and reduce stockouts.
                  </li>
                  <li>
                    Streamline delivery to ensure timely access to life-saving
                    devices.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-[#D8E7F6] rounded-[32px] p-8 md:p-12 mb-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <img
                src="/services/access.jpg"
                alt="Access & Expansion"
                className="w-full h-[450px] object-cover rounded-3xl"
              />

              <div>
                <h3 className="text-4xl md:text-6xl font-semibold text-[#005B8F]">
                  Access & Expansion
                </h3>

                <p className="mt-6 text-xl">
                  Reaching underserved markets with local insight and reach.
                </p>

                <ul className="mt-8 space-y-4 list-disc pl-6 text-lg">
                  <li>Expand access to advanced medical technologies.</li>
                  <li>Build stronger regional healthcare networks.</li>
                  <li>Support market penetration and sustainable growth.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-[#F5F5F5] rounded-[32px] p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <img
                src="/services/analytics.jpg"
                alt="Market Insights & Growth Strategy"
                className="w-full h-[450px] object-cover rounded-3xl"
              />

              <div>
                <h3 className="text-4xl md:text-6xl font-semibold text-[#005B8F]">
                  Market Insights & Growth Strategy
                </h3>

                <p className="mt-6 text-xl">
                  Data-driven planning and business intelligence solutions.
                </p>

                <ul className="mt-8 space-y-4 list-disc pl-6 text-lg">
                  <li>Healthcare market intelligence and analytics.</li>
                  <li>Growth planning and commercial strategy support.</li>
                  <li>Performance optimization through actionable insights.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#F7F7F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-[#005B8F] text-xl font-medium">
              — Why Choose Us —
            </p>

            <h2 className="mt-4 text-5xl md:text-7xl font-bold text-[#005B8F]">
              What Sets Us Apart
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#247AA8] rounded-[30px] p-8 text-center shadow-lg">
              <img
                src="/services/expertise.jpg"
                alt="Industry Expertise"
                className="w-full h-72 object-cover rounded-3xl"
              />

              <h3 className="mt-8 text-3xl font-semibold text-white">
                20+ Years of Industry Expertise
              </h3>

              <p className="mt-6 text-white text-lg leading-relaxed">
                We bring decades of specialized knowledge in cardiology, cardiac
                surgery, and structural heart technologies — ensuring strategic,
                knowledgeable representation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#247AA8] rounded-[30px] p-8 text-center shadow-lg">
              <img
                src="/services/partnership.jpg"
                alt="Global Partnerships"
                className="w-full h-72 object-cover rounded-3xl"
              />

              <h3 className="mt-8 text-3xl font-semibold text-white">
                Global Partnerships, Local Execution
              </h3>

              <p className="mt-6 text-white text-lg leading-relaxed">
                We partner with leading international MedTech brands to deliver
                tailored solutions through a deeply connected network across
                Northern & Eastern India.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#247AA8] rounded-[30px] p-8 text-center shadow-lg">
              <img
                src="/services/logistics-excellence.jpg"
                alt="Operational Excellence"
                className="w-full h-72 object-cover rounded-3xl"
              />

              <h3 className="mt-8 text-3xl font-semibold text-white">
                Operational & Logistical Excellence
              </h3>

              <p className="mt-6 text-white text-lg leading-relaxed">
                From real-time inventory systems to standardized processes, we
                optimize supply chains and ensure consistent product
                availability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PartnerAndContact />
      <Footer />
    </div>
  );
}
