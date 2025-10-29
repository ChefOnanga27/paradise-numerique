import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import logo from "../../assets/logo.png";

const NavbarMenu = [
  { id: 1, title: "Accueil", path: "/" },
  { id: 2, title: "Services", path: "#services" },
  { id: 3, title: "A propos", path: "#about" },
  { id: 4, title: "Notre Team", path: "#team" },
  { id: 5, title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b border-gray-200 shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-blue-500 relative group"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
          <button className="primary-btn">Demander un devis</button>
        </div>

        {/* Menu Mobile Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Sidebar Mobile */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <img src={logo} alt="logo" className="h-10" />
          <button onClick={toggleMenu}>
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col items-start px-6 py-6 space-y-6">
          {NavbarMenu.map((menu) => (
            <li key={menu.id} className="w-full">
              <a
                href={menu.path}
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 text-lg font-medium text-gray-700 hover:text-blue-500 transition"
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-6 mt-6">
          <button className="primary-btn w-full">Demander un devis</button>
        </div>
      </div>

      {/* Overlay sombre (pour fermer la sidebar) */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
