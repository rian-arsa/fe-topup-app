import axios from "axios";
import { callAPI } from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "v1";

export const signUp = async (data) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
};

export const signIn = async (data) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
};
