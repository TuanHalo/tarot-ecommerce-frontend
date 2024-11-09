import Star from "@/components/atoms/Star"
import Tag from "@/components/atoms/Tag"
import './style.scss'
import { generatePath, Link } from "react-router-dom"
import { PATH } from "@/config/path"

type ProductCardProps = {
    id: string,
    img: string,
    name: string,
    time: number,
    topic: string,
    price: number,
    review: number,
    sold: number
}

const ProductCard = ({id, img, name, time, topic, price, review, sold}: ProductCardProps) => {
    let timeParse = ""
    let link = generatePath(PATH.productDetail, { slug: id })

    if (time >= 60) {
        timeParse = timeParse + (time / 60) + 'h' + (time % 60) + 'm';
    } else {
        timeParse = time + 'm';
    }
    
    return (
        <Link to={link} className="m-productCard">
            <img src={img} alt="" className="m-productCard_img"/>
            <div className="m-productCard_top">
                <h6 className="m-productCard_top--name">{name}</h6>
                <div className="m-productCard_top--tag">
                    <Tag icon="/images/clock.svg" content={timeParse}/>
                    <Tag icon="/images/family.svg" content={topic}/>
                </div>
                <p className="m-productCard_top--price">{price}</p>
            </div>
            <div className="m-productCard_bottom">
                <div className="m-productCard_bottom--review">
                    <Star star={review}/>
                    <p>Đã bán {sold}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard