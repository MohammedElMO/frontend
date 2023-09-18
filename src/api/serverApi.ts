import axios from "axios"

export const server = axios.create({
  baseURL: "https://galleryapp-z1mc.onrender.com",
})
