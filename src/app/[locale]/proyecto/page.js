"use client";
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import "../../../styles/proyecto.css"
import "../../[locale]/globals.css";
import { useTranslations } from "next-intl";


const Proyecto = () =>{
    const projectIdioms = useTranslations('Project')
    return (
        <><Navbar/>
        <section className="proyectoMapa">
            <h1>{projectIdioms('title-1')} <br/>{projectIdioms('title-2')}</h1>
        </section>
        <Footer/>
        </>)
    
}

export default Proyecto;