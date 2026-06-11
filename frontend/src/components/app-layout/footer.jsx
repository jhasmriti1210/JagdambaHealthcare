import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#247AA8] p-5">
      <div className="bg-[#F5F5F5] rounded-[32px] px-8 md:px-16 py-12">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Logo */}
          <div>
            <img
              src="/logo.png"
              alt="Trivexa"
              className="h-24 md:h-32 object-contain"
            />
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#005B8F] text-3xl font-medium mb-8">
              Stay up to date with our latest news.
            </h3>

            <div>
              <label className="block text-[#005B8F] text-lg mb-4">
                Email *
              </label>

              <input
                type="email"
                className="w-full bg-transparent border-b border-[#005B8F] outline-none pb-3"
              />
            </div>

            <div className="flex items-center gap-4 mt-8">
              <input type="checkbox" className="w-5 h-5 accent-[#005B8F]" />

              <p className="text-[#005B8F]">
                I want to receive your newsletter. *
              </p>
            </div>

            <div className="flex justify-end mt-8">
              <button className="border border-[#005B8F] text-[#005B8F] px-20 py-4 rounded-2xl text-xl font-semibold hover:bg-[#005B8F] hover:text-white transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {/* Navigation */}
          <div>
            <ul className="space-y-3 text-3xl">
              <li className="text-[#005B8F] font-semibold">Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Products</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Delhi Office */}
          <div>
            <h4 className="font-bold text-2xl mb-4">
              Delhi NCR Corporate Office
            </h4>

            <p className="text-xl leading-relaxed">
              227, 2nd Floor, SRS Tower, Sector 31,
              <br />
              Faridabad – 121003, Haryana, India
            </p>

            <div className="mt-8 text-xl space-y-2">
              <p>
                <strong>Contact Number :</strong> 0129 - 4751558
              </p>

              <p>
                <strong>Mobile Number:</strong> 9717266311
              </p>

              <p>
                <strong>Email:</strong> info.delhincr@trivexa.in
              </p>
            </div>
          </div>

          {/* Kolkata Office */}
          <div>
            <h4 className="font-bold text-2xl mb-4">Kolkata Branch Office</h4>

            <p className="text-xl leading-relaxed">
              Ground Floor, GE - 27, Rajdanga Main Road, Kasba,
              <br />
              Kolkata - 700107, West Bengal
            </p>

            <div className="mt-8 text-xl space-y-2">
              <p>
                <strong>Contact Number :</strong> 033-68288560
              </p>

              <p>
                <strong>Email:</strong> info.kolkata@trivexa.in
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#"
            className="text-[#0077B5] text-7xl hover:scale-105 transition"
          >
            <FaLinkedinIn />
          </a>

          <p className="text-lg text-center md:text-right">
            Copyright ©2025 Trivexa All Rights Reserved. Developed by Web
            Development Team
          </p>
        </div>
      </div>
    </footer>
  );
}
