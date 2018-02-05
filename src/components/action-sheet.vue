<template>
    <transition name="action-sheet">
        <div class="ui-action-sheet" v-show="visible" :style="{zIndex: zIndex}">
            <ul>
                <li v-for="item in actionList" :key="item.key" @click.stop="itemClick(item, item.key)">{{item.value}}</li>
            </ul>
            <div v-if="cancelText">
                <button  type="button" @click.stop="visible = false">{{cancelText}}</button>
            </div>
        </div>
    </transition>
</template>

<script>
    import mask from './mask.js';
    export default {
        name: 'actionSheet',
        props: {
            actionList: {
                type: Array
            },
            cancelText: {
                type: String
            },
            value: {}
        },
        mixins: [mask],
        data () {
            return {
                visible: false
            };
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
            itemClick (item, index) {
                if (item.method && typeof item.method === 'function') {
                    item.method(item, index);
                }
                this.visible = false;
            },
            close () {
                this.visible = false;
            }
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../assets/less/index.less';
    .ui-action-sheet {
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 710px;
        display: flex;
        flex-direction: column;
        transform: translate3d(0, 0, 0);
        transition: all .5s;
        >ul {
            flex: 0 0 auto;
            display: flex;
            flex-direction: column;
            >li {
                flex: 0 0 114px;
                font-size: 40px; /*px*/
                color: @color-info1;
                line-height: 114px;
                background-color: @color-white;
                border-bottom: 1px solid @color-bdr; /*no*/
            }
            >li:first-child {
                border-top-left-radius: 26px;
                border-top-right-radius: 26px;
            }
            >li:last-child {
                border-bottom-left-radius: 26px;
                border-bottom-right-radius: 26px;
                border-bottom: 0; 
            }
        }
        >div {
            flex: 0 0 auto;
            display: flex;
            margin-top: 16px;
            >button {
                flex: 1 0 100%;
                line-height: 114px;
                color: @color-primary;
                border-radius: 26px;
                font-size: 40px; /*px*/
                font-weight: bold;
                background-color: @color-white;
                border: 0;
                outline: none;
            }
        }
    }
    .action-sheet-enter {
        transform: translate3d(0, 100%, 0);
    }
    .action-sheet-leave-active {
        transform: translate3d(0, 100%, 0);
    }
</style>

