import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MOGAZOA_API_BASE_URL,
});

export default instance;
