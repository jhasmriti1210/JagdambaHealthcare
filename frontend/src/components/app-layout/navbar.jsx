import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="font-['Playfair_Display'] fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md rounded-b-xl shadow-sm border-b border-[#E5E7EB]">
      <div className="w-full px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Jagdamba Healthcare Logo"
            className="h-14 md:h-20 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="font-['Playfair_Display'] hidden md:flex items-center gap-8 font-semibold text-[17px]">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition duration-300 ${
                    isActive
                      ? "text-[#10B981]"
                      : "text-[#111827] hover:text-[#10B981]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="bg-[#10B981] hover:bg-[#047857] text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[#111827]"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 py-6 shadow-lg border-t border-[#E5E7EB]">
          <ul className="flex flex-col gap-5 font-semibold text-lg">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `transition duration-300 ${
                      isActive
                        ? "text-[#10B981]"
                        : "text-[#111827] hover:text-[#10B981]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-block w-full text-center bg-[#10B981] hover:bg-[#047857] text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
