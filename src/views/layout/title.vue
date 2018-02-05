<template>
    <div class="ui-title">
        畅玩天下
    </div>
</template>

<script>
    export default {
        name: 'titles'
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../assets/less/index.less';
    .ui-title {
        flex: 0 0 78px;
        font-size: 44px; /*px*/
        color: @color-white;
        background-color: @color-primary;
        text-align: left;
        padding: 0 40px;
    }
</style>

