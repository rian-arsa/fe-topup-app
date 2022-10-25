import { callAPI } from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "v1";

export const getOverview = async () => {
  const url = `${ROOT_API}/${API_VERSION}/player/dashboard`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
};

export const getTransaction = async (status) => {
  let filter = "";
  if (status !== "all") {
    filter = `?status=${status}`;
  }

  const url = `${ROOT_API}/${API_VERSION}/player/history${filter}`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
};

export const getTransactionDetail = async (id, token) => {
  const url = `${ROOT_API}/${API_VERSION}/player/history/${id}/detail`;

  return callAPI({
    url,
    method: "GET",
    serverToken: token,
  });
};
