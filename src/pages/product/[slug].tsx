import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss"
import Star from "@/components/atoms/Star";
import Button from "@/components/atoms/Button";
import ProductCard from "@/components/molecules/ProductCard";

const IMAGE_LIST = ["https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
"https://th.bing.com/th/id/OIP.47JGH3K7UmDhTo6E6kD1qAHaGT?w=2554&h=2175&rs=1&pid=ImgDetMain",
"https://images.herzindagi.info/image/2021/Dec/tarot-cards-jan.jpg",
"https://th.bing.com/th/id/OIP.7mkmRtHMjYoZGy3i6mgb7QHaE7?w=626&h=417&rs=1&pid=ImgDetMain"
]

const TYPE_LIST = [30, 45, 60]

const TIME_CHOOSE_LIST = [
    {
        day: 'Nov 10',
        timeList: [
            {
                from: '18:00',
                to: '19:00'
            }, 
            {
                from: '19:00',
                to: '20:00'
            }, 
            {
                from: '20:00',
                to: '21:00'
            }, 
            {
                from: '21:00',
                to: '22:00'
            }, 
            {
                from: '22:00',
                to: '23:00'
            }
        ]
    }, 
    {
        day: 'Nov 11',
        timeList: [
            {
                from: '18:30',
                to: '19:00',
                disable: true
            }, 
            {
                from: '19:30',
                to: '20:00'
            }, 
            {
                from: '21:30',
                to: '22:00'
            }, 
            {
                from: '22:00',
                to: '23:00'
            }]
    }, 
    {
        day: 'Nov 12',
        timeList: [
            {
                from: '18:00',
                to: '18:30'
            }, 
            {
                from: '18:30',
                to: '19:00',
                disable: true
            }, 
            {
                from: '19:00',
                to: '19:30'
            }, 
            {
                from: '19:30',
                to: '20:00'
            }, ]
    }
]
const PRODUCT_LIST = [
    {
        id: 'id1',
        img: "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
        name: "Product 1",
        time: 30,
        topic: "Gia đình",
        price: 88888,
        review: 3.5,
        sold: 10000
    },
    {
        id: 'id1',
        img: "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
        name: "Product 1",
        time: 30,
        topic: "Gia đình",
        price: 88888,
        review: 3.5,
        sold: 10000
    },
    {
        id: 'id1',
        img: "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
        name: "Product 1",
        time: 30,
        topic: "Gia đình",
        price: 88888,
        review: 3.5,
        sold: 10000
    },
    {
        id: 'id1',
        img: "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
        name: "Product 1",
        time: 30,
        topic: "Gia đình",
        price: 88888,
        review: 3.5,
        sold: 10000
    },
    {
        id: 'id1',
        img: "https://th.bing.com/th/id/OIP.aiNrntE7HWS0Wg6UKj21jAHaE5?rs=1&pid=ImgDetMain",
        name: "Product 1",
        time: 30,
        topic: "Gia đình",
        price: 88888,
        review: 3.5,
        sold: 10000
    }
]

const CONSULTANT_BRIEF = {
    "Đánh giá": 100,
    "Tỉ lệ phản hồi chat": "90%",
    "Sản phẩm": 20000,
    "Thời gian phản hồi": "Trong vài giờ",
    "Người theo dõi": 500
}

const ProductDetail = () => {
    const [selected, setSelected] = useState(IMAGE_LIST[0])
    const [type, setType] = useState(TYPE_LIST[0])
    const [day, setDay] = useState(TIME_CHOOSE_LIST[0])
    const [time, setTime] = useState(day.timeList[0])
    
    return (
        <div className="p-productDetail">
            <div className="p-productDetail_info">
                <div className="p-productDetail_info--img">
                    <img src={selected} alt="" className="img_selected" />
                    <div className="img_list">
                        { IMAGE_LIST.map((image, index) => <img src={image} alt="" key={index} onClick={() => setSelected(image)}/>)}
                    </div>
                </div>
                <div className="p-productDetail_info--brief">
                    <h2 className="brief_title">Tarot</h2>
                    <div className="brief_description">
                        <div className="brief_description--review">
                            <Star star={3.5}/>
                            <span className="review_total">17 reviews</span>
                            <span className="review_sold">1000 sold</span>
                        </div>
                        <div className="brief_description--price">
                            <span>₫50000</span>
                            <span>-</span>
                            <span>₫100000</span>  
                        </div>
                        <div className="brief_description--type">
                            <span>Type</span>
                            <ul className="type_list">
                                {
                                    TYPE_LIST.map((t, i) => (
                                        <li key={i} onClick={() => setType(t)} className={type === t ? 'active' : ''}>
                                            {t} mins
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="brief_description--timeChoose">
                            <ul className="timeChoose_day">
                                {
                                    TIME_CHOOSE_LIST.map((d, i) => (
                                        <li key={i} onClick={() => setDay(d)} className={day.day === d.day ? 'active' : ''}>{d.day}</li>
                                    ))
                                }
                            </ul>
                            <ul className="timeChoose_time">
                                {
                                    day.timeList.map((t, i) => (
                                        <li key={i} onClick={() => setTime(t)} className={`${time === t ? 'active' : ''} ${t.disable ? 'disable' : ''}`}>
                                            {t.from} - {t.to}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="brief_action">
                        <Button name="Add to cart" type="Type2" icon="cart"/>
                        <Button name="Buy now"/>
                    </div>
                </div>
            </div>
            <div className="p-productDetail_consultant">
                <div className="p-productDetail_consultant--info">
                    <img src="/images/Avatar.jpg" alt="" className="info_avatar" />
                    <div className="info_contact">
                        <h6 className="info_contact--name">Alicia Keys</h6>
                        <div className="info_contact--action">
                            <Button name="Chat" icon="chat"/>
                            <Button name="Shop" icon="cart" type="Type2" />
                        </div>
                    </div>
                </div>
                <ul className="p-productDetail_consultant--brief">
                    {
                        Object.entries(CONSULTANT_BRIEF).map(([key, value]) => (
                            <li key={key}>
                                <span>{key}</span>
                                <span>{value}</span> 
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="p-productDetail_description">
                <p className="p-productDetail_description--title">DESCRIPTION</p>
                <p className="p-productDetail_description--desc">Lorem ipsum dolor sit amet consectetur. Sit arcu nascetur vulputate laoreet vel nibh purus fringilla turpis. Ac augue neque gravida eget semper eu ullamcorper auctor. Nibh gravida turpis aliquam sed turpis in et molestie sit. Posuere malesuada congue quam amet enim aliquet.</p>
            </div>
            <div className="p-productDetail_others">
                <div className="p-productDetail_others--title">
                    <p>Sản phẩm khác của shop</p>
                    <Link to="/">Xem tất cả {">"}</Link>
                </div>
                <ul className="p-productDetail_others--list">
                    {PRODUCT_LIST.map((product, index) => (
                        <ProductCard {...product} key={index}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProductDetail