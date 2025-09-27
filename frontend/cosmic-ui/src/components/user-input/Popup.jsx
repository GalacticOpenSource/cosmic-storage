import React, { useState } from "react";
import "./Popup.css";
import Toast from "./Toast";
function Popup({ onClose,  sendDataToParent }) {

 const [message, setMessage] = useState("");
 const [file, setFile] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  setFiles(event.target.files); // FileList
    const formData = new FormData(event.target);

    for (const [key, value] of formData.entries()) {
      console.log(key, value); // Debug log
    }

    try {
      const response = await fetch("http://localhost:3000/uploads", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();
      console.log(result)
      setMessage(result);
     sendDataToParent(result);
    setShowToast(true);
  setUploadedFiles(result.files);
    setTimeout(() => {

 onClose();

    },2000)
    } catch (error) {
      setMessage("Error submitting form!");
    }
  };
setTimeout(()=>{
  console.log(files);
console.log(uploadedFiles);
},3000)
  return (
        <div className="popup-overlay">

      <div className="popup-box">
        <form onSubmit={handleSubmit} className="form">
                
          <label className="in" htmlFor="file-upload">
            Upload
          </label>
               
          <input
            id="file-upload"
            type="file"
            multiple
            name="user-input"
            style={{ display: "none" }}
          />

          <div className="bx">
            <button type="button" onClick={onClose}className="button1">
              Cancel
            </button>
            <button type="submit" className="button2">
              OK
            </button>
          </div>
          
        </form>
    
      </div>
            {showToast && (
        <Toast
        message={message}
       
          onClose={() => setShowToast(false)}
        />
      )}
    </div>

  );
}

export default Popup;



