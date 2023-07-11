import "../styles/cardservice.css";
import "../styles/mainpage.css"
import { useState } from "react";
import Image from "next/image";

const CardService = ({ image, title, text, number, link }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <Image src={image} width={200} height={300} style={{borderRadius: "40px"}} />

         
    </div>
    <div class="flip-card-back">
      <h1>{number}</h1>
      <h2>{title}</h2>
      <p>{text}</p>
      <a href={link} target="_blank" rel="noreferrer">Ver más</a>
    </div>
  </div>
</div>
  );
};

export default CardService;