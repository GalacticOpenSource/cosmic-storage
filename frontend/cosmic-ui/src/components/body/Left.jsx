import "./Left.css";
import { Link } from "react-router-dom";
function Left() {
  return (
    <>
      <div className="Left">
        <div className="L">
          <nav className="nav1">
            <Link className="L1" to="/about">
              <svg className="svg1"
                xmlns="http://www.w3.org/2000/svg"
               fill="#0f0000ff"
        width="1vw"
        height="1vh"
                viewBox="0 -960 960 960"
               
              >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
              <span>Home</span>
            </Link>
          </nav>
          <nav>
            <Link className="L1" to="/about">
              <svg className="svg1 svg2"
                xmlns="http://www.w3.org/2000/svg"
              
                viewBox="0 -960 960 960"
                           fill="#0f0000ff"
        width="1.7vw"
        height="1.7vh"
              >
                <path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
              </svg>
              <span>Documentes</span>
            </Link>
          </nav>
          <nav>
            <Link className="L1" to="/about">
              <svg  className="svg1"
                xmlns="http://www.w3.org/2000/svg"
        
                viewBox="0 -960 960 960"
                     fill="#0f0000ff"
        width="1vw"
        height="1vh"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Zm140-360q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Z" />
              </svg>
              <span>Pictures</span>
            </Link>
          </nav>
          <nav>
            <Link className="L1" to="/about">
              <svg  className="svg1"
                xmlns="http://www.w3.org/2000/svg"
   
                viewBox="0 -960 960 960"
                       fill="#0f0000ff"
        width="1vw"
        height="1vh"
              >
                <path d="M430-200q38 0 64-26t26-64v-150h120v-80H480v155q-11-8-23.5-11.5T430-380q-38 0-64 26t-26 64q0 38 26 64t64 26ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
              </svg>
              <span> Music</span>
            </Link>
          </nav>
          <nav>
            <Link className="L1"  to="/about">
              <svg  className="svg1"
                xmlns="http://www.w3.org/2000/svg"
          
                viewBox="0 -960 960 960"
                    fill="#0f0000ff"
        width="1vw"
        height="1vh"
              >
                <path d="M360-240h160q17 0 28.5-11.5T560-280v-40l80 42v-164l-80 42v-40q0-17-11.5-28.5T520-480H360q-17 0-28.5 11.5T320-440v160q0 17 11.5 28.5T360-240ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
              </svg>
              <span>Videos</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Left;
