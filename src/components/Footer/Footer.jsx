import React from 'react'
import logo from "../../assets/logo.png"

const FooterMenu = [
  { id:1, title:"Accueil", path:"/" },
  { id:2, title:"Services", path:"#services" },
  { id:3, title:"A propos", path:"#about" },
  { id:4, title:"Notre Team", path:"#team" },
  { id:5, title:"Contact", path:"#contact" },
];

function Footer() {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Logo centré */}
        <img src={logo} alt="logo" className="h-8 w-auto" />

        {/* Menu centré */}
        <ul className="flex items-center gap-6">
          {FooterMenu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.path}
                className="relative block py-2 px-3 hover:text-blue-500 group"
              >
                {menu.title}
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
