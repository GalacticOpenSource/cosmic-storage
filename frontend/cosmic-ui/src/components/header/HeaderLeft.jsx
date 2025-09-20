
import logo from "../../assets/logo.png"; // import the image
import "./HeaderLeft.css";

function HeaderLeft() {
  return (
 <>
 <div className="left"> 
  <a href="google.com"  className="link">
    <img src={logo} alt="Logo" className="logo" />
    <span>Cosmic</span>
  </a>
 </div>
 </>
  );
}

export default  HeaderLeft
