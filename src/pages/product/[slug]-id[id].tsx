import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { slug } = useParams();
    const [ name, id ] = slug?.split('-id')!;
    
    return (
        <div>Product detail</div>
    )
}

export default ProductDetail