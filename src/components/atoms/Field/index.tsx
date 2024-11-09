import './style.scss'

type FieldProps = {
    iconName : string,
    placeholder: string,
    value: string,
    error: string,
    onChange: (ev: any) => void,
    isPassword?: boolean
}

const Field = ({ iconName, placeholder, value, error, onChange, isPassword = false } : FieldProps) => {
    return (
        <div className='a-field'>
            <input type={isPassword ? "password" : "text"} placeholder={placeholder} onChange={onChange} value={value}/>
            <img src={"/images/" + iconName + '.svg'} alt="" />
            { error && <span>{ error }</span>}
        </div>
    )
}

export default Field