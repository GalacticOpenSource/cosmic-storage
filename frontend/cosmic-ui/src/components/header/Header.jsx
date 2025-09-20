
import HeaderLeft from "./HeaderLeft";
import HeaderCenter from "./HeaderCenter";
import HeaderRight from "./HeaderRight";
import "./Header.css";

function Header() {
  return (
  <>
<header className="headContainer">
<HeaderLeft/>
<HeaderCenter/>
<HeaderRight/>
</header>
  </>
  );
}

export default Header;

