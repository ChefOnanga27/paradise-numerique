import React from "react";
import logo from "../../assets/logo.png";

const FooterMenu = [
  { id: 1, title: "Accueil", path: "/" },
  { id: 2, title: "Services", path: "#services" },
  { id: 3, title: "À propos", path: "#about" },
  { id: 4, title: "Notre Team", path: "#team" },
  { id: 5, title: "Contact", path: "#contact" },
  { id: 6, title: "Politique de confidentialité", path: "#privacy" },
];

function Footer() {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Logo centré */}
        <img src={logo} alt="logo" className="h-10 w-auto" />

        {/* Menu centré */}
        <ul className="flex flex-wrap justify-center items-center gap-6 text-gray-700">
          {FooterMenu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.path}
                className="relative block py-2 px-3 hover:text-blue-500 group transition"
              >
                {menu.title}
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Email contact */}
        <p className="text-gray-600 text-sm mt-2">
          📧 Contact :{" "}
          <a
            href="mailto:paradisenumerique@gmail.com"
            className="text-blue-600 hover:underline"
          >
            paradisenumerique@gmail.com
          </a>
        </p>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Paradise Numérique. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
