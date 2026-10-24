import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaLandmark,
  FaHospital,
  FaBuilding,
  FaClipboardList,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/jagdamba-healthcare/",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/918178996877",
    },
    {
      // TODO: replace with the real Instagram profile URL
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/",
    },
  ];

  const quickLinks = [
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Products", to: "/products" },
    { label: "Contact Us", to: "/contact" },
  ];

  const institutional = [
    { icon: FaHospital, title: "Govt. Hospitals" },
    { icon: FaBuilding, title: "Govt. Departments" },
    { icon: FaClipboardList, title: "Bulk & Tenders" },
  ];

  const headingClass =
    "font-['Playfair_Display'] text-[#111827] font-semibold text-base mb-3 relative pb-1.5 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:rounded-full after:bg-[#10B981]";

  return (
    <footer className="bg-[#111827] px-3 py-3">
      <div className="bg-[#F8FAFC] rounded-[20px] overflow-hidden">
        {/* Main Footer */}
        <div className="px-5 md:px-8 py-7">
          <div className="grid sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1fr] gap-x-8 gap-y-6">
            {/* Company */}
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Jagdamba Healthcare"
                  className="h-12 object-contain"
                />
                <p className="font-['Playfair_Display'] text-[#047857] text-sm font-semibold leading-snug">
                  Your Lifeline in
                  <br />
                  Cardiac Care
                </p>
              </div>

              <div className="mt-4">
                <h4 className="flex items-center gap-2 font-['Playfair_Display'] text-[#111827] font-semibold text-sm">
                  <FaLandmark className="text-[#047857]" size={13} />
                  Government & Institutional Supplies
                </h4>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {institutional.map(({ icon: Icon, title }) => (
                    <span
                      key={title}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#D1FAE5] bg-[#ECFDF5] px-2.5 py-1 text-xs text-[#047857]"
                    >
                      <Icon size={11} />
                      {title}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#047857] hover:text-[#10B981] transition"
                >
                  Enquire for Bulk Orders
                  <FaArrowRight size={10} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={headingClass}>Quick Links</h4>

              <ul className="space-y-1.5 text-sm text-[#4B5563]">
                {quickLinks.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="group inline-flex items-center gap-2 hover:text-[#10B981] transition"
                    >
                      <FaArrowRight
                        size={10}
                        className="text-[#10B981] transition-transform group-hover:translate-x-1"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office */}
            <div>
              <h4 className={headingClass}>Corporate Office</h4>

              <div className="flex gap-3 text-sm text-[#4B5563] leading-relaxed">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-[#10B981]" />
                <p>
                  First Floor, Shop No. 1 & 2, Hari Bihar Colony, near Mani
                  International Hotel, opposite Krishi Bhawan, Mithapur, Patna,
                  Bihar – 800001
                </p>
              </div>

              <h4 className={`mt-4 ${headingClass}`}>Follow Us On</h4>

              <div className="flex gap-3">
                {socials.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="w-8 h-8 rounded-full bg-white border border-[#E5E7EB] text-[#047857] flex items-center justify-center hover:bg-[#10B981] hover:border-[#10B981] hover:text-white transition"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className={headingClass}>Contact Information</h4>

              <div className="space-y-3 text-sm text-[#4B5563]">
                <div className="flex gap-3">
                  <FaPhoneAlt className="mt-1 flex-shrink-0 text-[#10B981]" />
                  <div className="flex flex-col">
                    <a
                      href="tel:+918178996877"
                      className="hover:text-[#10B981] transition"
                    >
                      +91 8178996877
                    </a>
                    <a
                      href="tel:+917701905739"
                      className="hover:text-[#10B981] transition"
                    >
                      +91 7701905739
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaEnvelope className="mt-1 flex-shrink-0 text-[#10B981]" />
                  <a
                    href="mailto:info@jagdambahealthcare.com"
                    className="break-all hover:text-[#10B981] transition"
                  >
                    info@jagdambahealthcare.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="px-5 md:px-8 py-3 border-t border-[#E5E7EB] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#6B7280] text-xs text-center md:text-left">
            Copyright © {currentYear} Jagdamba Healthcare. All Rights Reserved.
          </p>

          <p className="text-[#6B7280] text-xs text-center md:text-right">
            Developed by Web Development Team
          </p>
        </div>
      </div>
    </footer>
  );
}
