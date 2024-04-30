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
import { Video } from "./Video";
import { Quote } from "./Quote";

const MainPage = () => {
  /*Translations*/
  const layout = useTranslations("Layout");

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
      <div className="fixed -z-50 inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 min-h-full min-w-full aspect-video">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=rmxCvK6rMYU"
            width="100%"
            height="100%"
            playing={true}
            loop={true}
            muted
          />
        </div>
      </div>

      <Hero />
      <Services />
      <Tokens />
      <Progress />
      <Video />
      <Partnerships />
      <Quote />

      <Footer />
    </>
  );
};

export default MainPage;
