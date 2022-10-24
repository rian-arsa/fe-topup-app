import axios from "axios";

export const callAPI = async ({ url, method, data }) => {
  const response = await axios({
    method,
    url,
    data,
  }).catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const res = {
    error: false,
    message: "Login success",
    data: response.data.data,
  };
  return res;
};
