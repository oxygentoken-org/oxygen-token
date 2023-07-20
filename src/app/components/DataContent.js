import "../styles/dataContent.css";
import "../styles/mainpage.css";


const DataContent = ({ number, text, mobile }) => {
  return (
    <>
      <div className="dataContent">
                <p className={mobile ? "dataNumber" : "dataNumberMobile"}><strong>{number}</strong></p>
                <p className={mobile ? "dataText" : "dataTextMobile"}>{text}</p>
                </div>
    </> 
  );
};

export default DataContent;