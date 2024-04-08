import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import picConstruction from "../../../../public/assets/images/onConstruction.jpg";

const Register = () => {
  return (
    <>
      <Navbar />
      <div
        className="registerSection"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Image src={picConstruction} width={500} height={400} />
      </div>
      <Footer />
    </>
  );
};

export default Register;
