import React, { useState } from "react";
import "../styles/sliderComp.css"

function SliderComp(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const proyectos = props.proyectos;

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? proyectos.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === proyectos.length - 1 ? 0 : currentIndex + 1
    );
  };

  return proyectos.length > 0 ? (
    <div className="sliderComp">
      <button className={props.estilo ? "prev2" : "prev1"} onClick={handlePrev}>
  ←
</button>
      {proyectos[currentIndex]}
      <button className={props.estilo ? "next2" : "next1"}onClick={handleNext}>
        →
      </button>
    </div>
  ) : (
    <h2>No hay nada para mostrar... por ahora</h2>
  );
}

export default SliderComp;