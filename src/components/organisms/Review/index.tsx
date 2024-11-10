import Star from "@/components/atoms/Star";
import CommentReview, {
  CommentReviewProps,
} from "@/components/molecules/Comment";
import { useState } from "react";
import "./index.scss";

type ReviewProps = {
  totalStar: number;
  list: CommentReviewProps[];
};

const STAR_LIST = [6, 5, 4, 3, 2, 1];

const Review = ({ totalStar, list }: ReviewProps) => {
  const [star, setStar] = useState(6);

  return (
    <div className="o-review">
      <div className="o-review_brief">
        <div className="o-review_brief--overall">
          <p>
            <span>{totalStar}</span> trên 5
          </p>
          <Star star={totalStar} />
        </div>
        <ul className="o-review_brief--list">
          {STAR_LIST.map((s, i) => (
            <li
              key={i}
              onClick={() => setStar(s)}
              className={s === star ? "active" : ""}
            >
              {s === 6 ? "Tất cả" : s + " sao"} (
              {s === 6 ? list.length : list.filter((c) => c.star === s).length})
            </li>
          ))}
        </ul>
      </div>
      <ul className="o-review_list">
        {list.map((c, i) =>
          star === 6 || star === c.star ? (
            <li key={i}>
              <CommentReview {...c} />
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
};

export default Review;
