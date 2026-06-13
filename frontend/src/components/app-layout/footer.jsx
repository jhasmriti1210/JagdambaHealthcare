import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#111827] px-4 py-4">
      <div className="bg-[#F8FAFC] rounded-[24px] px-6 md:px-10 py-7">
        {/* Top */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div>
            <img
              src="/logo.png"
              alt="Jagdamba Healthcare"
              className="h-16 md:h-20 object-contain"
            />

            <p className="mt-3 max-w-md text-[#4B5563] text-sm leading-relaxed">
              Delivering trusted healthcare solutions with quality, care, and
              reliability.
            </p>
          </div>

          <div>
            <h3 className="font-['Playfair_Display'] text-[#111827] text-xl md:text-2xl font-semibold mb-4">
              Stay updated with our latest news.
            </h3>

            <label className="block text-[#111827] text-sm font-medium mb-1">
              Email *
            </label>

            <input
              type="email"
              className="w-full bg-transparent border-b border-[#10B981] outline-none pb-2 text-[#111827] focus:border-[#047857]"
            />

            <div className="flex items-start gap-2 mt-3">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 accent-[#10B981]"
              />

              <p className="text-[#4B5563] text-sm">
                I want to receive your newsletter.
              </p>
            </div>

            <button className="mt-4 bg-[#10B981] hover:bg-[#047857] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle */}
        <div className="grid md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-[#E5E7EB]">
          <div>
            <h4 className="font-['Playfair_Display'] text-[#111827] font-bold text-base mb-3">
              Quick Links
            </h4>

            <ul className="space-y-1.5 text-[#4B5563] text-sm">
              <li>
                <Link
                  to="/"
                  className="font-['Playfair_Display'] hover:text-[#10B981] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-['Playfair_Display'] hover:text-[#10B981] transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="font-['Playfair_Display'] hover:text-[#10B981] transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="font-['Playfair_Display'] hover:text-[#10B981] transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-['Playfair_Display'] hover:text-[#10B981] transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Playfair_Display'] text-[#111827] font-bold text-base mb-3">
              Corporate Office
            </h4>

            <p className="text-[#4B5563] text-sm leading-relaxed">
              227, 2nd Floor, SRS Tower,
              <br />
              Sector 31, Faridabad – 121003,
              <br />
              Haryana, India
            </p>
          </div>

          <div>
            <h4 className="font-['Playfair_Display'] text-[#111827] font-bold text-base mb-3">
              Contact Info
            </h4>

            <div className="text-[#4B5563] text-sm space-y-1.5">
              <p>
                <span className="font-semibold text-[#111827]">Phone:</span>{" "}
                0129 - 4751558
              </p>

              <p>
                <span className="font-semibold text-[#111827]">Mobile:</span>{" "}
                +91 9717266311
              </p>

              <p>
                <span className="font-semibold text-[#111827]">Email:</span>{" "}
                info@jagdambahealthcare.in
              </p>
            </div>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-9 h-9 rounded-full bg-[#10B981] text-white items-center justify-center hover:bg-[#047857] transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#4B5563] text-xs text-center md:text-left">
            Copyright ©{currentYear} Jagdamba Healthcare. All Rights Reserved.
          </p>

          <p className="text-[#4B5563] text-xs text-center md:text-right">
            Developed by Web Development Team
          </p>
        </div>
      </div>
    </footer>
  );
}
