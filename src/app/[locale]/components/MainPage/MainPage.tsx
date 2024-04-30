"use client";

import { useState, useEffect, ReactNode, Fragment } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useFormatter, useTranslations } from "next-intl";

//Components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import TokenEmitido from "../TokenEmitido/TokenEmitido";
import SliderComp from "../SliderComp/SliderComp";
import Partnerships from "../Partnerships/Partnerships";

//Styles
import "./mainpage.css";
import "../../../[locale]/globals.css";

//Assets
import tokenIcon from "../../../../../public/assets/logos/logoQToken.png";
import logoTokenOM from "../../../../../public/assets/logos/logoTokenOM.png";
import logoTokenOC from "../../../../../public/assets/logos/logoTokenOC.png";
import logoGeneral from "../../../../../public/assets/images/logo_slogan.png";
import treeLoading from "../../../../../public/assets/logos/treeLogoLoading.png";

// Sections
import { Hero } from "./Hero";
import { Services } from "./Services";

const MainPage = () => {
  /*Translations*/
  const layout = useTranslations("Layout");
  const issuedtokens = useTranslations("issuedTokens");
  const hometokens = useTranslations("homeTokens");
  const videointro = useTranslations("videoIntro");
  const phrase = useTranslations("phrase");

  /*Animacion inicial*/

  const [isOnHome, setIsOnHome] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const hasEnteredBefore = sessionStorage.getItem("hasEnteredBefore");
    if (hasEnteredBefore) {
      setIsOnHome(true);
    }
  }, []);

  const handleHidePrevHome = () => {
    setShowAnimation(true);
    setShowLoading(true);
    sessionStorage.setItem("hasEnteredBefore", "true");
    setTimeout(() => {
      setIsOnHome(true);
      setShowAnimation(false);
      setShowLoading(false);
    }, 2000);
  };

  const tokensEmitidos = [
    {
      logo: tokenIcon,
      title: issuedtokens("issued-token-1-title"),
      text: issuedtokens("issued-token-1-text"),
    },
    {
      logo: logoTokenOM,
      title: issuedtokens("issued-token-2-title"),
      text: issuedtokens("issued-token-2-text"),
    },
    {
      logo: logoTokenOC,
      title: issuedtokens("issued-token-3-title"),
      text: issuedtokens("issued-token-3-text"),
    },
  ];

  const isMobileView = false; // todo

  if (!isOnHome)
    return (
      <section className="prevHome">
        {showAnimation && <div className="expandAnimation" />}
        {showLoading && (
          <div className="loadingCircle">
            <Image
              src={treeLoading}
              alt="Loading Tree"
              className="loadingTree"
            />
          </div>
        )}
        <Image className="prevHomeLogo" src={logoGeneral} alt="logo Oxygen" />
        <div className="prevHomeContainer">
          <h1>{layout("prevTitle")}</h1>
          <button onClick={handleHidePrevHome}>{layout("prevButton")}</button>
        </div>
      </section>
    );

  return (
    <>
      <Navbar />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=rmxCvK6rMYU"
        className="fixed -z-50 inset-0 !h-screen !w-[178vh] !min-w-[100vw] pointer-events-none"
        playing={true}
        loop={true}
        muted
      />

      <Hero />

      <Services />

      <section className="tokensEmitidos">
        <h2>{issuedtokens("title")}</h2>
        <h1>
          {issuedtokens("subtitle-1")} <br /> {issuedtokens("subtitle-2")}
        </h1>
        <div className="tokenContainer">
          {isMobileView ? (
            <SliderComp
              proyectos={tokensEmitidos.map((token, index) => (
                <TokenEmitido
                  key={index}
                  logo={token.logo}
                  title={token.title}
                  text={token.text}
                />
              ))}
            />
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

      <section className="tokensProgress">
        <h3>{hometokens("progress-subtitle")}</h3>
        <h1>{hometokens("progress-title")}</h1>
        <div className="progressContainer">
          <div className="progressCircle">
            <div className="progressCircleText">
              <span>0%</span>
              <p>{hometokens("progress-circle")}</p>
            </div>
          </div>
          <div className="progressText">
            <p>{hometokens("progress-text")}</p>
            <span>
              {hometokens("progress-span")}:
              <b> 000 {hometokens("progress-span-2")}</b>
            </span>
          </div>
        </div>
      </section>

      <section className="videoPresentacion">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ZLd7lNXcinI"
          className="videoHome"
          controls
        />

        <div className="videoText">
          <h3>{videointro("title")}</h3>
          <h1>
            {videointro("subtitle-1")} <br /> {videointro("subtitle-2")}{" "}
            <span style={{ color: "#00CAA6" }}>{videointro("subtitle-3")}</span>
          </h1>
          <p>
            {videointro("text-1")}
            <br />
            {videointro("text-2")}
            <br />
            {videointro("text-3")}
          </p>
        </div>
      </section>

      <Partnerships />

      <section className="phrase">
        <h2>
          "{phrase("text-1")}
          <br /> {phrase("text-2")} <br /> {phrase("text-3")}"
        </h2>{" "}
        <p>{phrase("comment")}</p>
        <button>{phrase("button")}</button>
      </section>

      <Footer />
    </>
  );
};

export default MainPage;
