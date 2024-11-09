import ProductCard from "@/components/molecules/ProductCard"
import './style.scss'
import Field from "@/components/atoms/Field"
import { useState } from "react"

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
]

const Product = () => {
    const [value, setValue] = useState("")
    const changeHandler = (ev: any) => {
        setValue(ev.target.value);
    }

    return (
        <div className="p-product">
            <div className="p-product_search">
                <select name="filter" id="filter">
                    <option value="best">Best Available</option>
                    <option value="featured">Featured Advisors</option>
                </select>
                <Field iconName="search" placeholder="Search" onChange={changeHandler} value={value}/>
            </div>
            <ul className="p-product_list">
                {PRODUCT_LIST.map((product, index) => (
                    <ProductCard {...product} key={index}/>
                ))}
            </ul>
        </div>
    )
}

export default Product