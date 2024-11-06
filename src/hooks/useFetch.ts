import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useState } from "react"

export const useFetch = (promise: () => Promise<AxiosResponse>, dependencyList = []) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [status, setStatus] = useState('idle')

    useEffect(() => {
        fetchData()
    }, [dependencyList])

    const fetchData = async () => {
        try {
            setLoading(true)
            setStatus('pending')
            const res: any = await promise()
            setData(res)
            setStatus('success')
        } catch (err: any) {
            setError(err)
            setStatus('error')
        } finally {
            setLoading(false)
        }
    }

    return {
        loading, data, error, status
    }
}