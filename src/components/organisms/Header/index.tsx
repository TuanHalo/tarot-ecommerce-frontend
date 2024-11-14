import Logo from "@/components/atoms/Logo";
import NavList from "@/components/molecules/NavList";
import "./index.scss";
import { NAV_LIST, NAV_LOGIN, PATH } from "@/config/path";
import { useAuth } from "@/stores/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logout } = useAuth();

  const clickHandler = () => {
    logout();
  };

  return (
    <header className="o-header">
      <div className="o-header_left">
        <Logo link={PATH.home} icon="logo" />
        <NavList list={NAV_LIST} />
      </div>
      <div className="o-header_right">
        {user ? (
          <>
            <img src="/images/Avatar.jpg" alt="" />
            <p>{user.name}</p>
            <ul className="o-header_right--popup">
              <li className="popup_item">
                <Link to="/profile" className="popup_item--link">
                  Account
                </Link>
              </li>
              <li className="popup_item">
                <Link to="/cart" className="popup_item--link">
                  Cart
                </Link>
              </li>
              <li className="popup_item">
                <button onClick={clickHandler} className="popup_item--link">
                  Log Out
                </button>
              </li>
            </ul>
          </>
        ) : (
          <NavList list={NAV_LOGIN} type="Link" />
        )}
      </div>
    </header>
  );
};

export default Header;
