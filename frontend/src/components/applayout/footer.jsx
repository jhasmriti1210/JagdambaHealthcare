import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] px-3 py-3">
      <div className="bg-[#F8FAFC] rounded-[20px] px-5 md:px-8 py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <img
              src="/logo.png"
              alt="Jagdamba Healthcare"
              className="h-16 object-contain"
            />

            <p className="mt-4 text-[#4B5563] text-sm leading-relaxed">
              Your lifeline in cardiology and cardiovascular products,
              delivering trusted healthcare solutions with quality and care.
            </p>

            <a
              href="https://www.linkedin.com/company/jagdamba-healthcare/"
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
              First Floor, Shop No. 1 & 2,
              <br />
              Hari Bihar Colony, near Mani International Hotel,
              <br />
              opposite Krishi Bhawan, Mithapur,
              <br />
              Patna, Bihar – 800001
            </p>

            <p>Ashram in Mahrani Bagh , Delhi</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#111827] font-semibold text-lg mb-4">
              Contact Information
            </h4>

            <div className="space-y-3 text-sm text-[#4B5563]">
              <p>
                <span className="font-semibold text-[#111827]">Contact:</span>
                <br />
                +91 8178996877
                <br />
                +91 7701905739
              </p>

              <p>
                <span className="font-semibold text-[#111827]">Email:</span>
                <br />
                jagdambahealthcare852@gmail.com
                <br />
                jagdambahealthcare851@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#4B5563] text-xs text-center md:text-left">
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
