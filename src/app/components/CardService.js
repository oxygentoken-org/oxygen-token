import "../styles/CardService.css";
import "../styles/mainpage.css"
import { useState } from "react";

const CardService = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
    return(<>
    <div className={`card ${isFlipped ? "flipped" : ""}`} onMouseClick={handleFlip} >
                <Image  className="serviceFront" src={props.imagen}/>
                <div className="serviceBack">
                    <p>{props.texto}</p>
                </div>
                </div>
    </>)
}

export default CardService;