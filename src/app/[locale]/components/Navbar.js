"use client";
import "../../../styles/navbar.css";
import { useState } from "react";
import logoNav from "../../../../public/assets/images/logo.png"
import Image from 'next/image';
import { useTranslations } from "next-intl";
import globeLogo from "../../../../public/assets/logos/globeLogo.png";
import logoArg from "../../../../public/assets/logos/logoArg.png";
import logoUs from "../../../../public/assets/logos/logoUs.png";


function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navIdioms = useTranslations('Navbar');

  return (
    <nav className="navigation">
      <Image src={logoNav} alt="Oxygen" className="brand-name" />
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          
        <li>
            <a href="/">Home</a>
          </li>
          
          <li>
            <a href="/nosotros">{navIdioms('us')}</a>
          </li>
          <li>
            <a href="/proyecto"> {navIdioms('project')} </a>
          </li>
          
          <li>
            <a href="/comprar" style={{color: "var(--strong--green"}} >{navIdioms('buy')}</a>
          </li>

          <li className="dropdown">
            <button className="dropbtn">
              <Image src={globeLogo} alt="logoMundo" className="globoImg"/>

              
            </button>
            <div className="dropdown-content">
              <a href="/es"><Image src={logoArg} alt="bandera argentina" className="flagImg"/></a>
              <a href="/en"><Image src={logoUs} alt="bandera usa" className="flagImg"/></a>
            </div>

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
