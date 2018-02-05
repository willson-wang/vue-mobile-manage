/*
 * @Author: peter
 * @Date: 2018-01-11 16:47:18
 * @Last Modified by: peter
 * @Last Modified time: 2018-01-11 16:50:38
 */

import fetch from 'utils/fetch';
import CONFIG from '@/assets/js/config';

// 请求亏损订单列表
export function getLossOrderList (queryData) {
    const data = Object.assign({}, CONFIG.ajaxData, queryData);
    return fetch.getAjax('/loss_order/loss_order_One/lossOrderList', data);
};
