/*
 * @Author: peter
 * @Date: 2017-10-12 10:13:22
 * @Last Modified by: peter
 * @Last Modified time: 2018-01-11 17:06:37
 */
import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';
import lossOrder from './modules/loss-order';

import Vue from 'vue';
import Vuex from 'vuex';
// 启用state变化输出日记
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NOODENV !== 'production';

export default new Vuex.Store({
    modules: {
        lossOrder
    },
    state,
    mutations,
    getters,
    actions,
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
