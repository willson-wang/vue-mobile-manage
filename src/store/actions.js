/*
 * @Author: peter
 * @Date: 2017-10-12 10:13:13
 * @Last Modified by: peter
 * @Last Modified time: 2018-01-10 16:54:08
 */
import { loginIn } from '@/api/login';
import * as types from './mutations-type';
export default {
    LoginIn ({ commit }, userInfo) {
        const username = userInfo.username.trim();
        return new Promise((resolve, reject) => {
            loginIn(username, userInfo.password).then(response => {
                const data = response.data;
                commit(types['SAVE_USERINFO'], data);
                resolve();
            }).catch(error => {
                reject(error);
            });
        });
    }
};
