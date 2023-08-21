"use client"; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import TokenEmitido from "./TokenEmitido";
import "../../../styles/mainpage.css"
import imgServicio1 from "../../../../public/assets/images/imgServicio1.png"
import imgServicio2 from "../../../../public/assets/images/imgServicio2.png"
import imgServicio3 from "../../../../public/assets/images/imgServicio3.png"
import { useState, useEffect} from "react";
import Image from "next/image";
import "../../[locale]/globals.css"
import CardService from "./CardService";
import bdbLogo from "../../../../public/assets/logos/BdBLogo.png";
import chronosPayLogo from "../../../../public/assets/logos/chronosPayLogo.png"
import finguruLogo from "../../../../public/assets/logos/finguruLogo.png"
import tokenIcon from "../../../../public/assets/logos/logoQToken.png"
import logoTokenOM from "../../../../public/assets/logos/logoTokenOM.png";
import logoTokenOC from "../../../../public/assets/logos/logoTokenOC.png";
import SliderComp from "./SliderComp";
import ReactPlayer from "react-player";
import DataContent from "./DataContent";
import Head from "next/head";
import logoGeneral from "../../../../public/assets/images/logo.png";
import treeLoading from "../../../../public/assets/logos/treeLogoLoading.png"
import TokensNFT from "./TokensNFT";
import { useTranslations } from "next-intl";

const MainPage = () => {

  /*Traducciones*/
  const layout = useTranslations('Layout');
  const services = useTranslations('Services');
  const issuedtokens= useTranslations('issuedTokens');
  const hometokens = useTranslations('homeTokens');
  const videointro = useTranslations('videoIntro');
  const partnerships = useTranslations('partnerships');
  const phrase = useTranslations('phrase');

  /*Animacion inicial*/

    const [isOnHome, setIsOnHome] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const [showLoading, setShowLoading] = useState(false); 
   

    const handleHidePrevHome = () => {
      setShowAnimation(true);
      setShowLoading(true); 
      setTimeout(() => {
        setIsOnHome(true);
        setShowAnimation(false);
        setShowLoading(false);
      }, 2000);
    };

    


  /*Resize video*/
  useEffect(() => {
    const handleResizeVideo = () => {
      const videoElement = document.querySelector('.videoHome');
      if (videoElement) {
        const width = videoElement.offsetWidth;
        const height = (width / 16) * 9; // Proporción 16:9, ajusta según tus necesidades
        videoElement.style.height = `${height}px`;
      }
    };

    window.addEventListener('resize', handleResizeVideo);
    return () => {
      window.removeEventListener('resize', handleResizeVideo);
    };
  }, []);

  /*Mobile control para sliders*/
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(()=> {
      const mobileMediaQuery = window.matchMedia("(max-width: 650px)");

      //Actualiza el estado
      const handleMediaQueryChange = (event) =>{
        setIsMobileView(event.matches);
      };

      handleMediaQueryChange(mobileMediaQuery); //Inicialmente
      mobileMediaQuery.addEventListener('change', handleMediaQueryChange);

      return() =>{
        mobileMediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    },[]);


const tokensEmitidos = [
    {
      logo: tokenIcon,
      title: issuedtokens('issued-token-1-title'),
      text: issuedtokens('issued-token-1-text'),
    },
    {
      logo: logoTokenOM,
      title: issuedtokens('issued-token-2-title'),
      text: issuedtokens('issued-token-2-text'),
    },
    {
      logo: logoTokenOC,
      title: issuedtokens('issued-token-3-title'),
      text: issuedtokens('issued-token-3-text'),
    },
  ];

  const serviceCards =[
    {
      number: "1.",
      image: imgServicio1,
      title:services('service-card-1-title'),
      text:services('service-card-1-text'),
      link : "https://www.mihuelladecarbono.app/quiz",
    },
    {
      number: "2.",
      image: imgServicio2,
      title:services('service-card-2-title'),
      text:services('service-card-2-text'),
      link : "/",
    },
    {
      number: "3.",
      image: imgServicio3,
      title:services('service-card-3-title'),
      text:services('service-card-3-text'),
      link : "/",
    },
    
  ];
  const dataObject = [
    {
      number: "133.150",
      text: layout('data-content-1-mobile'),
    },
    {
      number: "190.214",
      text: layout('data-content-2-mobile'),
    },
    {
      number: "27.548",
      text: layout('data-content-3-mobile'),
    },
  ]

  
  
  
  return (<>
        
        <Head>
      <title>Oxygen Token</title>
      <meta name='description' content='Reduci tus emisiones de CO2 con Oxygen'/>
      <link rel='icon' href='./favicon.ico'/>
      
      </Head> 
        {!isOnHome && (
        <section className="prevHome">
          {showAnimation && <div className="expandAnimation" />}
          {showLoading && (<div className="loadingCircle">
        
          <Image src={treeLoading} alt="Loading Tree" className="loadingTree"/>
          </div>)}
          <Image className="prevHomeLogo" src={logoGeneral} alt="logo Oxygen"></Image>
          <div className="prevHomeContainer">
            <h1>{layout('prevTitle')}</h1>
            <button onClick={handleHidePrevHome} >{layout('prevButton')}</button>
          </div>
        </section>
      )}
      {isOnHome && (<>
        <Navbar/>
        <section className="layoutHome">
          <ReactPlayer
                url="https://www.youtube.com/watch?v=_R8vjDYrg68&ab_channel=OxygenToken"
                className="videoLayout"
                playing= {true}
                loop ={true}
                muted/>
            <h1>{layout('title')}</h1>
            <h3>{layout('subtitle-1')}  <br/> {layout('subtitle-2')}</h3>
            <button className="buttonHome"><a href="#servicios">{layout('button')}</a></button>

            <div className="dataBoard">
              {isMobileView ? (
              <SliderComp automatico = {true} estilo="2" proyectos={dataObject.map((data, index) => (
              <DataContent
              key={index}
              number={data.number}
              text={data.text}
              />
              ))} />
              ) : (
                <>
                <div className="dataContent">
                <p className="dataNumber"><strong>133.150</strong></p>
                <p>{layout('data-content-1')} <br/>{layout('data-content-11')}</p>
                </div>
                <div className="dataBoardLine"></div>
                <div className="dataContent">
                <p className="dataNumber"><strong>190.214</strong></p>
                <p>{layout('data-content-2')} <br/>{layout('data-content-21')} </p>
                </div>
                <div className="dataBoardLine"></div>
                <div className="dataContent">
                <p className="dataNumber"><strong>27.548</strong></p>
                <p>tn CO2 <br/> {layout('data-content-3')}</p>
                </div>
                </>
                
           
      )}
    </div>           
        </section>
        
        <section className="servicesHome" id="servicios">
            <div className="servicesText"><h3>{services('title')}</h3>
            <h1>{services('subtitle-1')}<br/>{services('subtitle-2')}</h1>
            <p>{services('text-1')}  <br/> {services('text-2')} <br/> {services('text-3')} <br/>{services('text-4')}</p></div>
            <div className="servicesContainer" >
            {isMobileView ? (
        <SliderComp automatico = {true} estilo="2" proyectos={serviceCards.map((card, index) => (
          <CardService
            key={index}
            number={card.number}
            image={card.image}
            title={card.title}
            text={card.text}
            link={card.link}
          />
        ))} />
      ) : (
        serviceCards.map((card, index) => (
          <CardService
            key={index}
            number={card.number}
            image={card.image}
            title={card.title}
            text={card.text}
            link={card.link}
          />
        ))
      )}    
      </div>


            
            
        </section>

        <section className="tokensEmitidos">
            <h2>{issuedtokens('title')}</h2>
            <h1>{issuedtokens('subtitle-1')} <br/> {issuedtokens('subtitle-2')}</h1>
            <div className="tokenContainer">
      {isMobileView ? (
        <SliderComp proyectos={tokensEmitidos.map((token, index) => (
          <TokenEmitido
            key={index}
            logo={token.logo}
            title={token.title}
            text={token.text}
          />
        ))} />
      ) : (
        tokensEmitidos.map((token, index) => (
          <TokenEmitido
            key={index}
            logo={token.logo}
            title={token.title}
            text={token.text}
          />
        ))
      )}
    </div>
 
        </section>
        <section className="tokensHome">
            <h1> Oxygen Token</h1>
            
            {isMobileView ? (
        <SliderComp proyectos={[<TokensNFT/>, <TokensNFT/>, <TokensNFT/>, <TokensNFT/>]} />
      ) : (
        <div className="tokenContainer">
        <TokensNFT/>
        <TokensNFT/>
        <TokensNFT/>
        <TokensNFT/>
        </div>
      )}
    
            <div className="tokensProgress">
                <div className="progressLine"></div>
                <p> {hometokens('text-progress-1')} <br/> {hometokens('text-progress-2')}</p>
            </div>
            <div className="line"></div>

        </section>



        <section className="videoPresentacion" >
            
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ZLd7lNXcinI"
                className="videoHome"
                controls
              
              />


            <div className="videoText">
                <h3>{videointro('title')}</h3>
                <h1>{videointro('subtitle-1')} <br/> {videointro('subtitle-2')}</h1>
                <p>{videointro('text-1')}<br/>{videointro('text-2')}<br/>{videointro('text-3')}</p>
            </div>
        </section>

        <section className="alianzasSeccion">
            <h3>{partnerships('title')}</h3>
            <div className="alianzasContainer">
                <Image className = "alianza" src={bdbLogo} alt = "Banco de Bosques"/>
                <Image className = "alianza" src={chronosPayLogo} alt = "Chronos Pay"/>
                <Image className = "alianza" src={finguruLogo} alt = "Finguru"/>
                
            </div>
        </section>

        <section className="phrase">
            <h2>"{phrase('text-1')}<br/> {phrase('text-2')} <br/> {phrase('text-3')}"</h2> <p>{phrase('comment')}</p>
            <button>{phrase('button')}</button>
        </section>

        <Footer/>
        </>)}
        
        </>
     
    );
  };
  
  export default MainPage;