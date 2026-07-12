import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar near the top
      if (currentScrollY < 80) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
        setOpen(false); // Close mobile menu while scrolling
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`font-['Playfair_Display'] fixed top-0 left-0 w-full z-50
      bg-white/95 backdrop-blur-md rounded-b-xl border-b border-[#E5E7EB]
      transition-all duration-500 ease-in-out
      ${
        showNavbar ? "translate-y-0 shadow-md" : "-translate-y-full shadow-none"
      }`}
    >
      <div className="w-full px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src="/logo.png"
            alt="Jagdamba Healthcare Logo"
            className="h-14 md:h-20 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-[17px]">
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

        {/* Desktop Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="bg-[#10B981] hover:bg-[#047857] text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[#111827]"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] py-6" : "max-h-0"
        }`}
      >
        <div className="bg-white px-6 border-t border-[#E5E7EB]">
          <ul className="flex flex-col gap-5 font-semibold text-lg pt-6">
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
            className="mt-6 mb-6 block w-full text-center bg-[#10B981] hover:bg-[#047857] text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
