const TOKEN_KEY = 'token'

export const setToken = (data: string) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
}
export const getToken = () => {
    const token = localStorage.getItem(TOKEN_KEY)

    if (token && token !== "undefined") {
        return JSON.parse(token)
    }
    return ""
}
export const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}