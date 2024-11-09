import { PATH } from "@/config/path";
import { Link } from "react-router-dom";
import "./index.scss";

const Logo = () => {
  return (
    <Link to={PATH.home} className="a-logo">
      <img src="/images/logo.svg" alt="" />
    </Link>
  );
};

export default Logo;
