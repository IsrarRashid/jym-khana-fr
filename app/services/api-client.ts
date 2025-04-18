import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
export const CanceledError = axios.Cancel;

const token = Cookies.get("token");

export interface ErrorResponse {
  responseCode: number;
  responseMessage: string;
}

export interface ErrorResponse1 {
  errors: {
    model: string[];
    $: string[];
  };
  message: string;
}

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export { AxiosError };
