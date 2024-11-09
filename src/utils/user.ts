const USER_KEY = 'user'

export const setUser = (data: string | null) => {
    localStorage.setItem(USER_KEY, JSON.stringify(data))
}
export const getUser = () => {
    const user = localStorage.getItem(USER_KEY)

    if (user && user !== "undefined")
        return JSON.parse(user)

    return null
}
export const clearUser = () => {
    localStorage.removeItem(USER_KEY)
}