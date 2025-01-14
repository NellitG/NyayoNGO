// import { ROOT_URL } from "../../config/urls";
import axios from "axios";
import { useLocalStorage } from "@vueuse/core";

/**Import API URL from .env */
const ROOT_URL = `${import.meta.env.VITE_API_URL}`;

/**Capture the access token from local storage */
const access_token = useLocalStorage("x-token", null);

/**Create an axios instance */
const axiosInstance = axios.create({
  baseURL: ROOT_URL,
});

/**Create a request interceptor  */
axiosInstance.interceptors.request.use(
  (config) => {
    //Add token to header if exists
    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token.value}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    // Handle 401 Unauthorized error
    if (error.response.status === 401) {
      // Perform logout or redirect to the login page
      console.log("Unauthorized access. Logging out...");
      // router.push("/login"); // Redirect to login page
    }

    // Handle 403 Forbidden error
    if (error.response.status === 403) {
      // Perform logout or redirect to the login page
      console.log("Access forbidden. Logging out...");
      // router.push("/login"); // Redirect to login page
    }

    return Promise.reject(error);
  }
);

/**Global method to get */
export const get = (uri) => {
  return axiosInstance.get(`${uri}`);
};

/**Global method to post */
export const post = (uri, payload) => {
  return axiosInstance.post(`${uri}`, payload);
};

/**Global method to delete */
export const deleteItem = (uri) => {
  return axiosInstance.delete(`${uri}`);
};
