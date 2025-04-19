import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Hero />
      <h1 className="text-4xl font-bold">Bienvenue sur Paradise Numérique</h1>
      <p className="mt-4 text-lg">
        Votre partenaire digital au Gabon pour développer l’avenir numérique de votre entreprise.
      </p>
      <Image
        src="/logo.png"
        alt="Logo Paradise Numérique"
        width={150}
        height={150}
        className="mt-8"
      />
    </main>
  );
}
