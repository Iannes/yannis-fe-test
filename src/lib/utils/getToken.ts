import { AxiosResponse } from "axios";
import { ENDPOINT } from "./fetchAllPosts";
import { Values } from "../contexts/AuthProvider";
import { axiosInstance } from "./axiosInstance";

// in production CLIENT_ID would be in a .env file
const CLIENT_ID = "ju16a6m81mhid5ue1z3v2g0uh";

export type RequestPayload = {
  client_id: string;
  email: string;
  name: string;
};

type RequestId = {
  request_id: string;
};

export type ResponseData = {
  meta: RequestId;
  data: RequestPayload;
};

export const getToken = async (values: Values) => {
  try {
    return await axiosInstance.post<
      RequestPayload,
      AxiosResponse<ResponseData>
    >(ENDPOINT.REGISTER, {
      client_id: CLIENT_ID,
      ...values,
    });
  } catch (error: any) {
    console.error(`There was an error with login: ${error.message}`);
    return error?.message;
  }
};
