const USER_KEY = 'user'

export const setUser = (data: string | null) => {
    localStorage.setItem(USER_KEY, JSON.stringify(data))
}
export const getUser = () => {
    return JSON.parse(localStorage.getItem(USER_KEY)!)
}
export const clearUser = () => {
    localStorage.removeItem(USER_KEY)
}