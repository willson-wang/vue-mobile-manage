<template>
    <ul class="ui-filter-nav" @click="openFilterContent">
        <li data-key="sku">SKU</li>
        <li data-key="warehouse">仓库</li>
        <li data-key="filters">筛选</li>
    </ul>
</template>

<script>
    export default {
        name: 'filterNav',
        methods: {
            openFilterContent (e) {
                const target = e.target;
                if (target.nodeName === 'UL') return;
                let visible = true;
                if (target.getAttribute('data-key') === this.$store.state.filterContentInfo.type && this.$store.state.filterContentInfo.visible) {
                    visible = false;
                }
                this.$store.commit('TOGGLE_FILTER_CONTENTINFO', {
                    visible: visible,
                    type: target.getAttribute('data-key')
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../assets/less/index.less';

    .ui-filter-nav {
        flex: 0 0 90px;
        display: flex;
        align-items: center;
        background-color: @color-white;
        >li {
            flex: 1 0 auto;
            font-size: 28px; /*px*/
            color: @color-info1;
            
        }
        >li:not(:last-child) {
            border-right: 1px solid @color-bdr; /*no*/
        }
    }
</style>

