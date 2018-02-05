/*
 * @Author: peter
 * @Date: 2017-12-04 18:52:20
 * @Last Modified by: peter
 * @Last Modified time: 2018-01-10 16:03:45
 */
export default {
    focus: {
        bind: function (el, binding, vnode) {
            console.log('bind' + el);
            console.log('bind' + binding);
            console.log('bind' + vnode);
        },
        inserted: function (el, binding, vnode) {
            console.log('inserted' + el);
            console.log('inserted' + binding);
            console.log('inserted' + vnode);
        },
        update: function (el, binding, vnode) {
            console.log('update' + el);
            console.log('update' + binding);
            console.log('update' + vnode);
        },
        unbind: function (el, binding, vnode) {
            console.log('unbind' + el);
            console.log('unbind' + binding);
            console.log('unbind' + vnode);
        }
    },
    setColor: {
        inserted: function (el) {
            el.style.backgroundColor = 'yellow';
        }
    },
    clickOutSide: {
        bind: function (el, binding, vnode) {
            el.event = function (event) {
                if (!(el === event.target || el.contains(event.target))) {
                    vnode.context[binding.expression](event);
                }
            };
            document.body.addEventListener('click', el.event);
        },
        unbind: function (el) {
            document.body.removeEventListener('click', el.event);
        }
    }
};
