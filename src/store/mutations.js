/*
 * @Author: peter
 * @Date: 2017-10-12 10:14:20
 * @Last Modified by: peter
 * @Last Modified time: 2018-01-15 13:54:59
 */
import * as types from './mutations-type';
import * as Storage from '@/utils/storage';

export default {
    [types.SAVE_USERINFO] (state, userInfo) {
        state.userInfo = userInfo;
        Storage.setSessionStorage('userInfo', JSON.stringify(userInfo));
    },
    [types.TOGGLE_LOADING] (state, flag) {
        state.showLoading = flag;
    },
    [types.TOGGLE_SIDEBAR] (state, flag) {
        state.showSideBar = flag;
    },
    [types.TOGGLE_FILTER_CONTENTINFO] (state, info) {
        state.filterContentInfo = info;
    }
};
