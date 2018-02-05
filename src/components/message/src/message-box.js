import Vue from 'vue';

let MessageBoxConstructor = Vue.extend(require('./message-box.vue').default);

let instance;
let instances = [];
let seed = 1;

function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key);
};

function isVNode (node) {
    return typeof node === 'object' && hasOwn(node, 'componentOptions');
};

var MessageBox = function (options) {
    if (Vue.prototype.$isServer) return;
    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }

    let userClose = options.onClose;
    let id = 'messagebox_' + seed++;

    options.onClose = function () {
        MessageBox.close(id, userClose);
    };

    instance = new MessageBoxConstructor({
        data: options
    });

    instance.id = id;

    if (isVNode(instance.message)) {
        instance.$slots.default = [instance.message];
        instance.message = null;
    }

    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.vm.visible = true;
    instance.dom = instance.vm.$el;
    instances.push(instance);
    return instance.vm;
};

['alert', 'comfirm'].forEach(type => {
    MessageBox[type] = options => {
        if (typeof options === 'string') {
            options = {
                message: options
            };
        }
        options.type = type;
        return MessageBox(options);
    };
});

MessageBox.close = function (id, userOnClose) {
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

MessageBox.closeAll = function () {
    for (let i = instances.length - 1; i >= 0; i--) {
        instances[i].close();
    }
};

export default MessageBox;
