import { AxiosResponse } from "axios";
import { useState } from "react"

export const useAsync = (promise: (...data: any) => Promise<AxiosResponse>) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [status, setStatus] = useState('idle')

    const excute = async (...data: any) => {
        try {
            setLoading(true)
            setStatus('pending')
            const res: any = await promise(...data)
            setData(res)
            setStatus('success')
            return res
        } catch (err: any) {
            setError(err)
            setStatus('error')
        } finally {
            setLoading(false)
        }
    }

    return {
        loading, data, error, status, excute
    }
}