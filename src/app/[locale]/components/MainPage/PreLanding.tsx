import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Assets
import logoGeneral from "../../../../../public/assets/images/logo_slogan.png";
import treeLoading from "../../../../../public/assets/logos/treeLogoLoading.png";

export function PreLanding() {
  const layout = useTranslations("Layout");

  const [isOnHome, setIsOnHome] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const hasEnteredBefore = sessionStorage.getItem("hasEnteredBefore");
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

  return (
    <section className="prevHome">
      {showAnimation && <div className="expandAnimation" />}
      {showLoading && (
        <div className="loadingCircle">
          <Image src={treeLoading} alt="Loading Tree" className="loadingTree" />
        </div>
      )}
      <Image className="prevHomeLogo" src={logoGeneral} alt="logo Oxygen" />
      <div className="prevHomeContainer">
        <h1>{layout("prevTitle")}</h1>
        <button onClick={handleHidePrevHome}>{layout("prevButton")}</button>
      </div>
    </section>
  );
}
