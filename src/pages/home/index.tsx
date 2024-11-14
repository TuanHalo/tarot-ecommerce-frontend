import Button from "@/components/atoms/Button";
import "./index.scss";
import { Link } from "react-router-dom";
import Logo from "@/components/atoms/Logo";
import ConsultantCard from "@/components/molecules/ConsultantCard";

const CATEGORY = [
  {
    name: "Love",
    icon: "love",
    link: "/",
  },
  {
    name: "Family",
    icon: "family2",
    link: "/",
  },
  {
    name: "Relationship",
    icon: "relationship",
    link: "/",
  },
  {
    name: "finance",
    icon: "finance",
    link: "/",
  },
  {
    name: "Love",
    icon: "love",
    link: "/",
  },
  {
    name: "Family",
    icon: "family2",
    link: "/",
  },
];

const CONSULTANT_LIST = [
  {
    id: "123",
    img: "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
    name: "Alicia Keys",
    topic: ["Gia đình", "Tình yêu", "Tình yêu", "Mối quan hệ"],
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris congue massa vel lobortis cursus faucibus volutpat quis suspendisse. Nibh nisi enim amet tincidunt lorem maecenas.",
    review: 3.5,
    sold: 10000,
  },
  {
    id: "125",
    img: "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
    name: "Alicia Keys",
    topic: ["Gia đình", "Tình yêu", "Tình yêu", "Mối quan hệ"],
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris congue massa vel lobortis cursus faucibus volutpat quis suspendisse. Nibh nisi enim amet tincidunt lorem maecenas.",
    review: 3.5,
    sold: 10000,
  },
  {
    id: "127",
    img: "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
    name: "Alicia Keys",
    topic: ["Gia đình", "Tình yêu", "Mối quan hệ"],
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris congue massa vel lobortis cursus faucibus volutpat quis suspendisse. Nibh nisi enim amet tincidunt lorem maecenas.",
    review: 3.5,
    sold: 10000,
  },
];

const REVIEW = [
  {
    name: "Raymond J",
    desc: "Laudantium dignissimos hic exercitationem odio perferendis repellendus! Qui ipsam dolorum, corrupti suscipit delectus sint ab vel voluptate atque odit nam earum rem odio quo debitis deserunt amet illum porro expedita illo! Reprehenderit inventore qui pariatur dolorum saepe!",
  },
  {
    name: "Raymond J",
    desc: "Laudantium dignissimos hic exercitationem odio perferendis repellendus! Qui ipsam dolorum, corrupti suscipit delectus sint ab vel voluptate atque odit nam earum rem odio quo debitis deserunt amet illum porro expedita illo! Reprehenderit inventore qui pariatur dolorum saepe!",
  },
  {
    name: "Raymond J",
    desc: "Laudantium dignissimos hic exercitationem odio perferendis repellendus! Qui ipsam dolorum, corrupti suscipit delectus sint ab vel voluptate atque odit nam earum rem odio quo debitis deserunt amet illum porro expedita illo! Reprehenderit inventore qui pariatur dolorum saepe!",
  },
];

const Home = () => {
  return (
    <div className="p-home">
      <section className="p-home_welcome">
        <h2>Welcome to Tarot Booking!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id natus
          architecto quibusdam, tempora neque harum nobis quaerat laborum,
          porro, optio explicabo repellendus sunt reprehenderit consequatur? At
          ex ducimus veniam quidem? Vitae at veritatis commodi perspiciatis
          exercitationem suscipit, fugiat molestias animi fuga saepe id placeat
          totam ipsam dolor! Nobis magnam, a at illum ab fuga non incidunt
          ipsam, alias placeat quasi.
        </p>
        <Button name="Find a consultant" />
      </section>
      <section className="p-home_aboutUs">
        <h3>About us</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, itaque
          placeat! Accusantium quod commodi maiores enim! Dolorem, eveniet
          commodi, debitis quo explicabo blanditiis voluptate reprehenderit,
          voluptatum voluptatem molestiae dicta vero?
        </p>
      </section>
      <section className="p-home_category">
        <div className="p-home_category--title">
          <h3>Top Categories</h3>
          <Link to="/">View All</Link>
        </div>
        <ul className="p-home_category--list">
          {CATEGORY.map((c, i) => (
            <li key={i}>
              <Logo {...c} />
            </li>
          ))}
        </ul>
      </section>
      <section className="p-home_ready">
        <h3>Ready to Get Started?</h3>
        <p>Connect to one of these consultants</p>
        <ul className="p-home_ready--list">
          {CONSULTANT_LIST.map((c, i) => (
            <li className="list_item" key={i}>
              <ConsultantCard {...c} />
            </li>
          ))}
        </ul>
      </section>
      <section className="p-home_review">
        <h3 className="p-home_review--title">Review</h3>
        <ul className="p-home_review--list">
          {REVIEW.map((r, i) => (
            <li className="list_item" key={i}>
              <p className="list_item--desc">{r.desc}</p>
              <p className="list_item--name">{r.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
