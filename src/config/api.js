const { default: axios } = require("axios");

export const api = axios.create()
api.interceptors.response.use((res) => res.data)