import MessgeBox from './src/message-box';

MessgeBox.install = function (Vue) {
    Vue.prototype.$messageBox = MessgeBox;
};

export default MessgeBox;
