import profileIcon from "../../assets/icons/profile.svg";
import "./HeaderRight.css";

function HeaderRight() {
  return (
    <div className="header-right">
      <button className="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="#010c00ff"
        width="2vw"
        height="2vh"
        >
          <path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z" />
        </svg>
    <span>New</span>
      </button>
    </div>
  );
}

export default HeaderRight;
