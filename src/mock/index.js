import Mock from 'mockjs';
import loginAPI from './login';
import lossOrderAPI from './loss-order';

Mock.setup({
    // 指定被拦截的 Ajax 请求的响应时间，单位是毫秒
    timeout: '350-600'
});

// 登录接口
Mock.mock(/\/login\/login\/UserLogin/, 'post', loginAPI.loginIn);

// 亏损订单接口
Mock.mock(/\/loss_order\/loss_order_One\/lossOrderList/, 'get', lossOrderAPI.getLossOrderList);
export default Mock;
