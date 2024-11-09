import './style.scss'

type TagProps = {
    icon: string,
    content: string
}

const Tag = ({icon, content} : TagProps) => {
    return (
        <div className="a-tag">
            <img src={icon} alt="" />
            <span>{content}</span>
        </div>
    )
}

export default Tag