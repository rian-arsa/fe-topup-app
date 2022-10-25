import axios from "axios";
import { callAPI } from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "v1";

export const getFeaturedGames = async () => {
  const URL = "player/landingpage";

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
};

export const getGameDetail = async (id) => {
  const URL = `player/${id}/detail`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
};

export const getGameCategories = async () => {
  const URL = `player/category`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
};

export const setCheckout = async (data) => {
  const url = `${ROOT_API}/${API_VERSION}/player/checkout`;

  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
};

export const getOverview = async () => {
  const url = `${ROOT_API}/${API_VERSION}/player/dashboard`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
};
