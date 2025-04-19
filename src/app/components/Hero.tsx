import React from "react";

export default function Hero() {
  return (
    <div
      className="w-full h-[540px] relative flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: 'url("/hero-bg1.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0" />

      {/* Contenu */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Création de sites web <br /> RAPIDE & SÉCURISÉ
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 radius-10 text-lg font-semibold shadow-lg">
          Demander un devis
        </button>
      </div>
    </div>
  );
}
