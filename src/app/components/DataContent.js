import "../styles/dataContent.css";
import "../styles/mainpage.css";


const DataContent = ({ number, text }) => {
  return (
    <>
      <div className="dataContent">
                <p className="dataNumber"><strong>{number}</strong></p>
                <p>{text}</p>
                </div>
    </>
  );
};

export default DataContent;