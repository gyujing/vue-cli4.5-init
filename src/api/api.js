import request from '@/utils/request'

var pro = "production" == process.env.NODE_ENV;
var baseUrl = pro
  ? window.____SYS____.BASE_URL
  : process.env.VUE_APP_API_URL;


export function getApi(data) {
  return request({
    url: baseUrl + "/list",
    method: "post",
    data,
  })
}


export function postApi(data) {
  return request({
    url: baseUrl + "/delete",
    method: "get",
    params: data,
    Headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    }
  })
}


export default {
  getApi,
  postApi
}
