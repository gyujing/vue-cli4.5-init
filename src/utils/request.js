import axios from "axios";
// import { Message } from "element-ui";
var pro = "production" == process.env.NODE_ENV;
var baseUrl = pro
  ? window.____SYS____.BASE_URL
  : process.env.VUE_APP_API_URL;

const service = axios.create({
  baseURL: baseUrl, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000, // request timeout
  headers: { "Content-Type": "application/json" },
});

service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;
    const statusCode = response.status;

    if (statusCode !== 200) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    // var errorMessage = error.message;
    // Message({
    //   message: errorMessage,
    //   type: "error",
    //   duration: 3 * 1000,
    // });
    return Promise.reject(error);
  }
);

export default service;
