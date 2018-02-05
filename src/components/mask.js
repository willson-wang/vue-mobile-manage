import { addClass } from 'utils/dom';
let seed = 1;
let zIndex = 2000;
let arrModal = [];
let instances = {};
const createModal = function (id, newZIndex, parent) {
    let div = document.createElement('div');
    div.id = id;
    arrModal.push(div.id);
    div.className = 'ui-mask';
    div.style.zIndex = newZIndex;
    console.log(parent, document.querySelector(parent));
    document.querySelector(parent).appendChild(div);
    setTimeout(function () {
        addClass(div, 'ui-mask-active');
    }, 20);

    div.addEventListener('touchmove', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    div.addEventListener('click', function () {
        doOnModalClick(id);
    });
};

const removeModal = function (id) {
    const modal = document.getElementById(id);
    modal.removeEventListener('touchmove', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    modal.removeEventListener('click', function () {
        doOnModalClick(id);
    });
    modal.parentNode.removeChild(modal);
    let index = arrModal.indexOf(id);
    arrModal.splice(index, 1);
};

const doOnModalClick = function (id) {
    const instance = getInstance(id);
    instance && instance.close();
};

const getInstance = function (id) {
    return instances[id];
};

const register = function (id, instance) {
    if (id && instance) {
        instances[id] = instance;
    }
};

const deregister = function (id) {
    if (id) {
        instances[id] = null;
        delete instances[id];
    }
};

const nextZIndex = function () {
    return zIndex++;
};

export default {
    props: {
        appendTo: {
            type: String,
            default: 'body'
        }
    },
    data () {
        return {
            modalId: 'modal' + seed++,
            zIndex: 0
        };
    },
    methods: {
        openModal () {
            createModal(this.modalId, nextZIndex(), this.appendTo);
            this.zIndex = nextZIndex();
        },
        closeModal () {
            removeModal(this.modalId);
        }
    },
    beforeMount () {
        register(this.modalId, this);
    },
    beforeDestroy () {
        deregister(this.modalId);
    }
};
