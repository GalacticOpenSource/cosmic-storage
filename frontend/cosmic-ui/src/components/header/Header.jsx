
import HeaderLeft from "./HeaderLeft";
import HeaderCenter from "./HeaderCenter";
import HeaderRight from "./HeaderRight";
import HeaderRighteast from "./HeaderRighteast";
import "./Header.css";


function Header() {
  return (
  <>
<header className="headContainer">
<HeaderLeft/>
<HeaderCenter/>
<HeaderRight/>
<HeaderRighteast/>
</header>
  </>
  );
}

export default Header;

