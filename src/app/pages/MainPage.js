import Navbar from "../components/Navbar";
import "../styles/mainpage.css"
import imgServicio1 from "../../../public/assets/images/imgServicio1.png"
import imgServicio2 from "../../../public/assets/images/imgServicio2.png"
import imgServicio3 from "../../../public/assets/images/imgServicio3.png"

import Image from "next/image";

const MainPage = () => {
    return (<>
        <Navbar/>
        <section className="layoutHome">
            <h1>Invertí a favor del ambiente</h1>
            <h3>Protegemos árboles de ser talados y conservamos  <br/> territorios nativos</h3>
            <button >Comenzá</button>

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

        <section className="tokensHome">
            <h1>Tokens Oxygen</h1>
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

        
        <section className="servicesHome">
            <div className="servicesText"><h3>SERVICIOS</h3>
            <h1>CONSERVÁ LOS <br/>TERRITORIOS NATIVOS</h1>
            <p>Los bosques nativos son uno de los principales  <br/> productores de oxígeno, son esenciales para nosotros y <br/> todos los seres vivos del planeta. Por esto, debemos <br/>proteger los territorios nativos de ser deforestados.</p></div>
            <div className="servicesContainer">
                
                <Image className="service" src={imgServicio1}/>
                
                <Image className="service" src={imgServicio2}/>
                
                <Image className="service" src={imgServicio3}/>
                
            </div>
            
        </section>

        <section className="videoPresentacion">
            <div className="videoHome">

            </div>
            <div className="videoText">
                <h3>NUESTRO MANIFIESTO</h3>
                <h1>CONVERTITE EN CARBONO NEUTRAL, USA OXYGEN</h1>
                <p>Queremos cambiar el esquema de donaciones convencional y así, poder salvar los bosques nativos. ¡Abrimos el mercado para una valoración internacional de terrenos de bosque nativo!</p>
            </div>
        </section>
        
        </>
     
    );
  };
  
  export default MainPage;