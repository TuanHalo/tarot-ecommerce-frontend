import './style.scss'

type CheckboxProps = {
    message: string
}

const Checkbox = ({ message }: CheckboxProps) => {
    return (
        <div className="a-checkbox">
           <input type="checkbox" name="" id="" /> 
           <label>{ message }</label>
        </div>
    )
}

export default Checkbox