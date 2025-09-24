
import HeaderLeft from "./HeaderLeft";
import HeaderCenter from "./HeaderCenter";
import HeaderRight from "./HeaderRight";
import HeaderRighteast from "./HeaderRighteast";
import "./Header.css";


function Header({ onButtonClick }) {
  return (
  <>
<header className="headContainer">
<HeaderLeft/>
<HeaderCenter/>
<HeaderRight onButtonClick={onButtonClick}/>
<HeaderRighteast/>
</header>
  </>
  );
}

export default Header;

