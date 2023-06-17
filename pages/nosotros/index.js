"use client"; // This is a client component 👈🏽
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "../../src/app/styles/nosotros.css";
import "../../src/app/globals.css";

const Nosotros = () =>{
    return (
        <>
        <Navbar/>
        <section className="thisIsOxygen">
            <h1>Esto es Oxygen</h1>
            <div className="misionVision">
                <div className="mision">
                    <h2>Mision</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales lectus quis quam venenatis pharetra. Phasellus semper fermentum ornare. Fusce vel sollicitudin dui.</p>
                </div>
                <div className="vision">
                    <h2>Vision</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales lectus quis quam venenatis pharetra. Phasellus semper fermentum ornare. Fusce vel sollicitudin dui.</p>
                </div>
            </div>
        </section>
        <Footer/>
        
        </>
    )

}

export default Nosotros