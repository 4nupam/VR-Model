import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

/**
 * Navbar Component
 *
 * A responsive navigation bar component that includes branding, navigation links,
 * authentication actions (Sign In, Create an account), and a mobile drawer toggle.
 */
const Navbar = () => {
  // Local state to control mobile menu visibility
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Toggles the mobile drawer open/close state
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight font-semibold">VirtualR</span>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-orange-500 transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Authentication Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#" className="py-2 px-3 border rounded-md hover:border-orange-500 transition">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-3 rounded-md hover:opacity-90 transition"
            >
              Create an account
            </a>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="lg:hidden md:flex">
            <button onClick={toggleNavbar} aria-label="Toggle Menu">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden min-h-screen">
            <ul className="mb-6">
              {navItems.map((item, index) => (
                <li key={index} className="py-4 text-lg">
                  <a href={item.href} className="hover:text-orange-500 transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 w-full items-center">
              <a href="#" className="py-2 px-4 border rounded-md w-3/4 text-center">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white w-3/4 text-center"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
