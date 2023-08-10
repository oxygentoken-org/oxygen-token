"use client"; // This is a client component 👈🏽
import "../styles/footer.css"
import Image from 'next/image';
import logoFooter from "../public/assets/images/logo.png"
import logoInstagram from "../public/assets/logos/logoInstagram.png"
import logoLinkedin from "../public/assets/logos/logoLinkedin.png"
import logoTwitter from "../public/assets/logos/logoTwitter.png";
import logoYoutube from "../public/assets/logos/logoYoutube.png"



function Footer() {

  return (
    <section className="footer">
        <div className="footerSocials">
            <Image src={logoFooter} className="logoFooter"></Image>
            <div className="socialsContainer">
                <div className="social"><a href="https://instagram.com/oxygen.token" target="_blank" rel="noreferrer"><Image src={logoInstagram} className="socialLogo"></Image></a></div>
                <div className="social"><a href="/" target="_blank" rel="noreferrer"><Image src={logoLinkedin} className="socialLogo"></Image></a></div>
                <div className="social"><a href="/" target="_blank" rel="noreferrer"><Image src={logoTwitter} className="socialLogo"></Image></a></div>
                <div className="social"><a href="/" target="_blank" rel="noreferrer"><Image src={logoYoutube} className="socialLogo"></Image></a></div>



            </div>
        </div>
        <div className="footerRedirects">
            <h3>Empresa</h3>
            <ul className="redirects">
                <li><a href="/nosotros">Nosotros</a></li>
                <li><a href="/proyecto">Proyectos</a></li>
                <li><a href="/contacto">Contacto</a></li>
                <li><a href="/joinus">Join Us</a></li>
            </ul>
        </div>
        <div className="footerNewsletter">
            <h3>Suscribite a nuestro newsletter</h3>
            <input type="text" placeholder="Correo electrónico"></input>
            <button>Enviar</button>
        </div>


    </section>
  );
}

export default Footer;
