<template>
    <ul class="ui-multi-tag">
        <li>亏损订单</li>
        <li>待处理订单</li>
        <li>SKU库存管理</li>
        <li @click="showChannelManage">+</li>
    </ul>
</template>

<script>
    export default {
        name: 'multiTags',
        methods: {
            showChannelManage () {
                this.$store.commit('TOGGLE_SIDEBAR', true);
            }
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../assets/less/index.less';

    .ui-multi-tag {
        flex: 0 0 90px;
        display: flex;
        line-height: 90px;
        align-items: stretch;
        background-color: @color-primary;
        padding: 0 40px;
        >li {
            flex: 1 0 auto;
            font-size: 26px; /*px*/
            color: @color-white;
            border-bottom: 4px solid @color-white; /*no*/
        }
    }
</style>

