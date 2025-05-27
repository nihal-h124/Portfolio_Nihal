import React from 'react'

const links = [
  { link: "Projekte", section: "projects" }
];

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>Über mich</h2>
        <p className='text-white'>
            Ich bin ein leidenschaftlicher Softwareentwickler mit einer soliden Grundlage in der Webentwicklung und einem ausgeprägten Interesse an der Erkundung neuer Technologien. Ich blühe bei Herausforderungen auf und löse gerne komplexe Probleme durch innovative Lösungen. Mein Ziel ist es, wirkungsvolle Anwendungen zu schaffen, die das Benutzererlebnis verbessern und den Geschäftserfolg vorantreiben. Ich bin immer bestrebt, sowohl persönlich als auch beruflich zu lernen und zu wachsen.
        </p>
        <button onClick={() => {
          const section = links.find(link => link.link === "Projekte");
          if (section) {
            const element = document.getElementById(section.section);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }
        }} className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white '>Meine Projekte</button>
    </div>
  )
}

export default AboutMeText