import "./project.css"
import Image from "next/image";

const Project = ({ name, picture, description, mapLink, seeMap }) => {
    return (
      <>
        <div className="projectCard">
            <Image src={picture} alt={name} className="projectImage"/>
            <div className="projectText">
                <h2>{name}</h2>
                <div className="projectDescription"><p>{description}</p></div>
                <a  target= "_blank" className="projectButton" href={mapLink}>{seeMap}</a>
            </div>

        </div>
      </> 
    );
  };
  
  export default Project;