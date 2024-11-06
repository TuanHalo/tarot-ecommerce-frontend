import './style.scss'

type ButtonProps = {
    name: string,
    type?: 'Yellow' | 'White'
}

const Button = ({ name, type = 'Yellow' } : ButtonProps) => {
    return <button className={`a-button ${type.toLowerCase()}`}>{ name }</button>
}

export default Button