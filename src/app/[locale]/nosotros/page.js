"use client";
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import "../../../styles/nosotros.css"
import "../../[locale]/globals.css"
import Image from "next/image";
import ejemploTeam from "../../../../public/assets/images/ejemploTeam.png";
import logoInstagram from "../../../../public/assets/logos/logoInstagram.png"
import logoLinkedin from "../../../../public/assets/logos/logoLinkedin.png"
import logoTwitter from "../../../../public/assets/logos/logoTwitter.png";
import Head from "next/head";
import { useTranslations } from "next-intl";


const Nosotros = () =>{
    const usIdioms = useTranslations('AboutUs');

    return (
        <>
        <Head>
        <title>Oxygen Token</title>
        <meta name="description" content="Oxygen-Token"/>
      </Head>
        <Navbar/>
        <section className="thisIsOxygen">
            <h1>{usIdioms('title')}</h1>
            <div className="misionVision">
                <div className="mision">
                    <h2>{usIdioms('mision-title')}</h2>
                    <p>{usIdioms('mision-text')}</p>
                </div>
                <div className="vision">
                    <h2>{usIdioms('vision-title')}</h2>
                    <p>{usIdioms('vision-text')}</p>
                </div>
            </div>
        </section>

        <section className="team">
            <h2>Oxygen Team</h2>
            <div className="teamCards">
                <div className="teamMember">
                    <Image className="teamMemberPicture" src={ejemploTeam} alt="imagen miembro del equipo"></Image>
                    <div className="teamMemberDescription">
                        <h3>Nombre Apellido</h3>
                        <h4>Rol</h4>
                        <p>Descripción cortita</p>
                        <div className="teamMemberContact">
                        <Image className="logoContact" src={logoLinkedin} alt="Linkedin"></Image>
                            <Image className="logoContact" src={logoInstagram} alt="Instagram"></Image>
                            <Image className="logoContact" src={logoTwitter} alt="Twitter"></Image>
                            
                           
                        </div>
                    </div>
                </div>
                <div className="teamMember">
                    <Image className="teamMemberPicture" src={ejemploTeam} alt="imagen miembro del equipo"></Image>
                    <div className="teamMemberDescription">
                        <h3>Nombre Apellido</h3>
                        <h4>Rol</h4>
                        <p>Descripción cortita</p>
                        <div className="teamMemberContact">
                        <Image className="logoContact" src={logoLinkedin} alt="Linkedin"></Image>
                            <Image className="logoContact" src={logoInstagram} alt="Instagram"></Image>
                            <Image className="logoContact" src={logoTwitter} alt="Twitter"></Image>
                        </div>
                    </div>
                </div>
                <div className="teamMember">
                    <Image className="teamMemberPicture" src={ejemploTeam} alt="imagen miembro del equipo"></Image>
                    <div className="teamMemberDescription">
                        <h3>Nombre Apellido</h3>
                        <h4>Rol</h4>
                        <p>Descripción cortita</p>
                        <div className="teamMemberContact">
                        <Image className="logoContact" src={logoLinkedin} alt="Linkedin"></Image>
                            <Image className="logoContact" src={logoInstagram} alt="Instagram"></Image>
                            <Image className="logoContact" src={logoTwitter} alt="Twitter"></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className="joinUs">
                <h3>{usIdioms('joinus-title')}</h3>
            </div>
            <div className="line"></div>
        </section>

        <section className="tokenomics">
            <h2>{usIdioms('tokenomics-title')}</h2>
        </section>
        <Footer/>
        
        </>
    )

}

export default Nosotros