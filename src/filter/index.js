/*
 * @Author: peter
 * @Date: 2017-12-04 18:52:36
 * @Last Modified by: peter
 * @Last Modified time: 2018-01-10 16:04:30
 */
import * as filters from './filters';

export default function initGlobalFilter (Vue) {
    Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key]);
    });
}
