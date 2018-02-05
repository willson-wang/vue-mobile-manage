import * as types from '../../mutations-type';
import { getLossOrderList } from '@/api/loss-order';
const lossOrder = {
    state: {
        lossOrderList: {}
    },
    mutations: {
        [types.SAVE_LOSS_ORDER_LIST] (state, data) {
            state.lossOrderList = data;
        }
    },
    actions: {
        GetLossOrderList ({ commit }, queryData) {
            if (!queryData) {
                queryData = {
                    limit: 20,
                    offset: 1
                };
            }
            return new Promise((resolve, reject) => {
                getLossOrderList(queryData).then(response => {
                    commit(types['SAVE_LOSS_ORDER_LIST'], response.data);
                    resolve(response.data);
                }).catch(error => {
                    reject(error);
                });
            });
        }
    }
};

export default lossOrder;
