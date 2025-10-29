import React from "react";
import remove3 from "../../assets/remove3.png";

function Hero() {
  return (
    <section className="relative w-full min-h-[650px] flex flex-col md:flex-row items-center justify-center overflow-hidden bg-gradient-to-b from-black to-white/20">
      {/* Particules étoiles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70 animate-star"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Image de fond mobile */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={remove3}
          alt="Affiche Paradise Numérique"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Texte et bouton */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 md:px-16 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-snug mb-4 drop-shadow-lg">
          Bienvenue chez PARADISE NUMÉRIQUE
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-200 drop-shadow-sm">
          Des solutions digitales modernes pour booster votre présence en ligne
        </h2>

        <button className="mt-4 primary-btn ">
          Prendre rendez-vous
        </button>
      </div>

      {/* Image droite desktop */}
      <div className="hidden md:flex relative w-1/3 h-[500px] md:h-[600px] justify-end">
        <img
          src={remove3}
          alt="Affiche Paradise Numérique"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Keyframes pour étoiles */}
      <style jsx>{`
        @keyframes star {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-800px) translateX(50px) scale(1.5);
            opacity: 0;
          }
        }
        .animate-star {
          animation-name: star;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;
