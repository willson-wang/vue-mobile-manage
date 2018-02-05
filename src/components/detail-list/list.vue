<template>
    <ul class="ui-detail-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: 'list'
    };
</script>

<style lang="less" scoped>
    .ui-detail-list {
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
    }
</style>

