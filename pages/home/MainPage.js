"use client"; // This is a client component 👈🏽

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "../../src/app/styles/mainpage.css"
import imgServicio1 from "../../public/assets/images/imgServicio1.png"
import imgServicio2 from "../../public/assets/images/imgServicio2.png"
import imgServicio3 from "../../public/assets/images/imgServicio3.png"
import { useState } from "react";
import Image from "next/image";
import "../../src/app/globals.css";
import CardService from "@/app/components/CardService";
import Head from "next/head";


const MainPage = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
    return (<>
        <Head>
        <title>JOLA</title>
        <meta name="description" content="Oxygen-Token"/>
      
      </Head>
        <Navbar/>
        <section className="layoutHome">
            <h1>Invertí a favor del ambiente</h1>
            <h3>Protegemos árboles de ser talados y conservamos  <br/> territorios nativos</h3>
            <button><a href="#servicios"> Comenzá </a></button>

            <div className="dataBoard">
                <div className="dataContent">
                <p className="dataNumber"><strong>133.150</strong></p>
                <p>hectareas <br/> de bosque</p>
                </div>
                <div className="dataBoardLine"></div>
                <div className="dataContent">
                <p className="dataNumber"><strong>190.214</strong></p>
                <p>estadios <br/> de fútbol</p>
                </div>
                <div className="dataBoardLine"></div>
                <div className="dataContent">
                <p className="dataNumber"><strong>27.548</strong></p>
                <p>tn CO2 <br/> compensadas</p>
                </div>
                
            </div>
        </section>
        
        <section className="servicesHome" id="servicios">
            <div className="servicesText"><h3>SERVICIOS</h3>
            <h1>CONSERVÁ LOS <br/>TERRITORIOS NATIVOS</h1>
            <p>Los bosques nativos son uno de los principales  <br/> productores de oxígeno, son esenciales para nosotros y <br/> todos los seres vivos del planeta. Por esto, debemos <br/>proteger los territorios nativos de ser deforestados.</p></div>
            <div className="servicesContainer" >
                {/*<CardService imagen= "../../public/assets/images/imgServicio1.png" texto="descripcion"/>*/}
                <div className={`card ${isFlipped ? "flipped" : ""}`} onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
                <Image  className="serviceFront" src={imgServicio1}/>
                <div className="serviceBack">
                    <p>Texto</p>
                </div>
                </div>
                
                <div className={`card ${isFlipped ? "flipped" : ""}`} onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
                <Image  className="serviceFront" src={imgServicio2}/>
                <div className="serviceBack">
                    <p>Texto</p>
                </div>
                </div>
                
                <div className={`card ${isFlipped ? "flipped" : ""}`} onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
                <Image  className="serviceFront" src={imgServicio3}/>
                <div className="serviceBack">
                    <p>Texto</p>
                </div>
                </div>
                
               
            </div>


            
            
        </section>
        <section className="tokensHome">
            <h1> Oxygen Token</h1>
            <div className="tokenContainer">
                <div className="token"></div>
                <div className="token"></div>
                <div className="token"></div>
                <div className="token"></div>

            </div>
            <div className="tokensProgress">
                <div className="progressLine"></div>
                <p> Objetivo final: <br/> 000 hectareas</p>
            </div>
            <div className="line"></div>

        </section>



        <section className="videoPresentacion">
            <div className="videoHome">

            </div>
            <div className="videoText">
                <h3>NUESTRO MANIFIESTO</h3>
                <h1>CONVERTITE EN CARBONO <br/> NEUTRAL, USA OXYGEN</h1>
                <p>Queremos cambiar el esquema de donaciones convencional <br/>y así, poder salvar los bosques nativos. ¡Abrimos el mercado <br/> para una valoración internacional de terrenos de bosque nativo!</p>
            </div>
        </section>

        <section className="alianzasSeccion">
            <h3>ALIANZAS</h3>
            <div className="alianzasContainer">
                <div className="alianza"></div>
                <div className="alianza"></div>
                <div className="alianza"></div>
            </div>
        </section>

        <section className="phrase">
            <h2>"La crisis climática esta causada por nosotros y las soluciones deben venir <br/> de nosotros. Tenemos las herramientas:la tecnología está de nuestro <br/> lado"</h2> <p>- Antonio Guterres, Secretario General de la ONU</p>
            <button>Comenzar</button>
        </section>

        <Footer/>
        
        </>
     
    );
  };
  
  export default MainPage;