import { useParams } from "react-router-dom"

const ConsultantDetail = () => {
    const { slug } = useParams();
    const [ name, id ] = slug?.split('-id')!;

    return (
        <div>Consultant detail</div>
    )
}

export default ConsultantDetail