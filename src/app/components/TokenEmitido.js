import "../styles/tokenemitido.css";
import "../styles/mainpage.css"
import { useState } from "react";
import Image from "next/image";

const TokenEmitido = ({ title, text, logo }) => {
  return<>
  <div className="tokenCard">
    <Image src= {logo} width={80} height={100} alt="logo"/>
    <h2>{title}</h2>
    <p>{text}</p>
    <a>Ver más</a>
  </div>
  </>
};

export default TokenEmitido;