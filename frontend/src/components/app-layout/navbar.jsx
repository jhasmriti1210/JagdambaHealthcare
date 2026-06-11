import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f7f7f7] rounded-b-xl shadow-sm">
      <div className="w-full px-4 md:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="TRIVEXA Logo"
            className="h-12 md:h-16 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-[17px]">
          <li>
            <Link
              to="/"
              className="text-[#1DA1F2] hover:text-[#1DA1F2] transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-black hover:text-[#1DA1F2] transition"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className="text-black hover:text-[#1DA1F2] transition"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              className="text-black hover:text-[#1DA1F2] transition"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-black hover:text-[#1DA1F2] transition"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077B5] text-5xl hover:scale-105 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-black"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 py-5 shadow-lg">
          <ul className="flex flex-col gap-5 font-semibold text-lg">
            <li>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-[#1DA1F2]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="hover:text-[#1DA1F2]"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="hover:text-[#1DA1F2]"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                onClick={() => setOpen(false)}
                className="hover:text-[#1DA1F2]"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="hover:text-[#1DA1F2]"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-5 mt-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-[#0077B5] text-4xl" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
