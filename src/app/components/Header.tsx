"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/agence", label: "Agence" },
    { href: "/services", label: "Services" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white h-[75px] shadow-md mb-4 mx-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo Paradise Numérique"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-bold text-black opacity-90 hover:bg-yellow-300 px-2 py-1 rounded transition"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Bouton devis */}
        <Link href="/devis" className="hidden lg:inline-block">
          <button className="bg-[#2D7FBD] text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Demander un devis
          </button>
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-4 space-y-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block text-sm font-bold text-gray-900 opacity-90 hover:bg-yellow-300 px-2 py-1 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link href="/devis">
            <button className="mt-2 w-full bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Demander un devis
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};
