import ConsultantInfo from "@/components/molecules/ConsultantInfo";
import "./[slug].scss";
import BriefInfo from "@/components/molecules/BriefInfo";
import { useState } from "react";
import Review from "@/components/organisms/Review";
import ProductCard from "@/components/molecules/ProductCard";

const CONSULTANT_BRIEF = {
  "Sản phẩm": 10,
  "Người theo dõi": 500,
  "Đã xem": 20000,
  "Đánh giá": 2000,
  "Tỉ lệ phản hồi chat": "90%",
  "Tham gia": "...",
  "Chủ đề": "Gia đình, tình yêu, ...",
};

const PRODUCT_LIST = [
  {
    id: "id1",
    img: "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
    name: "Product 1",
    time: 30,
    topic: "Gia đình",
    price: 88888,
    review: 3.5,
    sold: 10000,
  },
  {
    id: "id1",
    img: "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
    name: "Product 1",
    time: 30,
    topic: "Gia đình",
    price: 88888,
    review: 3.5,
    sold: 10000,
  },
  {
    id: "id1",
    img: "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
    name: "Product 1",
    time: 30,
    topic: "Gia đình",
    price: 88888,
    review: 3.5,
    sold: 10000,
  },
  {
    id: "id1",
    img: "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
    name: "Product 1",
    time: 30,
    topic: "Gia đình",
    price: 88888,
    review: 3.5,
    sold: 10000,
  },
  {
    id: "id1",
    img: "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
    name: "Product 1",
    time: 30,
    topic: "Gia đình",
    price: 88888,
    review: 3.5,
    sold: 10000,
  },
];

const REVIEW_COMMENT = [
  {
    avatar: "/images/Avatar.jpg",
    name: "Account 1",
    star: 3,
    time: "2024-09-11 15:30",
    cmt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio debitis nesciunt alias sed temporibus. Similique ex sint, debitis dignissimos, itaque tempore placeat perferendis veritatis libero omnis molestiae reiciendis, rerum consequuntur",
  },
  {
    avatar: "/images/Avatar.jpg",
    name: "Account 1",
    star: 2,
    time: "2024-09-11 15:30",
    cmt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio debitis nesciunt alias sed temporibus. Similique ex sint, debitis dignissimos, itaque tempore placeat perferendis veritatis libero omnis molestiae reiciendis, rerum consequuntur",
  },
  {
    avatar: "/images/Avatar.jpg",
    name: "Account 1",
    star: 2,
    time: "2024-09-11 15:30",
    cmt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio debitis nesciunt alias sed temporibus. Similique ex sint, debitis dignissimos, itaque tempore placeat perferendis veritatis libero omnis molestiae reiciendis, rerum consequuntur",
  },
  {
    avatar: "/images/Avatar.jpg",
    name: "Account 1",
    star: 1,
    time: "2024-09-11 15:30",
    cmt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio debitis nesciunt alias sed temporibus. Similique ex sint, debitis dignissimos, itaque tempore placeat perferendis veritatis libero omnis molestiae reiciendis, rerum consequuntur",
  },
];

const ConsultantDetail = () => {
  const [isProduct, setIsProduct] = useState(true);

  return (
    <div className="p-consultantDetail">
      <div className="p-consultantDetail_info">
        <ConsultantInfo
          name="Alicia Keys"
          avatar="/images/Avatar.jpg"
          description="Lorem ipsum dolor sit amet consectetur. Mauris congue massa vel lobortis cursus faucibus volutpat quis suspendisse. Nibh nisi enim amet tincidunt lorem maecenas."
          action1={{ name: "Follow", icon: "phone", type: "Type1" }}
          action2={{ name: "Chat", icon: "chat", type: "Type1" }}
          type="Long"
        />
        <BriefInfo briefInfo={CONSULTANT_BRIEF} />
      </div>
      <div className="p-consultantDetail_list">
        <div className="p-consultantDetail_list--tag">
          <p
            onClick={() => setIsProduct(true)}
            className={isProduct ? "active" : ""}
          >
            Products
          </p>
          <p
            onClick={() => setIsProduct(false)}
            className={isProduct ? "" : "active"}
          >
            Comments
          </p>
        </div>
        <div
          className={`p-consultantDetail_list--view ${
            isProduct ? "product" : "comment"
          }`}
        >
          {isProduct ? (
            <ul className="view_list">
              {PRODUCT_LIST.map((p, i) => (
                <li key={i}>
                  <ProductCard {...p} />
                </li>
              ))}
            </ul>
          ) : (
            <Review totalStar={2.5} list={REVIEW_COMMENT} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultantDetail;
