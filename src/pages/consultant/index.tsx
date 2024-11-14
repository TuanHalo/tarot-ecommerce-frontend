import Field from "@/components/atoms/Field";
import { useState } from "react";
import ConsultantCard from "@/components/molecules/ConsultantCard";
import "./index.scss";

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
  {
    id: "130",
    img: "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
    name: "Alicia Keys",
    topic: ["Gia đình", "Tình yêu", "Tình yêu", "Mối quan hệ"],
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris congue massa vel lobortis cursus faucibus volutpat quis suspendisse. Nibh nisi enim amet tincidunt lorem maecenas.",
    review: 3.5,
    sold: 10000,
  },
];

const Consultant = () => {
  const [value, setValue] = useState("");
  const changeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  return (
    <div className="p-consultant">
      <div className="p-consultant_search">
        <select name="filter" id="filter">
          <option value="best">Best Available</option>
          <option value="featured">Featured Advisors</option>
        </select>
        <Field
          iconName="search"
          placeholder="Search"
          onChange={changeHandler}
          value={value}
        />
      </div>
      <ul className="p-consultant_list">
        {CONSULTANT_LIST.map((consultant, index) => (
          <li key={index} className="p-consultant_list--item">
            <ConsultantCard {...consultant} key={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Consultant;
