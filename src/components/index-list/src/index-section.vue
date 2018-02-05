<template>
    <div class="ui-index-section" v-show="isRender">
        <p class="ui-index-section__title" >{{index}}</p>
        <ul class="ui-index-section__list" ref="list">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'indexSection',
        props: {
            index: {}
        },
        data () {
            return {
                isRender: true
            };
        },
        mounted () {
            this.$parent.navList.push(this.index);
            if (!this.$refs.list.children.length) {
                this.isRender = false;
            }
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../../assets/less/index.less';
    .ui-index-section {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        &__title {
            flex: 0 0 50px;
            background-color: @color-body-bg;
            font-size: 24px; /*px*/
            color: @color-info1;
            line-height: 50px;
        }
        &__list {
            flex: 0 0 auto;
            display: flex;
            flex-direction: column;
        }
    }
</style>
