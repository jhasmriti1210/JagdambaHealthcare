import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaHospital,
  FaBuilding,
  FaClipboardList,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
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
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Products", to: "/products" },
    { label: "Contact Us", to: "/contact" },
  ];

  const productLinks = [
    { label: "Cardiology", to: "/products/cardiology" },
    { label: "Cardiac Equipment", to: "/products/cardiac-equipment" },
    { label: "Cardiac Surgery", to: "/products/cardiac-surgery" },
    { label: "Surgical Disposables", to: "/products/surgical-disposables" },
    { label: "Critical Care", to: "/products/critical-care" },
  ];

  const institutional = [
    { icon: FaHospital, title: "Govt. Hospitals" },
    { icon: FaBuilding, title: "Govt. Departments" },
    { icon: FaClipboardList, title: "Bulk & Tenders" },
  ];

  const headingClass =
    "text-xs font-semibold uppercase tracking-[0.18em] text-[#111827] mb-3";

  const linkClass =
    "group inline-flex items-center gap-2 text-sm text-[#4B5563] hover:text-[#10B981] transition";

  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E5E7EB] text-[#111827]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-7">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] gap-x-10 gap-y-6">
          {/* Company */}
          <div>
            <div className="inline-flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Jagdamba Healthcare"
                className="h-9 object-contain"
              />
              <p className="font-['Playfair_Display'] text-[#047857] text-sm font-semibold leading-snug">
                Your Lifeline in
                <br />
                Cardiac Care
              </p>
            </div>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#4B5563]">
              Trusted supplier of cardiac and critical care solutions to
              hospitals, clinics and government institutions across India.
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
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
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={headingClass}>Company</h4>
            <ul className="space-y-1.5">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className={headingClass}>Products</h4>
            <ul className="space-y-1.5">
              {productLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={headingClass}>Get in Touch</h4>

            <ul className="space-y-2.5 text-sm text-[#4B5563]">
              <li className="flex gap-3 leading-relaxed">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#10B981]" />
                <span>
                  First Floor, Shop No. 1 & 2, Hari Bihar Colony, near Mani
                  International Hotel, opposite Krishi Bhawan, Mithapur, Patna,
                  Bihar – 800001
                </span>
              </li>

              <li className="flex gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-[#10B981]" />
                <span className="flex flex-col">
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
                </span>
              </li>

              <li className="flex gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-[#10B981]" />
                <a
                  href="mailto:info@jagdambahealthcare.com"
                  className="break-all hover:text-[#10B981] transition"
                >
                  info@jagdambahealthcare.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Follow Us */}
      <div className="border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col items-center gap-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#111827]">
            Follow Us On
          </h4>

          <div className="flex gap-3">
            {socials.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-white text-[#047857] flex items-center justify-center shadow-sm hover:bg-[#10B981] hover:border-[#10B981] hover:text-white hover:-translate-y-0.5 transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#6B7280]">
          <p className="text-center md:text-left">
            © {currentYear} Jagdamba Healthcare. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Developed by Web Development Team
          </p>
        </div>
      </div>
    </footer>
  );
}
