import React, { useState } from "react";
import "../styles/slider.css"

function Slider(props) {
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
    <div className="slider">
      <button className="prev" onClick={handlePrev}>
        ←
      </button>
      {proyectos[currentIndex]}
      <button className="next" onClick={handleNext}>
        →
      </button>
    </div>
  ) : (
    <h2>No hay nada para mostrar... por ahora</h2>
  );
}

export default Slider;