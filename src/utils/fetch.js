/*
 * @Author: peter
 * @Date: 2017-10-12 10:14:45
 * @Last Modified by: peter
 * @Last Modified time: 2018-01-10 16:55:36
 */
import axios from 'axios';
import qs from 'qs';
import store from '@/store';
// import { messageBox } from './message-box';
// import router from '@/router';

const service = axios.create({
    // baseUrl: process.env.BASE_API,
    timeout: '5000'
});

service.interceptors.request.use(config => {
    store.commit('TOGGLE_LOADING', true);
    return config;
}, error => {
    console.log(error);
    Promise.reject(error);
});

service.interceptors.response.use(response => {
    store.commit('TOGGLE_LOADING', false);
    return response;
}, error => {
    console.log(error);
    if (error.request.status === 401) {
        // messageBox({
        //     title: '系统消息',
        //     message: '当前登录已失效！',
        //     type: 'info',
        //     customClass: 'ui-message-box-active',
        //     callback: function (action, instance) { // action返回按钮的类型 instance为messageBox的实例
        //         if (action === 'confirm') {
        //             console.log('确认');
        //             router.push({ path: '/login' });
        //         } else {
        //             console.log('取消');
        //             router.push({ path: '/login' });
        //         }
        //         console.log(instance);
        //         console.log('openMessageBox');
        //     }
        // });
    }
    store.commit('TOGGLE_LOADING', false);
    return Promise.reject(error);
});

service.getAjax = function (url, params) {
    return service.get(url, {
        params: params
    });
};

service.postAjax = function (url, params) {
    return service.post(url, qs.stringify(params));
};

export default service;
