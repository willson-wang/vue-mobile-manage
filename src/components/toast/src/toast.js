import Vue from 'vue';

const ToastConstructor = Vue.extend(require('./toast.vue').default);

let instance;
let instances = [];
let seed = 1;
let zIndex = 3000;
const nextZIndex = function () {
    return zIndex++;
};

function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key);
};

function isVNode (node) {
    return typeof node === 'object' && hasOwn(node, 'componentOptions');
};

var Toast = function (options) {
    if (Vue.prototype.$isServer) return;
    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }

    let userClose = options.onClose;
    let id = 'toast_' + seed++;

    options.onClose = function () {
        Toast.close(id, userClose);
    };

    instance = new ToastConstructor({
        data: options
    });

    instance.id = id;

    if (isVNode(instance.message)) {
        instance.$slots.default = [instance.message];
        instance.message = null;
    }

    instance.vm = instance.$mount();
    instance.vm.appendTo = instance.vm.appendTo || 'body';
    document.querySelector(instance.vm.appendTo).appendChild(instance.vm.$el);
    instance.vm.visible = true;
    instance.dom = instance.vm.$el;
    instance.dom.style.zIndex = nextZIndex();
    instances.push(instance);
    return instance.vm;
};

Toast.close = function (id, userOnClose) {
    for (let i = 0, len = instances.length; i < len; i++) {
        if (id === instances[i].id) {
            if (typeof userOnClose === 'function') {
                userOnClose(instances[i]);
            }
            instances.splice(i, 1);
            break;
        }
    }
};

Toast.closeAll = function () {
    for (let i = instances.length - 1; i >= 0; i--) {
        instances[i].close();
    }
};

export default Toast;
