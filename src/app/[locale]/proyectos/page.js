"use client";

//Components
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import Project from "../components/Project/Project.js";

//Styles
import "../../../styles/proyecto.css"
import "../../[locale]/globals.css";

//Files
import mapArg from "../../../../public/assets/images/mapaArg.png"
import laFlorenciaPic from  "../../../../public/assets/images/laFlorencia.jpg"

import { useTranslations } from "next-intl";
import Image from "next/image.js";


const Proyectos = () =>{
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
                <div className="projectList">
                <Project 
                name="La Florencia"
                picture={laFlorenciaPic}
                description={projectIdioms('laFlorencia-text')}
                seeMap={projectIdioms('see-map')}
                mapLink="https://earth.google.com/web/@-24.20128471,-61.90184657,178.65665461a,50698.09743483d,30y,0h,0t,0r/data=OgMKATA"/>
                <Project 
                name="La Florencia"
                picture={laFlorenciaPic}
                description={projectIdioms('laFlorencia-text')}
                seeMap={projectIdioms('see-map')}
                mapLink="https://earth.google.com/web/@-24.20128471,-61.90184657,178.65665461a,50698.09743483d,30y,0h,0t,0r/data=OgMKATA"/>
                </div>
                

            </div>
        </section>
        <Footer/>
        </>)
    
}

export default Proyectos;