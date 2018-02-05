<template>
    <li class="ui-index-cell">{{label}}</li>
</template>

<script>
    export default {
        name: 'indexCell',
        props: {
            label: {}
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../../assets/less/index.less';
    .ui-index-cell {
        flex: 0 0 100px;
        background-color: @color-white;
        color: @color-info1;
        font-size: 28px; /*px*/
        border-bottom: 1px solid @color-bdr; /*no*/
        line-height: 100px;
    }
</style>

