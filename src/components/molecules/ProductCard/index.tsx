import Star from "@/components/atoms/Star";
import Tag from "@/components/atoms/Tag";
import "./index.scss";
import { generatePath, Link, Navigate } from "react-router-dom";
import { PATH } from "@/config/path";

type ProductCardProps = {
  _id: string;
  img: string[];
  name: string;
  time: number[];
  topic?: string;
  price: number[];
  review?: number;
  sold: number;
};

const ProductCard = ({
  _id,
  img = [
    "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
  ],
  name,
  time,
  topic = "",
  price,
  review = 0,
  sold,
}: ProductCardProps) => {
  let timeParse = "";
  const link = generatePath(PATH.productDetail, { slug: _id });

  if (time[0] >= 60) {
    timeParse = timeParse + time[0] / 60 + "h" + (time[0] % 60) + "m";
  } else {
    timeParse = time[0] + "m";
  }

  return (
    <Link to={link} className="m-productCard">
      <img src={img[0]} alt="" className="m-productCard_img" />
      <div className="m-productCard_top">
        <h6 className="m-productCard_top--name">{name}</h6>
        <div className="m-productCard_top--tag">
          <Tag icon="/images/clock.svg" content={timeParse} />
          {topic ?? <Tag icon="/images/family.svg" content={topic} />}
        </div>
        <p className="m-productCard_top--price">
          {price[0]}
          {price.length > 1 ? ` - ${price[price.length - 1]}` : ""}
        </p>
      </div>
      <div className="m-productCard_bottom">
        <div className="m-productCard_bottom--review">
          <Star star={review} />
          <p>Đã bán {sold}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
