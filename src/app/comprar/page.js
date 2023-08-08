import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "../../../styles/comprar.css"
import "../../app/globals.css"


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