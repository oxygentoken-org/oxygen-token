import "../../../styles/dataContent.css";
import "../../../styles/mainpage.css";


const DataContent = ({ number, text, mobile }) => {
  return (
    <>
      <div className="dataContent">
                <p className= "dataNumber"><strong>{number}</strong></p>
                <p className="dataText">{text}</p>
                </div>
    </> 
  );
};

export default DataContent;