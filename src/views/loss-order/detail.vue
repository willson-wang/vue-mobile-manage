<template>
    <div class="ui-loss-order-detail">
        <div class="ui-loss-order-detail__content">
            <detail-list>
                <detail-list-item v-for="(val, index) in lossOrderDetailItems" :key="index"  :item="val" label="orderNo"></detail-list-item>
            </detail-list>
            <div class="ui-loss-order-detail__form">
                <div>
                    <span>店铺账号</span>
                    <span>66481</span>
                </div>
                <div>
                    <span>店铺账号</span>
                    <span>5554152、8452412</span>
                </div>
            </div>
            <div class="ui-loss-order-detail__form ui-loss-order-detail__money">
                <div>
                    <span>订单总金额</span>
                    <span>$6.24</span>
                </div>
                <div>
                    <span>订单总费用</span>
                    <span>$8.26</span>
                </div>
                <div>
                    成交费0.1，平台交易费0.1，成本费5.4，业务损耗费0.8，运费0.8，海外层头程费用0.1(元)
                </div>
            </div>
            <div class="ui-loss-order-detail__form ui-loss-order-detail__package">
                <div>
                    <span>包裹号</span>
                    <span>PK51421152256523</span>
                </div>
            </div>
        </div>
        <div class="ui-loss-order-detail__opration">
            <span>
                亏损: 
                <span>￥-6.08</span>
            </span>
            <span @click.stop="handlerQuick">立即处理</span>
        </div>
        <mt-action-sheet v-model="sheetVisible" :action-list="actionList" cancel-text="取消"></mt-action-sheet> 
    </div>
</template>

<script>
    import Title from '../layout/title';
    import MultiTags from '../layout/multi-tags';
    import detailList from 'components/detail-list/list';
    import detailListItem from 'components/detail-list/list-item';
    import mtActionSheet from 'components/action-sheet';
    export default {
        name: 'lossOrderDetail',
        components: {
            Title,
            MultiTags,
            detailList,
            detailListItem,
            mtActionSheet
        },
        data () {
            return {
                sheetVisible: false,
                actionList: [
                    {
                        key: 0,
                        value: '标记延迟',
                        method: this.handlerAutoDelay
                    },
                    {
                        key: 1,
                        value: '手动标记已处理',
                        method: this.handlerManualDelay
                    }
                ]
            };
        },
        computed: {
            lossOrderDetailItems () {
                return [
                    {
                        orderId: this.params.id,
                        orderNo: this.params.info.orderNo,
                        time: this.params.info.time,
                        title: '订单号',
                        list: [{
                            key: '订单状态',
                            value: '备货中'
                        },
                        {
                            key: '出货状态',
                            value: '未出货'
                        },
                        {
                            key: '时间',
                            value: '08:26'
                        },
                        {
                            key: '商品重量',
                            value: '190g'
                        },
                        {
                            key: '物流方式',
                            value: '深圳申通快递'
                        }
                        ]
                    }
                ];
            }
        },
        methods: {
            handlerQuick () {
                this.sheetVisible = true;
            },
            handlerAutoDelay (item, index) {
                console.log(item, index);
            },
            handlerManualDelay (item, index) {
                console.log(item, index);
            }
        },
        created () {
            console.log(this.$route);
            this.params = this.$route.params;
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../assets/less/index.less';
    .ui-loss-order-detail {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        height: 100%;
        &__content {
            display: flex;
            flex: 1;
            flex-direction: column;
            overflow-y: auto;
        }
        &__form {
            flex: 0 0 auto;
            display: flex;
            flex-direction: column;
            padding: 0 40px;
            background-color: @color-white;
            >div {
                flex: 0 0 90px;
                display: flex;
                align-items: center;
                color: @color-info2;
                font-size: 28px;
                border-bottom: 1px solid @color-bdr;
                text-align: left;
                >span {
                    flex: 0 0 30%;
                    text-align: left;
                }
                >span:last-child {
                    color: @color-info1;
                    flex: 1 0 auto;
                }
            }
        }
        &__money {
            margin: 20px 0;
            >div:last-child {
                flex: 0 0 112px;
                font-size: 24px;
            }
        }
        &__opration {
            border-top: 1px solid @color-bdr;
            flex: 0 0 auto;
            display: flex;
            >span {
                flex: 1 0 60%;
                font-size: 32px;
                color: @color-info2;
                font-weight: bold;
                background-color: @color-white;
                line-height: 89px;
                text-align: left;
                text-indent: 40px;
            } 
            >span:last-child {
                flex: 1 0 40%;
                color: #fff;
                background-color: @color-primary;
                text-align: center;
                text-indent: 0px;
            } 
        }
    }
</style>

