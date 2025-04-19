import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2D7FBD] text-white pt-10">
      {/* Section d'informations */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
        <div>
          <Image
            src="/logo.png"
            alt="Logo Paradise Numérique"
            width={60}
            height={60}
          />
          <p className="mt-4">
            Votre partenaire digital au Gabon pour développer l’avenir numérique de votre entreprise.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Services</h4>
          <ul className="space-y-1">
            <li>Développement Web</li>
            <li>Design Graphique</li>
            <li>Solutions Digitales</li>
            <li>Marketing Digital</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Entreprise</h4>
          <ul className="space-y-1">
            <li><Link href="/a-propos">À propos</Link></li>
            <li><Link href="/equipe">Équipe</Link></li>
            <li><Link href="/carriere">Carrières</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-[#2D7FBD] py-6 text-center text-sm">
        <p>Contact : Boulevard Triomphal, Libreville, Gabon | +241 77 12 34 56 | contact@paradise-numerique.ga</p>
        <p className="mt-2">© 2025 PARADISE NUMERIQUE. Tous droits réservés.</p>
      </div>
    </footer>
  )}
  
