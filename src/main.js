// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'lib-flexible/flexible.js';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueI18n from 'vue-i18n';
import './assets/less/index.less';
import store from './store';
import './permission';
import initGlobalDirective from './directive';
import initGlobalFilter from './filter';
import CONFIG from './assets/js/config';
import './mock';
import 'assets/css/iconfont.css';
import FastClick from 'fastclick';

import messageBox from 'components/message';
import toast from 'components/toast';
import qcIndexList from 'components/index-list';
import qcIndexSection from 'components/index-section';
import qcIndexCell from 'components/index-cell';
import Scroll from 'components/scroll';

import 'babel-polyfill';

Vue.config.productionTip = false;
FastClick.attach(document.body);

Vue.use(MintUI);
Vue.use(messageBox);
Vue.use(toast);
Vue.use(qcIndexList);
Vue.use(qcIndexSection);
Vue.use(qcIndexCell);
Vue.use(Scroll);

// 注册i18n插件
Vue.use(VueI18n);

// 注册全局指令
initGlobalDirective(Vue);

// 注册全局过滤器
initGlobalFilter(Vue);

// 配置i18n语言包
const i18n = new VueI18n({
    locale: CONFIG.lang,
    messages: {
        'zh-CN': require('./assets/i18n/zh').default,
        'en-US': require('./assets/i18n/en').default
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    i18n,
    store,
    components: { App }
});
