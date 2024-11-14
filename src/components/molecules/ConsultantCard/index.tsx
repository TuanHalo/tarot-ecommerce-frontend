import Star from "@/components/atoms/Star";
import { generatePath, Link } from "react-router-dom";
import "./index.scss";
import { PATH } from "@/config/path";

type ConsultantCardProps = {
  id: string;
  img: string;
  name: string;
  topic: string[];
  description: string;
  review: number;
  sold: number;
};

const ConsultantCard = ({
  id,
  img,
  name,
  topic,
  description,
  review,
  sold,
}: ConsultantCardProps) => {
  const link = generatePath(PATH.consultantDetail, { slug: id });

  return (
    <Link to={link} className="m-consultantCard">
      <img src={img} alt="" className="m-consultantCard_img" />
      <h6 className="m-consultantCard_title">{name}</h6>
      <ul className="m-consultantCard_topic">
        {topic.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </ul>
      <p className="m-consultantCard_description">{description}</p>
      <div className="m-consultantCard_review">
        <Star star={review} />
        <span>Đã bán {sold}</span>
      </div>
    </Link>
  );
};

export default ConsultantCard;
