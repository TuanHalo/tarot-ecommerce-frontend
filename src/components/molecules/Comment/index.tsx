import Star from "@/components/atoms/Star";
import "./index.scss";

export type CommentReviewProps = {
  avatar: string;
  name: string;
  star: number;
  time: string;
  cmt: string;
};

const CommentReview = ({ avatar, name, star, time, cmt }: CommentReviewProps) => {
  return (
    <div className="m-commentReview">
      <img src={avatar} alt="" className="m-commentReview_img" />
      <div className="m-commentReview_info">
        <h6 className="m-commentReview_info--name">{name}</h6>
        <Star star={star} />
        <p className="m-commentReview_info--time">{time}</p>
        <p className="m-commentReview_info--cmt">{cmt}</p>
      </div>
    </div>
  );
};

export default CommentReview;
