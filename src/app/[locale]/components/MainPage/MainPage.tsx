"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useTranslations } from "next-intl";

// Components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Partnerships from "../Partnerships/Partnerships";

// Styles
import "./mainpage.css";
import "../../../[locale]/globals.css";

// Assets
import logoGeneral from "../../../../../public/assets/images/logo_slogan.png";
import treeLoading from "../../../../../public/assets/logos/treeLogoLoading.png";

// Sections
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Tokens } from "./Tokens";
import { Progress } from "./Progress";

const MainPage = () => {
  /*Translations*/
  const layout = useTranslations("Layout");
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
      <Tokens />
      <Progress />

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
