<template>
    <ul class="ui-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: 'list'
    };
</script>

<style lang="less" scoped>
    .ui-list {
        display: flex;
        flex: 1;
        flex-direction: column;
        overflow-y: auto;
    }
</style>

