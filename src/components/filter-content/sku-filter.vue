<template>
    <ul class="ui-sku-filter">
        <li v-for="item in listItems" :key="item.key">{{item.value}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'skuFilter',
        computed: {
            listItems () {
                return [
                    {key: 1, value: '推荐排序'},
                    {key: 2, value: '实用库存最多'},
                    {key: 3, value: '实用库存最少'},
                    {key: 4, value: '可用库存最多'},
                    {key: 5, value: '可用库存最少'}
                ];
            }
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../assets/less/index.less';
    .ui-sku-filter {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 40px;
        justify-content: center;
        text-align: left;
        border-top: 1px solid @color-bdr; /*no*/
        >li {
            flex: 0 0 90px;
            line-height: 90px;
            color: @color-info1;
            font-size: 26px; /*px*/
            border-bottom: 1px solid @color-bdr; /*no*/
        }
    }
</style>

