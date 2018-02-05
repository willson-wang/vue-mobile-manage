<template>
    <li class="ui-detail-list-item">
        <dl class="ui-detail-list-item__content">
            <dd>
                <img src="../../assets/logo.png" alt="">
            </dd>
            <dt>
                <p class="ui-detail-list-item__title">
                    <span>{{item.title}} {{item[label]}}</span>
                    <span></span>
                </p>
                <div v-for="(info, index) in item.list" :key="index">
                    <span>{{info.key}}</span>
                    <span>{{info.value}}</span>
                </div>
            </dt>
        </dl>
    </li>
</template>

<script>
    export default {
        name: 'listDetailItem',
        props: {
            item: {},
            label: {}
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../assets/less/index.less';
    .ui-detail-list-item {
        flex: 0 0 240px;
        display: flex; 
        flex-direction: column;
        padding: 40px 40px 0;
        background-color: @color-white;
        border-bottom: 1px solid @color-bdr; /*no*/
        &__content {
            flex: 1 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            
            >dd {
                flex: 1 0 30%;
                font-size: 0;
                text-align: left;
                >img {
                    width: 160px;
                    height: 160px;
                }
            }
            >dt {
                flex: 1 0 70%;
                display: flex;
                flex-direction: column;
                flex-flow: wrap;
                >p {
                    flex: 1 0 auto;
                    font-size: 30px; /*px*/
                    color: @color-info1;
                    text-align: left;
                }
                >div {
                    flex: 1 0 50%;
                    display: flex;
                    font-size: 24px; /*px*/
                    padding: 11px 0;
                    text-align: left;
                    >span:first-child {
                        flex: 0 0 50%;
                        color: @color-info1;
                    }
                    >span:last-child {
                        flex: 1 0 auto;
                        color: @color-info1;
                    }
                    &:last-child {
                        flex: 1 0 100%;
                            >span:first-child {
                            flex: 0 0 25%;
                        }
                    }
                }
            }
        }
    }
</style>

