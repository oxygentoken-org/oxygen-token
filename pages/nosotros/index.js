"use client"; // This is a client component 👈🏽
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "../../src/app/styles/nosotros.css";
import "../../src/app/globals.css";
import Image from "next/image";
import ejemploTeam from "../../public/assets/images/ejemploTeam.png";
import logoInstagram from "../../public/assets/logos/logoInstagram.png"
import logoLinkedin from "../../public/assets/logos/logoLinkedin.png"
import logoTwitter from "../../public/assets/logos/logoTwitter.png";
import Head from "next/head";

const Nosotros = () =>{
    return (
        <>
        <Head>
        <title>Oxygen Token</title>
        <meta name="description" content="Oxygen-Token"/>
      </Head>
        <Navbar/>
        <section className="thisIsOxygen">
            <h1>Esto es Oxygen</h1>
            <div className="misionVision">
                <div className="mision">
                    <h2>Mision</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales lectus quis quam venenatis pharetra. Phasellus semper fermentum ornare. Fusce vel sollicitudin dui.</p>
                </div>
                <div className="vision">
                    <h2>Vision</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales lectus quis quam venenatis pharetra. Phasellus semper fermentum ornare. Fusce vel sollicitudin dui.</p>
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
                <h3>¡UNITE A OXYGEN PARA SER PARTE DEL CAMBIO!</h3>
            </div>
            <div className="line"></div>
        </section>

        <section className="tokenomics">
            <h2>Distribución de ingresos</h2>
        </section>
        <Footer/>
        
        </>
    )

}

export default Nosotros