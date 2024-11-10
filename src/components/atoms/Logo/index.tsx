import { Link } from "react-router-dom";
import "./index.scss";

type LogoProps = {
  link: string;
  icon: string;
  name?: string;
};

const Logo = ({ link, icon, name = "" }: LogoProps) => {
  return (
    <Link to={link} className="a-logo">
      <img src={`/images/${icon}.svg`} alt="" />
      {name ? <p>{name}</p> : ""}
    </Link>
  );
};

export default Logo;
