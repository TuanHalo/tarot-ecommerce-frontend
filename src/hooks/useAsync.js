import { useEffect } from "react";
import { useState } from "react"

export const useAsync = (promise) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [status, setStatus] = useState('idle')

    const excute = async (...data) => {
        try {
            setLoading(true)
            setStatus('pending')
            const res = await promise(...data)
            setData(res)
            setStatus('success')
            return res
        } catch (err) {
            setError(err)
            setStatus('error')
        } finally {
            setLoading(false)
        }
    }

    return {
        loading, data, erorr, status, excute
    }
}