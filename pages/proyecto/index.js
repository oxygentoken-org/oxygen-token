"use client"; // This is a client component 👈🏽
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "../../src/app/styles/proyecto.css";
import "../../src/app/globals.css";
import Image from "next/image";


const Proyecto = () =>{
    return (
        <><Navbar/>
        <section className="proyectoMapa">
            <h1>Conocé los bosques <br/>que estamos salvando</h1>
        </section>
        <Footer/>
        </>)
    
}

export default Proyecto;