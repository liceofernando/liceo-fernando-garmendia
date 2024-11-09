import React from 'react'
import { Link } from 'react-router-dom';
import owl from '../ima/buho2.png';

const Navbar = () => {
  return (
    <div>
                <header className="bg-gray-800" style={{background: '#6F2C3E'}}>
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12 ">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <img className="h-8 w-auto" src={owl} alt="" />
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center mb-0 gap-6 text-base text-center " >
            <li>
              <Link to="/" className="text-white transition no-underline " href="#"> Inicio </Link>
            </li>

            <li>
              <Link to="/horario" className="text-white transition no-underline " href="#"> Horarios </Link>
            </li>

            <li>
              <Link to="/calendario" className="text-white transition no-underline " href="#"> Calendario </Link>
            </li>

            <li>
              <Link to="/reseña" className="text-white transition no-underline " href="#"> Reseña Historica </Link>
            </li>

            <li>
              <Link to="/reglamento-escolar" className="text-white transition no-underline " href="#"> Reglamento Escolar </Link>
            </li>

            <li>
              <Link to="/derechos-derechos" className="text-white transition no-underline " href="#"> Deberes y Derechos del Estudiante </Link>
            </li>

            <li>
              <Link to="/ubicacion" className="text-white transition no-underline " href="#"> Ubicación </Link>
            </li>
          </ul>
        </nav>

        
       
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navbar