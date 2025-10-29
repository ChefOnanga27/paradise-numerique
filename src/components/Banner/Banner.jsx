import React from "react"
import remove2 from "../../assets/remove2.png"
import remove from "../../assets/remove.png"
import remove4 from "../../assets/remove4.png"
import remove3 from "../../assets/remove3.png"
import remove5 from "../../assets/remove5.png"
import remove6 from "../../assets/remove6.png"

function Banner() {
  const Banniere = [
    { id: 1, image: remove, name: "Site E-commerce OnixFoot", link: "https://onixfoot.com" },
    { id: 2, image: remove2, name: "Plateforme Ekena Beauty", link: "https://ekenabeauty.com" },
    { id: 3, image: remove3, name: "Application OPOPO Livraison", link: "https://opopo.app" },
    { id: 4, image: remove4, name: "Site Academy Sport", link: "https://academysport.com" },
    { id: 5, image: remove5, name: "Système de Gestion Paradise Pro", link: "https://paradisepro.com" },
    { id: 6, image: remove6, name: "Portfolio Alec Dev", link: "https://alecdev.com" },
  ]

  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-12">
          NOS REALISATIONS
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-center">
          {Banniere.map((item) => (
            <li key={item.id} className="flex flex-col items-center text-center bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-contain mb-4 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.name}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-blue-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Voir le site
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Banner
