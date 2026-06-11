import Footer from "../app-layout/footer";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/contact-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#003B5C]/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-6xl md:text-8xl font-bold">
            Contact Us
          </h1>

          <p className="mt-8 text-white text-xl md:text-4xl font-medium max-w-5xl mx-auto">
            Let’s Build the Future of Healthcare, Together
          </p>
        </div>
      </section>

      {/* Query Form Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Card */}
            <div className="bg-[#F5F5F5] rounded-[32px] p-10 md:p-14 h-fit">
              <p className="text-[#005B8F] text-xl font-medium">— Contact Us</p>

              <h2 className="mt-8 text-5xl md:text-7xl font-bold text-[#005B8F] leading-tight">
                Send Your Query
              </h2>

              <p className="mt-16 text-3xl md:text-4xl text-[#4A7698] leading-relaxed">
                Want to learn more about our services? Talk to our experts.
              </p>
            </div>

            {/* Right Form */}
            <div className="bg-[#F5F5F5] rounded-[32px] p-10 md:p-14">
              <form className="space-y-9">
                <div>
                  <label className="block text-xl text-black mb-4">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none pb-3 text-lg"
                  />
                </div>

                <div>
                  <label className="block text-xl text-black mb-4">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none pb-3 text-lg"
                  />
                </div>

                <div>
                  <label className="block text-xl text-black mb-4">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none pb-3 text-lg"
                  />
                </div>

                <div>
                  <label className="block text-xl text-black mb-4">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none resize-none text-lg"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="w-full md:w-72 border border-[#005B8F] text-[#005B8F] py-4 rounded-2xl text-xl font-semibold hover:bg-[#005B8F] hover:text-white transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-[#247AA8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center">
            <p className="text-white text-xl font-medium">— Our Location —</p>

            <h2 className="mt-6 text-5xl md:text-7xl font-bold text-white">
              Get In Touch With Us
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Address */}
            <div className="bg-[#F5F5F5] rounded-[30px] p-10 text-center shadow-lg">
              <div className="flex justify-center">
                <FaMapMarkerAlt className="text-[#247AA8] text-8xl" />
              </div>

              <h3 className="mt-8 text-5xl font-bold text-[#4A7698]">
                Address
              </h3>

              <p className="mt-8 text-xl leading-relaxed">
                227, 2nd Floor, SRS Tower, Sector 31, Faridabad
                <br />– 121003, Haryana, India
              </p>
            </div>

            {/* Phone */}
            <div className="bg-[#CFE1F3] rounded-[30px] p-10 text-center shadow-lg">
              <div className="flex justify-center">
                <FaPhoneAlt className="text-[#247AA8] text-8xl" />
              </div>

              <h3 className="mt-8 text-5xl font-bold text-[#4A7698]">Phone</h3>

              <div className="mt-8 text-xl leading-relaxed">
                <p>+91 9717266311</p>
                <p>0129 - 4751558</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#F5F5F5] rounded-[30px] p-10 text-center shadow-lg">
              <div className="flex justify-center">
                <HiOutlineMail className="text-[#247AA8] text-8xl" />
              </div>

              <h3 className="mt-8 text-5xl font-bold text-[#4A7698]">Email</h3>

              <p className="mt-8 text-xl">contact@trivexa.in</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#247AA8] py-8">
        <div className="max-w-[1900px] mx-auto px-6">
          <div className="overflow-hidden rounded-[20px] shadow-xl">
            <iframe
              title="Trivexa Location"
              src="https://maps.google.com/maps?q=227%20SRS%20Tower%20Sector%2031%20Faridabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="650"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
