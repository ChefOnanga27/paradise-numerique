import React, { useState, useEffect } from 'react'
import affiches from "../../assets/affiches.png"

function Hero() {
  const [showFirstText, setShowFirstText] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstText(prev => !prev)
    }, 4000) // changement toutes les 4 secondes
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="h-[70vh] mx-4 flex items-center justify-center relative overflow-hidden  md:grid-cols-2 min-h-[650px]">
        <div className='w-full h-full animate-pulse'>
      <img
        src={affiches}
        alt="Visuel d'affiche"
        className="w-full h-full object-fit"
      />
      </div>
      <div className="text-8xl ml-8 font-bold text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] relative h-[12rem] overflow-hidden">
        <div
          className={`transition-transform duration-1000 ${
            showFirstText ? 'translate-y-0' : '-translate-y-[6rem]'
          }`}
        >
          <h1>
            Bienvenue chez <br />
            <span className="text-blue-500"> PARADISE NUMÉRIQUE</span>
          </h1>
          <h1>
            Notre agence qui transforme vos idées<br />
            et fait vivre vos entreprises
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
