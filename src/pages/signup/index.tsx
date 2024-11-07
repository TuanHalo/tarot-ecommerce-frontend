import Field from '@/components/atoms/Field'
import './style.scss'
import Checkbox from '@/components/atoms/Checkbox'
import Button from '@/components/atoms/Button'
import { Link } from 'react-router-dom'
import { PATH } from '@/config/path'
import { useFrom } from '@/hooks/useForm'
import { regexp, required } from '@/utils/validate'
import { userService } from '@/services/user.service'

const SignUp = () => {
    const { values, register, validate } = useFrom({
        name: [
            required()
        ],
        email: [
            required(),
            regexp('email')
        ],
        password: [
            required()
        ],
        confirmPassword: [
            required()
        ]
    })

    const onSubmitHandler = async (ev: any) => {
        ev.preventDefault();

        if (validate()) {
            const user = await userService.signup({
                name: values.name,
                email: values.email,
                password: values.password
            })
        }
    }

    return (
        <div className="p-registration">
            <form className='p-registration_form' onSubmit={onSubmitHandler}>
                <h3 className='p-registration_form--title'>REGISTRATION</h3>
                <div className="p-registration_form--field">
                    <Field iconName='person' placeholder='Enter your name' {...register('name')}/>
                    <Field iconName='mail' placeholder='Enter your email' {...register('email')}/>
                    <Field iconName='key' placeholder='Enter your password' isPassword {...register('password')}/>
                    <Field iconName='key' placeholder='Confirm your password' isPassword {...register('confirmPassword')}/> 
                </div>
                <Checkbox message='I accept all terms and permissions'/>
                <Button name='Register now'/>
                <div className="p-registration_form--login">
                    <span>Already had an account?</span>
                    <Link to={PATH.signin}>Login now</Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp