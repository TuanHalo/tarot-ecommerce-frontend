const TOKEN_KEY = 'token'

export const setToken = (data: string) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
}
export const getToken = () => {
    return JSON.parse(localStorage.getItem(TOKEN_KEY)!)
}
export const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}