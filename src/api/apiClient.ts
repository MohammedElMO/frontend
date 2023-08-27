import axios from "axios"

export const imageInstance = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    Authorization: "jKamvrEXFgJS8slsQ1xnFuPlMibUwi2O7VAg65n3l3ww6CIf9KI5fGLX",
  },
})
export const videoInstance = axios.create({
  baseURL: "https://api.pexels.com/videos",
  headers: {
    Authorization: import.meta.env.PEXEL_API_KEY,
  },
})
