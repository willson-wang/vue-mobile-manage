import Toast from './src/toast.js';

Toast.install = function (Vue) {
    Vue.prototype.$toast = Toast;
};

export default Toast;
