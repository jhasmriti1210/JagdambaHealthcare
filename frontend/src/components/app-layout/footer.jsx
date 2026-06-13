import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] px-3 py-3">
      <div className="bg-[#F8FAFC] rounded-[20px] px-5 md:px-8 py-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <img
              src="/logo.png"
              alt="Jagdamba Healthcare"
              className="h-16 object-contain"
            />

            <p className="font-['Playfair_Display'] mt-4 text-[#4B5563] text-sm leading-relaxed">
              Delivering trusted healthcare solutions through innovation,
              quality, and patient-focused care across India.
            </p>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-9 h-9 rounded-full bg-[#10B981] text-white items-center justify-center hover:bg-[#047857] transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#111827] font-semibold text-lg mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm text-[#4B5563]">
              <li>
                <Link to="/" className="hover:text-[#10B981] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#10B981] transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-[#10B981] transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="hover:text-[#10B981] transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#10B981] transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#111827] font-semibold text-lg mb-4">
              Corporate Office
            </h4>

            <p className="text-[#4B5563] text-sm leading-relaxed">
              227, 2nd Floor,
              <br />
              SRS Tower, Sector 31,
              <br />
              Faridabad – 121003,
              <br />
              Haryana, India
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#111827] font-semibold text-lg mb-4">
              Contact Information
            </h4>

            <div className="space-y-3 text-sm text-[#4B5563]">
              <p>
                <span className="font-semibold text-[#111827]">Phone:</span>
                <br />
                0129-4751558
              </p>

              <p>
                <span className="font-semibold text-[#111827]">Mobile:</span>
                <br />
                +91 9717266311
              </p>

              <p>
                <span className="font-semibold text-[#111827]">Email:</span>
                <br />
                info@jagdambahealthcare.in
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex flex-col md:flex-row items-center justify-between gap-3">
          {/* <p className="text-[#4B5563] text-xs">
            Copyright © 2018-{currentYear} Jagdamba Healthcare. All Rights
            Reserved.
          </p> */}
          <p className="text-[#4B5563] text-xs">
            Copyright © {currentYear} Jagdamba Healthcare. All Rights Reserved.
          </p>

          <p className="text-[#4B5563] text-xs text-center md:text-right">
            Developed by Web Development Team
          </p>
        </div>
      </div>
    </footer>
  );
}
