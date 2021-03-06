import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { useMessage } from 'naive-ui'
import qs from 'qs'
import { showMessage } from "./status"

let axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    // headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/x-www-form-urlencoded"
    // },
    // transformRequest: [
    //     function (data) {
    //         delete data.Authorization;
    //         data = qs.stringify(data);
    //         return data;
    //     }
    // ]
})
//axios 实例拦截响应
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.headers.authorization) {
            localStorage.setItem('app_token', response.headers.authorization);
        } else {
            if (response.data && response.data.token) {
                localStorage.setItem('app_token', response.data.token);
            }
        }
        if (response.status === 200) {
            return response;
        } else {
            showMessage(response.status);
            return response;
        }
    },
    //请求失败
    (error: any) => {
        const { response } = error;
        if (response) {
            showMessage(response.status);
            return Promise.reject(response.data);
        } else {
            // ElMessage.warning("网络连接异常，请稍后再试！");
            const m = useMessage();
            m.error("网络连接异常，请稍后再试！")
        }
    }
);

//axios实例拦截请求
axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);
export const userlogin = (userName: String, userPassword: String) => {
    return axiosInstance.post('/login', qs.stringify({ userName, userPassword }))//参数里面是url地址
}