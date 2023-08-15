import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../../styles/proyecto.css"
import "../../app/globals.css"

export const metadata = {
    title: 'Proyecto',
    description: 'Reducí tus emisiones de CO2 con Oxygen',
  }
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