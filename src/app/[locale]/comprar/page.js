"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../../../styles/comprar.css";
import "../../[locale]/globals.css";
import { useTranslations } from "next-intl";


const Comprar = () =>{
    const buyIdioms = useTranslations('Buy')
    return (
        <><Navbar/>
        <section className="comprarTokens">
            <h1>{buyIdioms('title')}</h1>
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