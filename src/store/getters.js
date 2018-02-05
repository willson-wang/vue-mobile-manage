/*
 * @Author: peter
 * @Date: 2017-10-12 10:13:17
 * @Last Modified by: peter
 * @Last Modified time: 2018-01-15 13:55:12
 */

// 全局的getters，所有的getters都定义在这里
export default {
    userInfo: state => state.userInfo,
    showLoading: state => state.showLoading,
    showSideBar: state => state.showSideBar,
    filterContentInfo: state => state.filterContentInfo,
    lossOrderList: state => state.lossOrder.lossOrderList
};
