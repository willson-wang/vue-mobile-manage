<template>
    <li class="ui-list-item" @click="linkTo">
        <div class="ui-list-item__title">
            <span>{{item.title}}</span>
            <span>{{item.time}}</span>
        </div>
        <dl class="ui-list-item__content">
            <dd>
                <div v-for="(info, index) in item.list" :key="index">
                    <span>{{info.key}}</span>
                    <span>{{info.value}}</span>
                </div>
            </dd>
            <dt>
                <img src="../../assets/logo.png" alt="">
            </dt>
        </dl>
    </li>
</template>

<script>
    export default {
        name: 'listItem',
        props: {
            item: {},
            label: {},
            path: {}
        },
        methods: {
            linkTo () {
                this.$emit('click', {id: this.item.orderId, info: this.item});
            }
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../assets/less/index.less';
    .ui-list-item {
        flex: 1 0 314px;
        display: flex; 
        flex-direction: column;
        padding: 0 40px;
        background-color: @color-white;
        margin-top: 20px;
        &__title {
            flex: 1 0 80px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid @color-bdr; /*no*/
            span:first-child {
                font-size: 30px; /*px*/
                color: @color-info1;
                font-weight: bold;
            }
            span:last-child {
                font-size: 22px; /*px*/
                color: @color-info2;
            }
        }
        &__content {
            flex: 1 0 234px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            >dd {
                flex: 1 0 70%;
                display: flex;
                flex-direction: column;
                >div {
                    flex: 1 0 auto;
                    display: flex;
                    font-size: 24px; /*px*/
                    padding: 11px 0;
                    text-align: left;
                    >span:first-child {
                        flex: 0 0 30%;
                        color: @color-info2;
                    }
                    >span:last-child {
                        flex: 1 0 auto;
                        color: @color-info1;
                    }
                }
            }
            >dt {
                flex: 1 0 30%;
                font-size: 0;
                >img {
                    width: 160px;
                    height: 160px;
                }
            }
        }
    }
</style>

