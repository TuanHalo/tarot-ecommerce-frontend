import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./[slug].scss";
import Star from "@/components/atoms/Star";
import Button from "@/components/atoms/Button";
import ProductCard from "@/components/molecules/ProductCard";
import TimeChoose, { TimeListTypes } from "@/components/organisms/TimeChoose";
import Review from "@/components/organisms/Review";
import BriefInfo from "@/components/molecules/BriefInfo";
import ConsultantInfo from "@/components/molecules/ConsultantInfo";
import { productService } from "@/services/product.service";
import { scheduleService } from "@/services/schedule.service";
import { useScrollTop } from "@/hooks/useScrollTop";

const CONSULTANT_BRIEF = {
  "Đánh giá": 100,
  "Tỉ lệ phản hồi chat": "90%",
  "Sản phẩm": 20000,
  "Thời gian phản hồi": "Trong vài giờ",
  "Người theo dõi": 500,
};

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

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<any>({});
  const [schedule, setSchedule] = useState<any>([]);
  const [scheduleDetail, setScheduleDetail] = useState<TimeListTypes[]>([]);
  const [selected, setSelected] = useState("");
  const [type, setType] = useState(0);
  const [productList, setProductList] = useState([]);
  useScrollTop([slug] as any);

  useEffect(() => {
    fetchData();
  }, [slug]);

  const fetchData = async () => {
    const detailRes: any = await productService.getDetail(slug as string);
    setProduct(detailRes);
    setSelected(detailRes.image[0]);

    const scheduleRes: any = await scheduleService.getSchedule(
      detailRes.consultantId,
      detailRes._id
    );
    setSchedule(scheduleRes);
    setScheduleDetail(scheduleRes[type]);

    const productRes: any = await productService.getAll("");
    if (productRes) setProductList(productRes);
  };

  return (
    <div className="p-productDetail">
      <div className="p-productDetail_info">
        <div className="p-productDetail_info--img">
          <img src={selected} alt="" className="img_selected" />
          <div className="img_list">
            {product?.image?.map((image: any, index: any) => (
              <img
                src={image}
                alt=""
                key={index}
                onClick={() => setSelected(image)}
              />
            ))}
          </div>
        </div>
        <div className="p-productDetail_info--brief">
          <h2 className="brief_title">{product?.name ?? ""}</h2>
          <div className="brief_description">
            <div className="brief_description--review">
              <Star star={3.5} />
              <span className="review_total">
                {product?.review ?? 0} reviews
              </span>
              <span className="review_sold">{product?.sold ?? 0} sold</span>
            </div>
            <div className="brief_description--price">
              <span>₫{product?.price?.length ? product?.price[0] : 0}</span>
              <span>-</span>
              <span>
                ₫
                {product?.price?.length
                  ? product?.price[product?.price.length - 1]
                  : 0}
              </span>
            </div>
            <div className="brief_description--type">
              <span>Type</span>
              <ul className="type_list">
                {product?.time?.map((t: any, i: any) => (
                  <li
                    key={i}
                    onClick={() => {
                      setScheduleDetail(schedule[i]);
                      setType(i);
                    }}
                    className={type === i ? "active" : ""}
                  >
                    {t} mins
                  </li>
                ))}
              </ul>
            </div>
            {scheduleDetail.length ? (
              <TimeChoose timeList={[...scheduleDetail]} />
            ) : (
              <> </>
            )}
          </div>
          <div className="brief_action">
            <Button name="Add to cart" type="Type2" icon="cart" />
            <Button name="Buy now" />
          </div>
        </div>
      </div>
      <div className="p-productDetail_consultant">
        <ConsultantInfo
          name="Alicia Keys"
          avatar="/images/Avatar.jpg"
          action1={{ name: "Chat", icon: "chat", type: "Type1" }}
          action2={{ name: "Shop", icon: "cart", type: "Type2" }}
        />
        <BriefInfo briefInfo={CONSULTANT_BRIEF} />
      </div>
      <div className="p-productDetail_description">
        <p className="p-productDetail_description--title">DESCRIPTION</p>
        <p className="p-productDetail_description--desc">
          {product?.description}
        </p>
      </div>
      <Review totalStar={2.5} list={REVIEW_COMMENT} />
      <div className="p-productDetail_others">
        <div className="p-productDetail_others--title">
          <p>Sản phẩm khác của shop</p>
          <Link to="/">Xem tất cả {">"}</Link>
        </div>
        <ul className="p-productDetail_others--list">
          {productList.map((product: any, index) => (
            <li key={index}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
