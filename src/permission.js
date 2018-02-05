/*
 * @Author: peter
 * @Date: 2017-12-04 18:53:10
 * @Last Modified by:   peter
 * @Last Modified time: 2017-12-04 18:53:10
 */
import router from './router';
import store from './store';
import * as Storage from './utils/storage';

import NProgress from 'nprogress'; // 水平进度条
import 'nprogress/nprogress.css'; // 水平进度条样式

router.beforeEach((to, from, next) => {
    console.log(store);
    var user = store.getters.userInfo;
    if (!user.username) {
        user = Storage.getSessionStorage('userInfo') ? JSON.parse(Storage.getSessionStorage('userInfo')) : {};
    }
    if (!user.username && to.path !== '/login') {
        next({ path: '/login' });
        Storage.removeSessionStorage('userInfo');
    } else {
        NProgress.start();
        next();
    }
});

router.afterEach((to, from, next) => {
    NProgress.done();
});
