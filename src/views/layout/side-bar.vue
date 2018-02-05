<template>
    <transition name="side-bar">
        <div class="ui-side-bar" v-show="visible" :style="{zIndex: zIndex}">
            <div class="ui-side-bar__content">
                <quick-menu></quick-menu>
                <!-- <channel-manage></channel-manage> -->
            </div>
        </div>
    </transition>
</template>

<script>
    import quickMenu from 'components/quick-menu';
    import channelManage from 'components/channel-manage';
    import mask from 'components/mask.js';
    export default {
        name: 'sideBar',
        mixins: [mask],
        props: {
            value: {}
        },
        data () {
            return {
                visible: false
            };
        },
        components: {
            quickMenu,
            channelManage
        },
        watch: {
            value (val) {
                this.visible = val;
            },
            visible (val) {
                this.$emit('input', val);
                if (val) {
                    this.openModal();
                } else {
                    this.closeModal();
                }
            }
        },
        methods: {
            close () {
                this.$store.commit('TOGGLE_SIDEBAR', false);
            }
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../assets/less/index.less';
    .ui-side-bar {
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        width: 80%;
        transition: all .5s ease;
        transform: translate3d(0, 0, 0);
        &__content {
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            right: 0;
            background-color: #fff;
        }
    }
    .side-bar-enter {
        transform: translate3d(100%, 0, 0);
    }
    .side-bar-leave-active {
        transform: translate3d(100%, 0, 0);
    }
</style>

