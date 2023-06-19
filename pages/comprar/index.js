"use client"; // This is a client component 👈🏽
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "../../src/app/styles/comprar.css";
import "../../src/app/globals.css";
import Image from "next/image";


const Comprar = () =>{
    return (
        <><Navbar/>
        <section className="comprarTokens">
            <h1>COMENZÁ A HACER EL CAMBIO</h1>
            <div className="tokensContainer">
                <div className="token"></div>
                <div className="token"></div>
                <div className="token"></div>
                <div className="token"></div>

            </div>
        </section>
        <Footer/>
        
        </>)
    
}

export default Comprar;