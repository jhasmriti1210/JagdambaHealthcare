export default function Contact() {
  return (
    <div className="w-full bg-white">
      {/* Partner With Us Section */}
      <section
        className="relative h-[430px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/partner-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#003B5C]/45"></div>

        <div className="relative z-10 px-6">
          <h2 className="text-white text-5xl md:text-8xl font-bold">
            Partner with Us
          </h2>

          <p className="mt-8 text-white text-xl md:text-3xl font-light">
            Discover how we can help scale your MedTech presence across India.
          </p>

          <button className="mt-12 bg-[#005B8F] hover:bg-[#004873] text-white px-12 py-4 rounded-xl text-xl font-bold transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#247AA8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[#F5F5F5] rounded-[32px] p-12">
              <p className="text-[#005B8F] text-xl font-medium">— Contact Us</p>

              <h2 className="mt-8 text-5xl md:text-7xl font-bold text-[#005B8F] leading-tight">
                Get in Touch with Us
              </h2>

              <p className="mt-16 text-3xl md:text-4xl text-[#4A7698] leading-relaxed">
                Want to learn more about our services? Talk to our experts.
              </p>
            </div>

            <div className="bg-[#F5F5F5] rounded-[32px] p-10">
              <form className="space-y-10">
                <div>
                  <label className="block text-xl text-black mb-4">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none pb-3"
                  />
                </div>

                <div>
                  <label className="block text-xl text-black mb-4">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none pb-3"
                  />
                </div>

                <div>
                  <label className="block text-xl text-black mb-4">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none pb-3"
                  />
                </div>

                <div>
                  <label className="block text-xl text-black mb-4">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    className="w-full bg-transparent border-b border-[#005B8F] outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="w-72 border border-[#005B8F] text-[#005B8F] py-4 rounded-2xl text-xl font-semibold hover:bg-[#005B8F] hover:text-white transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
