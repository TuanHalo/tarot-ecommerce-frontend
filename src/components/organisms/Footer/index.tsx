import { Link } from "react-router-dom";
import "./index.scss";
import Logo from "@/components/atoms/Logo";

const CATEGORY = [
  {
    name: "Explore",
    list: [
      {
        name: "About us",
        href: "/",
      },
      {
        name: "Articles",
        href: "/",
      },
    ],
  },
  {
    name: "Discover Consultant",
    list: [
      {
        name: "Alicia Keys",
        href: "/",
      },
      {
        name: "Jacob Branc",
        href: "/",
      },
    ],
  },
  {
    name: "User Support",
    list: [
      {
        name: "Help",
        href: "/",
      },
      {
        name: "Customer Support",
        href: "/",
      },
      {
        name: "Give Advice",
        href: "/",
      },
      {
        name: "Sitemap",
        href: "/",
      },
    ],
  },
  {
    name: "Community Insights",
    list: [
      {
        name: "User Agreement",
        href: "/",
      },
      {
        name: "Privacy",
        href: "/",
      },
      {
        name: "Trademark",
        href: "/",
      },
    ],
  },
];

const SOCIAL = [
  {
    icon: "facebook",
    link: "/",
  },
  {
    icon: "youtube",
    link: "/",
  },
  {
    icon: "instagram",
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer className="o-footer">
      <ul className="o-footer_category">
        {CATEGORY.map((c, i) => (
          <li key={i} className="o-footer_category--item">
            <h6 className="item_title">{c.name}</h6>
            <ul className="item_list">
              {c.list.map((l) => (
                <li key={l.name}>
                  <Link to={l.href}>{l.name}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li className="o-footer_category--social">
          <ul>
            {SOCIAL.map((s, i) => (
              <li key={i}>
                <Logo icon={s.icon} link={s.link} />
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <p className="o-footer_copyright">
        © 2024 Ingenio, LLC. All rights reserved. Keen is for entertainment
        purposes only. Must be 18 years or older.
      </p>
    </footer>
  );
};

export default Footer;
