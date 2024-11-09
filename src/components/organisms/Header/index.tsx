import Logo from "@/components/atoms/Logo";
import NavList from "@/components/molecules/NavList";
import "./index.scss";
import { NAV_LIST, NAV_LOGIN } from "@/config/path";

const Header = () => {
  return (
    <header className="o-header">
      <div className="o-header_left">
        <Logo />
        <NavList list={NAV_LIST} />
      </div>
      <div className="o-header_right">
        <NavList list={NAV_LOGIN} type="Link" />
      </div>
    </header>
  );
};

export default Header;
