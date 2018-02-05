<template>
    <div class="ui-warehouse-filter">
        <div class="ui-warehouse-filter__content">
            <p>使用库存</p>
            <div>
                <span>库存最多</span>
                <span>库存最少</span>
            </div>
        </div>
        <div class="ui-warehouse-filter__content">
            <p>可用库存</p>
            <div>
                <span>库存最多</span>
                <span>库存最少</span>
            </div>
        </div>
        <div class="ui-warehouse-filter__opration">
            <span>取消</span>
            <span>确定</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'warehouseFilter'
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../assets/less/index.less';
    .ui-warehouse-filter {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border-top: 1px solid @color-bdr; /*no*/
        &__content {
            flex: 1 0 auto;
            display: flex;
            flex-direction: column;
            padding: 0 40px;
            >p {
                flex: 0 0 84px;
                line-height: 84px;
                font-size: 24px; /*px*/
                color: @color-info2;
                text-align: left;
            }
            >div {
                flex: 1 0 auto;
                display: flex;
                justify-content: space-between;
                >span {
                    flex: 0 0 315px;
                    line-height: 60px;
                    border: 1px solid @color-bdr; /*no*/
                    color: @color-info1;
                    font-size: 24px; /*px*/
                }
            }
            
        }
        &__content:first-child {
            margin-bottom: 20px;
        }
        &__opration {
            flex: 1 0 auto;
            display: flex;
            align-items: center;
            margin-top: 50px;
            >span {
                flex: 0 0 50%;
                font-size: 32px; /*px*/
                color: @color-info1;
                line-height: 90px;
                background-color: @color-white;
            }
            >span:last-child {
                background-color: @color-primary;
                color: @color-white;
            }
            >span:first-child {
                border-top: 1px solid @color-bdr; /*no*/
            }
        }
    }
</style>

