import { paramURL } from '@/utils';
import Mock from 'mockjs';

export default {
    getLossOrderList: (config) => {
        const param = paramURL(config.url);
        let result = {};

        const value = [];
        const count = 300;
        const start = (Number(param.offset) - 1) * Number(param.limit);
        const end = Number(param.offset) * Number(param.limit);

        for (let i = 0; i < count; i++) {
            value.push(Mock.mock({
                orderId: '@increment',
                orderNo: 'CO' + '@now("day", "yyyyMMdd")' + 'LZD',
                time: '@now("day", "yyyyMMdd")',
                list: [{
                    key: '店铺账号',
                    value: 'AUTO MOTO'
                },
                {
                    key: 'SKU',
                    value: '@float(0, 100000, 2, 4)'
                },
                {
                    key: '亏损金额',
                    value: '￥' + '@float(0, 100, 2, 4)'
                },
                {
                    key: '物流方式',
                    value: '@cword("零一光明清溪还看电视U盾很关键啊", 8)'
                }
                ]
            }));
        }
        result.value = value.slice(start, end);
        result.pagingData = {
            limit: +param.limit,
            offset: +param.offset,
            total: count
        };
        return result;
    }
};
