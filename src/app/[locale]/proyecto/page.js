"use client";

//Components
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";

//Styles
import "../../../styles/proyecto.css"
import "../../[locale]/globals.css";

//Files
import mapArg from "../../../../public/assets/images/mapaArg.png"

import { useTranslations } from "next-intl";
import Image from "next/image.js";


const Proyecto = () =>{
    const projectIdioms = useTranslations('Project')
    return (
        <><Navbar/>
        <section className="project">
            <div className="projectHeader">
                <h1>{projectIdioms('title-1')} <br/>{projectIdioms('title-2')}</h1>
                <a href="#map">{projectIdioms('button-projects')}</a>
            </div>
            <div className="projectMap" id="map">
                <Image src={mapArg} alt="map of argentina" className="mapArg"/>
                <div className="laFlorencia"></div>

            </div>
        </section>
        <Footer/>
        </>)
    
}

export default Proyecto;