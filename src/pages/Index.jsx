import React, { useState } from 'react'
import Hero from '../components/Hero/Hero'
import Banner from '../components/Banner/Banner'
import hero from "../assets/hero.jpg"
import internet from "../assets/internet.jpg"
import campagne from "../assets/campagne.png"
import logopro from "../assets/logo pro.png"
import onix from "../assets/onix.jpg"
import ecole241 from "../assets/ecole241.jpg"
import opopo from "../assets/opopo.jpg"
import academy from "../assets/academy.jpg"
import alec from "../assets/alec.jpg"
import stevine from "../assets/stevine.jpg"
import jc from "../assets/jc.jpg"
import homme from "../assets/homme.png"
import homme2 from "../assets/homme2.png"
import homme3 from "../assets/homme3.png"
import artiz from "../assets/artiz.png"
function Index() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const subject = encodeURIComponent("Demande de devis");
    const body = encodeURIComponent(`
Nom complet : ${formData.get("nom")}
Email : ${formData.get("email")}
Entreprise : ${formData.get("entreprise")}
Message : ${formData.get("message")}
    `);
    window.location.href = `mailto:paradisenumerique@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div id="hero" className='overflow-x-hidden bg-white'>

      {/* Section Hero */}
      <Hero />

      {/* Section Services */}
      <section id='services' className="relative w-full overflow-hidden flex flex-col items-center justify-start min-h-[650px]">
        <img src={hero} alt="Services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 bg-blue-900/80 w-full flex flex-col items-center text-white px-4 pt-16 sm:pt-20 pb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center">NOS SERVICES</h1>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl text-center mb-8 sm:mb-10">
            Des solutions digitales complètes pour propulser votre entreprise vers le succès.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl px-2 sm:px-4 md:px-6">
            {[
              {img: internet, title: "Création de site web", text: "Sites web modernes, responsives et optimisés pour une expérience utilisateur exceptionnelle."},
              {img: campagne, title: "Marketing digital", text: "Campagnes ciblées, référencement SEO et gestion des réseaux sociaux."},
              {img: logopro, title: "Design graphique", text: "Création d’identités visuelles fortes et cohérentes pour votre marque."}
            ].map((s, i)=>(
              <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-100 text-center">
                <img src={s.img} alt={s.title} className="w-full h-40 sm:h-48 object-cover" />
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="primary-btn mt-8 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold rounded-xl shadow-md transition"
          >
            Demander un devis
          </button>
        </div>
      </section>

      {/* Formulaire popup */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center">Demande de devis</h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input type="text" name="nom" placeholder="Nom complet" required className="border p-3 rounded-md w-full" />
              <input type="email" name="email" placeholder="Email" required className="border p-3 rounded-md w-full" />
              <input type="text" name="entreprise" placeholder="Nom de l’entreprise" className="border p-3 rounded-md w-full" />
              <textarea name="message" placeholder="Décrivez votre besoin" required className="border p-3 rounded-md w-full h-32"></textarea>
              <button type="submit" className="w-full py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Section À propos */}
      <section id="about" className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={alec} alt="Alec PDG" className="w-full h-auto rounded-xl shadow-xl object-cover" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-900">LE PARTENAIRE DU NUMERIQUE</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Paradise Numérique est une agence spécialisée dans les solutions informatiques et digitales basée à Libreville, Gabon. Nous aidons les entreprises à développer leur présence en ligne, optimiser leurs systèmes et automatiser leurs processus grâce à des technologies innovantes.
              <br /><br />
              Notre équipe combine expertise technique et créativité pour fournir des services adaptés à vos besoins : création de sites web, marketing digital, design graphique, développement mobile et support informatique.
            </p>
          </div>
        </div>
      </section>

      {/* Section Nos Partenaires */}
      <section id="partners" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3  text-blue-900 text-center">NOS PARTENAIRE</h1>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[{img:onix},{img:ecole241},{img:opopo},{img:artiz}].map((p,i)=>(
              <div key={i} className="flex flex-col items-center">
                <img src={p.img} alt={p.name} className="h-16 sm:h-20 object-contain mb-2"/>
                <span className="text-gray-700 font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Notre Team */}
      <section id="team" className="bg-yellow-300 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  text-blue-900 font-bold mb-3 text-center">NOTRE EQUIPE</h1>
          <p className=" text-blue-900 max-w-2xl mx-auto mb-12">Une équipe jeune, créative et passionnée par le digital, dédiée à la réussite de nos clients.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[ 
              {img: alec, name: "Alec NANG", role: "CEO & Développeur back-end"},
              {img: homme, name: "LANDOU RENESCH", role: "Developpeur mobile"},
              {img: stevine, name: "MOUGOULA STEVINE", role: "Marketing & Communication,Developpeur front-end"},
              {img: jc, name: "Jean-Claude SPERANDEZI", role: "Developpeur front-end"},
              {img: homme3, name: "LEE-CHARLY ", role: "VIBE CODEUR"},
              {img: homme2, name: "Isaaq OMAR", role: "Developpeur Back-end"}
            ].map((member,i)=>(
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition transform hover:scale-105">
                <img src={member.img} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-blue-900">{member.name}</h3>
                <p className=" text-blue-900 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Footer / Banner */}
      <section>
        <Banner />
      </section>
      {/* Section Contact avant footer */}
      <section id="contact" className="bg-blue-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center">CONTACTEZ-NOUS</h2>
          <p className="mb-10 text-gray-200 max-w-2xl mx-auto">
            Vous avez un projet ? Parlons-en ensemble ! Notre équipe est à votre écoute pour vous accompagner dans votre transformation digitale.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">📞 Téléphone</h4>
              <p>+241 07 46 92 348</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">📧 Email</h4>
              <p>paradisenumerique@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">📍 Adresse</h4>
              <p>Libreville, Gabon</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Index
