import React from 'react'
import Hero from '../components/Hero/Hero'
import Banner from '../components/Banner/Banner'
import hero from "../assets/hero.jpg"
import internet from "../assets/internet.jpg"
import campagne from "../assets/campagne.png"
import logopro from "../assets/logo pro.png"
import onix from "../assets/onix.jpg"
import ekena from "../assets/ekena.jpg"
import opopo from "../assets/opopo.jpg"
import academy from "../assets/academy.jpg"
import alec from "../assets/alec.jpg"

function Index() {
  return (
    <div className='overflow-x-hidden bg-white'>
      {/* Section Hero */}
      <Hero />

      {/* Section "Ils nous font confiance" */}
      {/* Section Services */}
     <section className="relative w-full  overflow-hidden flex-col items-center justify-start grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
  {/* Image de fond */}
  <img
    src={hero}
    alt="Services"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Masque bleu sombre avec texte centré */}
  <div className="absolute inset-0 bg-blue-900/80 flex flex-col items-center text-white px-4 pt-20">
    <h1 className="text-5xl font-bold mb-3 drop-shadow-lg text-center">
      NOS SERVICES
    </h1>
    <p className="text-lg max-w-2xl text-center mb-10">
      Des solutions digitales complètes pour propulser votre entreprise vers le succès.
    </p>

    {/* Grille des cartes centrée */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center w-full max-w-6xl px-6">

      {/* Carte 1 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col items-center text-center">
        <img
          src={internet}
          alt="Création de site web"
          className="w-full h-40 object-cover"
        />
        <div className="p-5 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center">
            Création de site web
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            Sites web modernes, responsives et optimisés pour une expérience utilisateur exceptionnelle.
          </p>
        </div>
      </div>

      {/* Carte 2 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col items-center text-center">
        <img
          src={campagne}
          alt="Marketing digital"
          className="w-full h-40 object-cover"
        />
        <div className="p-5 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center">
            Marketing digital
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            Campagnes ciblées, référencement SEO et gestion des réseaux sociaux.
          </p>
        </div>
      </div>

      {/* Carte 3 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col items-center text-center">
        <img
          src={logopro}
          alt="Design graphique"
          className="w-full h-40 object-cover"
        />
        <div className="p-5 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center">
            Design graphique
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            Création d’identités visuelles fortes et cohérentes pour votre marque.
          </p>
        </div>
      </div>

      {/* Tu peux ajouter d'autres cartes ici */}
    </div>

    <a href="/services" className="primary-btn mt-12">Découvrir plus</a>
  </div>
</section>
   <section className="w-full bg-gray-50 py-16">
  <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto px-6">
    {/* Image */}
    <div className="flex-shrink-0 w-full md:w-1/3">
      <img
        src={alec}
        alt="Alec PDG"
        className="w-full h-auto rounded-xl shadow-xl object-cover"
      />
    </div>

    {/* Texte */}
    <div className="w-full md:w-2/3 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
        LE PARTENAIRE DU NUMERIQUE
      </h1>
     <p className="text-gray-600 text-base md:text-lg leading-relaxed">
  Paradise Numérique est une agence spécialisée dans les solutions informatiques et digitales basée à Libreville, Gabon. Nous aidons les entreprises à développer leur présence en ligne, optimiser leurs systèmes et automatiser leurs processus grâce à des technologies innovantes.
  <br /><br />
  Notre équipe combine expertise technique et créativité pour fournir des services adaptés à vos besoins : création de sites web, marketing digital, design graphique, développement mobile et support informatique. Nous accompagnons chaque client pour transformer ses idées en projets concrets et rentables.
</p>
    </div>
  </div>
</section>
<section>
  <Banner />
</section>
<div className="bg-yellow-500 w-full shadow-md py-6 flex flex-col items-center justify-center">
  <h2 className="text-white text-2xl font-semibold text-center mb-4">
    Ils nous font confiance
  </h2>

  {/* Logos des partenaires */}
  <div className="flex flex-wrap items-center justify-center gap-8">
    {/* Exemple partenaire */}
    <div className="flex flex-col border-full items-center">
      <img
        src={onix}
        alt="Onixfoot"
        className="h-16 object-contain"
      />
      <span className="text-white mt-2 text-sm">OnixFoot</span>
    </div>

    <div className="flex flex-col  border-full items-center">
      <img
        src={ekena}
        alt="Partenaire 2"
        className="h-16 object-contain"
      />
      <span className="text-white mt-2 text-sm">Ekena</span>
    </div>

    <div className="flex flex-col border-full items-center">
      <img
        src={opopo}
        alt="Partenaire 3"
        className="h-16 object-contain"
      />
      <span className="text-white mt-2  text-sm">OPOPO</span>
    </div>

    <div className="flex flex-col border-full items-center">
      <img
        src={academy}
        alt="Partenaire 4"
        className="h-16 object-contain"
      />
      <span className="text-white mt-2 text-sm">Academy Sport</span>
    </div>

    {/* Ajouter d'autres partenaires ici */}
  </div>
</div>

    </div>
  )
}

export default Index
