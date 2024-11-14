import ProductCard from "@/components/molecules/ProductCard";
import "./index.scss";
import Field from "@/components/atoms/Field";
import { useEffect, useState } from "react";
import { productService } from "@/services/product.service";

const Product = () => {
  const [value, setValue] = useState("");
  const changeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res: any = await productService.getAll("");
    if (res) setProductList(res);
  };

  return (
    <div className="p-product">
      <div className="p-product_search">
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
      <ul className="p-product_list">
        {productList.map((product: any, index) => (
          <li key={index}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
