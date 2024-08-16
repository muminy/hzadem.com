import { config } from ":/constants/site"
import axios from "axios"

export const instance = axios.create({
  baseURL: config.site_api,
})
