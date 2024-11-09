import { useState } from "react";
import './Navbar.css';
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import owl from '../ima/buho2.png';

function Navbar2() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="div-nav">
      <nav className="nav w-100">
        <div className="w-100">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-3 w-100 justify-between">
              {/* logo */}
              <div>
                <a className="block text-teal-600" href="#">
                  <span className="sr-only">Home</span>
                  <img className="h-8 w-auto" src={owl} alt="" />
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">
                <li>
                  <Link to="/" className="text-white transition no-underline"> Inicio </Link>
                </li>
                <li>
                  <Link to="/horario" className="text-white transition no-underline"> Horarios </Link>
                </li>
                <li>
                  <Link to="/calendario" className="text-white transition no-underline"> Calendario </Link>
                </li>
                <li>
                  <Link to="/reseña" className="text-white transition no-underline"> Reseña Historica </Link>
                </li>
                <li>
                  <Link to="/reglamento-escolar" className="text-white transition no-underline"> Reglamento Escolar </Link>
                </li>
                <li>
                  <Link to="/derechos-derechos" className="text-white transition no-underline"> Deberes y Derechos del Estudiante </Link>
                </li>
                <li>
                  <Link to="/ubicacion" className="text-white transition no-underline"> Ubicación </Link>
                </li>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)} style={{ color: "white" }}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8" style={{ background: '#6F2C3E', color: 'white', width: '100%', height: '100%' }}>
            {/* Close button */}
            <div className="flex justify-between items-center p-4">
              <h2 className="text-lg font-bold"></h2>
              <button onClick={() => setToggleMenu(false)} style={{ color: "white" }}>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-8 font-bold tracking-wider pt-3">
              <li>
                <Link to="/" className="text-white transition no-underline"> Inicio </Link>
              </li>
              <li>
                <Link to="/horario" className="text-white transition no-underline"> Horarios </Link>
              </li>
              <li>
                <Link to="/calendario" className="text-white transition no-underline"> Calendario </Link>
              </li>
              <li>
                <Link to="/reseña" className="text-white transition no-underline"> Reseña Historica </Link>
              </li>
              <li>
                <Link to="/reglamento-escolar" className="text-white transition no-underline"> Reglamento Escolar </Link>
              </li>
              <li>
                <Link to="/derechos-derechos" className="text-white transition no-underline"> Deberes y Derechos del Estudiante </Link>
              </li>
              <li>
                <Link to="/ubicacion" className="text-white transition no-underline"> Ubicación </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
