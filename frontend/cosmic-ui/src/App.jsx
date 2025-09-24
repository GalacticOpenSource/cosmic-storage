import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import About from './pages/About'; 
import NotFound from './pages/NotFound'; 
import { useEffect, useState } from "react";
import Popup from './components/user-input/Popup';

function App() {
   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // default true
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [dataFromPopup, setDataFromPopup] = useState("");

  // This function will receive data directly from child
  const handleData = (data) => {
    setDataFromPopup(data);
  };
  const handleButtonClick = () => {
    setShowPopup(true); // Show popup when button is clicked
  };

  const closePopup = () => {
    setShowPopup(false); // Close popup
  };
  useEffect(() => {
    async function fetchServer() {
      try {
        const res = await fetch("http://localhost:3000/");
        if (!res.ok) throw new Error("Failed to fetch!");
        const data = await res.json();
        console.log(data)
        // setData(data.slice(0, 10))
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchServer();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{color: "red"}}>Error: {error}</p>;
  return (
    <>
      <div id='main'>
       
        <Header onButtonClick={handleButtonClick}  />
   
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
       {showPopup && <Popup onClose={closePopup} sendDataToParent={handleData}  />}

  
    </>
  );
}

export default App;
