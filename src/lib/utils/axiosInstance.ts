import axios from "axios";

const BASE_URL = "https://api.supermetrics.com/assignment";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
export { axiosInstance };
