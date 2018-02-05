/*
 * @Author: peter
 * @Date: 2017-10-12 10:12:29
 * @Last Modified by: peter
 * @Last Modified time: 2018-01-11 10:42:10
 */
import fetch from '@/utils/fetch';

export function loginIn (userName, password) {
    const data = {
        username: userName,
        password: password,
        warehouse_id: '119'
    };

    return fetch.postAjax('/login/login/UserLogin', data);
}

export function loginOut () {
    return fetch({
        url: '/login/loginout',
        method: 'post'
    });
}
