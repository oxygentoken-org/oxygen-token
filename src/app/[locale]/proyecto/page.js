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
        <section className="project">
            <div className="projectHeader">
                <h1>{projectIdioms('title-1')} <br/>{projectIdioms('title-2')}</h1>
                <button className>{projectIdioms('button-projects')}</button>
            </div>
            <div className="projectMap">

            </div>
        </section>
        <Footer/>
        </>)
    
}

export default Proyecto;