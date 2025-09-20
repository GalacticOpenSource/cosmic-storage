
// import settingsIcon from "../../assets/icons/settings.svg";
// import profileIcon from "../../assets/icons/profile.svg";
import "./Header.css";

function HeaderRight() {
  return (
    <div className="header-right">
      <img src={settingsIcon} alt="Settings" className="icon" />
      <img src={profileIcon} alt="Profile" className="icon" />
    </div>
  );
}

export default HeaderRight;
