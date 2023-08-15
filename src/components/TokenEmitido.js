import "../styles/tokenemitido.css";
import "../styles/mainpage.css";
import Image from "next/image";

const TokenEmitido = ({ title, text, logo, link }) => {
  return (
    <>
      <div className="tokenCard">
        <Image src={logo} width={80} height={100} alt="logo" className="logoTokenCard" />
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="tokenCard-link">
          <a href={link} target="_blank" rel="noreferrer">Ver más&gt;</a>
        </div>
      </div>
    </>
  );
};

export default TokenEmitido;
