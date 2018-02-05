/*
 * @Author: peter
 * @Date: 2017-10-12 10:13:01
 * @Last Modified by: peter
 * @Last Modified time: 2018-01-12 16:06:41
 */
import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/login/login';
import Home from '@/views/layout/home';
import Layout from '@/views/layout/layout';
import NotFound from '@/views/not-found/404';
import LossOrder from '@/views/loss-order';
import LossOrderDetail from '@/views/loss-order/detail';
import oweOrder from '@/views/owe-order/owe-order';

Vue.use(Router);

export const constantRouterMap = [{
    path: '/login',
    component: Login,
    hidden: true
}, {
    path: '/home',
    component: Layout,
    redirect: '/home/home_one',
    hidden: true,
    name: 'home',
    title: '首页',
    children: [
        { path: 'home_one', component: Home, name: 'home_one' }
    ]
}, {
    path: '/loss_order',
    component: Layout,
    redirect: '/loss_order/loss_order_list',
    hidden: true,
    name: 'loss_order',
    title: '亏损订单',
    children: [
        { path: 'loss_order_list', component: LossOrder, name: 'loss_order_list' },
        { path: 'loss_order_detail', component: LossOrderDetail, name: 'loss_order_detail' }
    ]
}, {
    path: '/owe_order',
    component: Layout,
    redirect: '/owe_order/owe_order_list',
    hidden: true,
    name: 'owe_order',
    title: '欠货订单',
    children: [
        { path: 'owe_order_list', component: oweOrder, name: 'owe_order_list' },
        { path: 'owe_order_detail', component: oweOrder, name: 'owe_order_detail' }
    ]
}, {
    path: '/error',
    name: '错误页面',
    component: Layout,
    redirect: '/error/404',
    hidden: true,
    children: [
        { path: '404', component: NotFound }
    ]
}, {
    path: '/',
    redirect: '/home'
}, {
    path: '*',
    redirect: '/error'
}];

export default new Router({ routes: constantRouterMap });
