import { NavLink } from "react-router-dom";
import "./index.scss";
import { Link } from "react-router-dom";

type NavListItem = {
  name: string;
  href: string;
};

type NavListProps = {
  list: NavListItem[];
  type?: "Nav" | "Link";
};

const NavList = ({ list, type = "Nav" }: NavListProps) => {
  return (
    <ul className="m-navList">
      {list &&
        list.map((item) => {
          return (
            <li key={item.href} className="m-navList_item">
              {type == "Nav" ? (
                <NavLink to={item.href} className="m-navList_item--link">
                  {item.name}
                </NavLink>
              ) : (
                <Link to={item.href} className="m-navList_item--link">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default NavList;
