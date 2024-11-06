import { validate } from "@/utils/validate"
import { useState } from "react"

type StateType = {
    [ key : string] : string
}

export const useFrom = (rules: any) => {
    const [values, setForm] = useState<StateType>({})
    const [errors, setError] = useState<StateType>({})

    const register = (name: string) => {
        return {
            error: errors[name],
            value: values[name] || '',
            onChange: (ev: any) => setForm({ ...values, [name]: ev.target.value })
        }
    }

    const _validate = () => {
        const errorObject = validate(rules, values)
        setError(errorObject)
        return Object.keys(errorObject).length === 0;
    }

    return {
        values,
        errors,
        register,
        validate: _validate
    }
}