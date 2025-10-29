import React from 'react'
import logo from "../../assets/logo.png"

const NavbarMenu = [
  { id:1, title:"Accueil", path:"/" },
  { id:2, title:"Services", path:"#services" },
  { id:3, title:"A propos", path:"#about" },
  { id:4, title:"Notre Team", path:"#team" },
  { id:5, title:"Contact", path:"#contact" },
];

const Navbar = () => {
  return (
    <nav className='border-b border-gray-200 shadow-md bg-white sticky top-0 z-50 mb-1'>
      <div className='center p-4 sm:p-6 lg:p-6 xl:p-2 2xl:p-6 py-10 flex justify-between items-center'>
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className='h-10 w-18 flex'/>
        </div>

        {/* Menu */}
        <div className='hidden lg:block'>
          <ul className='flex items-center gap-4'>
            {
              NavbarMenu.map((menu)=> (
                <li key={menu.id}>
                  <a href={menu.path}
                     className='inline-block py-2 px-3 hover:text-blue-500 relative group'>
                    <div className='w-2 h-2 bg-blue-300 absolute left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                    {menu.title}
                  </a>
                </li>
              ))
            }
            <button className='primary-btn'>Demander un devis</button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
