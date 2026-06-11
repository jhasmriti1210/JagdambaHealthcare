import Partners from "../app-layout/partners";
import PartnerAndContact from "../app-layout/partnerAndContact";
import Footer from "../app-layout/footer";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/about-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#003B5C]/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-6xl md:text-8xl font-bold">
            About Us
          </h1>

          <p className="mt-8 text-white text-xl md:text-4xl font-medium max-w-5xl mx-auto">
            Redefining Medical Access, One Innovation at a Time
          </p>
        </div>
      </section>

      {/* Add other about page sections below */}
      <Partners />

      {/* Who We Are Section */}
      <section className="bg-[#F7F7F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <p className="text-[#005B8F] text-xl font-medium">— About Us</p>

              <h2 className="mt-8 text-5xl md:text-6xl font-bold text-[#005B8F]">
                Who We Are
              </h2>

              <p className="mt-10 text-xl md:text-2xl leading-relaxed text-gray-800">
                At Trivexa Medtech Pvt Ltd, we are committed to bridging the gap
                between cutting-edge global medical technologies and India’s
                diverse healthcare needs. With over 20 years of expertise, our
                mission is to enhance healthcare delivery through strategic
                distribution, operational excellence, and market intelligence.
              </p>

              <button className="mt-12 px-10 py-4 border border-[#005B8F] text-[#005B8F] rounded-2xl text-xl font-semibold hover:bg-[#005B8F] hover:text-white transition duration-300">
                Contact Us
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="/about/about-section.png"
                alt="Who We Are"
                className="w-full max-w-3xl rounded-[32px] shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#247AA8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center">
            <p className="text-white text-lg md:text-xl font-medium">
              — Core Values —
            </p>

            <h2 className="mt-4 text-5xl md:text-7xl font-light text-white">
              What We Stand For
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#F5F5F5] rounded-[28px] p-6 shadow-lg">
              <img
                src="/about/integrity.jpg"
                alt="Integrity & Excellence"
                className="w-full h-72 object-cover rounded-2xl"
              />

              <h3 className="mt-8 text-center text-3xl font-semibold text-[#005B8F]">
                Integrity & Excellence
              </h3>

              <p className="mt-6 text-center text-xl leading-relaxed text-black">
                Ethical practices, quality, and compliance in everything we do.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#CFE1F3] rounded-[28px] p-6 shadow-lg">
              <img
                src="/about/agility.jpg"
                alt="Forward Thinking & Agility"
                className="w-full h-72 object-cover rounded-2xl"
              />

              <h3 className="mt-8 text-center text-3xl font-semibold text-[#005B8F]">
                Forward Thinking & Agility
              </h3>

              <p className="mt-6 text-center text-xl leading-relaxed text-black">
                Adapting with innovation and offering 24x7 responsive support.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F5F5F5] rounded-[28px] p-6 shadow-lg">
              <img
                src="/about/partnership.jpg"
                alt="Partnership & Collaboration"
                className="w-full h-72 object-cover rounded-2xl"
              />

              <h3 className="mt-8 text-center text-3xl font-semibold text-[#005B8F]">
                Partnership & Collaboration
              </h3>

              <p className="mt-6 text-center text-xl leading-relaxed text-black">
                Creating lasting value with partners and providers for better
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[#F8F8F8] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-20">
              {/* Mission */}
              <div className="flex gap-8">
                <div className="w-24 h-24 bg-[#F1F1F1] rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src="/about/mission-icon.png"
                    alt="Mission"
                    className="w-12 h-12"
                  />
                </div>

                <div>
                  <h2 className="text-5xl font-bold text-[#005B8F]">
                    Our Mission
                  </h2>

                  <p className="mt-6 text-2xl text-black">
                    To redefine MedTech distribution through:
                  </p>

                  <ul className="mt-8 list-disc pl-8 space-y-4 text-xl text-black leading-relaxed">
                    <li>Seamless access to world-class innovations</li>
                    <li>
                      Efficient and ethical operations rooted in compliance and
                      trust
                    </li>
                    <li>
                      Scalable strategies that empower providers and improve
                      patient outcomes
                    </li>
                  </ul>
                </div>
              </div>

              {/* Vision */}
              <div className="flex gap-8">
                <div className="w-24 h-24 bg-[#F1F1F1] rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src="/about/vision-icon.png"
                    alt="Vision"
                    className="w-12 h-12"
                  />
                </div>

                <div>
                  <h2 className="text-5xl font-bold text-[#005B8F]">
                    Our Vision
                  </h2>

                  <p className="mt-6 text-2xl text-black leading-relaxed">
                    To be India's most trusted partner in expanding access to
                    advanced medical technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="relative h-[700px] hidden lg:block">
              {/* Back Image */}
              <img
                src="/about/mission-bg.jpg"
                alt="Medical Technology"
                className="absolute top-0 right-0 w-[85%] rounded-[32px] shadow-xl"
              />

              {/* Front Image */}
              <img
                src="/about/mission-front.jpg"
                alt="Healthcare"
                className="absolute bottom-0 right-0 w-[75%] rounded-[32px] shadow-2xl border-8 border-white"
              />
            </div>
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
