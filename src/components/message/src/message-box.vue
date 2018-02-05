<template>
    <transition name="messagebox">
        <div class="ui-messagebox is-default" :style="{zIndex: zIndex}" v-show="visible">
            <div class="ui-messagebox__title">{{title}}</div>
            <div class="ui-messagebox__content">
                <slot>{{message}}</slot>
            </div>
            <div class="ui-messagebox__opration">
                <button type="button" v-if="type === 'alert'" @click="close">{{comfirmText}}</button>
                <div v-if="type === 'comfirm'">
                    <span>{{cancelText}}</span>
                    <span>{{comfirmText}}</span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import mask from '../../mask';
    export default {
        name: 'messageBox',
        props: {
            title: {
                type: String,
                default: '提示'
            },
            comfirmText: {
                type: String,
                default: '确认'
            },
            cancelText: {
                type: String,
                default: '取消'
            }
        },
        mixins: [mask],
        data () {
            return {
                visible: false
            };
        },
        watch: {
            visible (val) {
                if (val) {
                    this.openModal();
                } else {
                    this.$el.addEventListener('transitionend', this.destroyElement);
                    this.closeModal();
                }
            }
        },
        methods: {
            close () {
                this.visible = false;
            },
            destroyElement () {
                this.$el.removeEventListener('transitionend', this.destroyElement);
                this.$el.parentNode.removeChild(this.$el);
            }
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../../assets/less/index.less';
    .ui-messagebox {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 540px;
        height: 312px;
        display: flex;
        flex-direction: column;
        background-color: @color-white;
        padding-top: 50px;
        border-radius: 26px;
        transition: all .2s;
        transform: translate3d(-50%, -50%, 0);
        &__title {
            flex: 0 0 34px;
            font-size: 34px; /*px*/
            line-height: 1;
            color: @color-info1;
            font-weight: bold;
            text-align: center;
        }
        &__content {
            padding: 26px 128px;
            flex: 1;
            font-size: 26px; /*px*/
        }
        &__opration {
            flex: 0 0 auto;
            display: flex;
            >button {
                flex: 0 0 100%;
                line-height: 88px;
                background-color: @color-white;
                color: @color-primary;
                border: 0;
                border-top: 1px solid @color-bdr; /*no*/
                border-radius: 0 0 26px 26px;
                outline: none;
            }
            >div {
                flex: 1 0 auto;
                display: flex;
                align-items: center;
                border-top: 1px solid @color-bdr; /*no*/
                >span {
                    flex: 0 0 50%;
                    line-height: 88px;
                    text-align: center;
                    color: @color-primary;
                    font-size: 34px; /*px*/
                }
                >span:first-child {
                    border-right: 1px solid @color-bdr; /*no*/
                }
            }
        }
    }
    .messagebox-enter {
        opacity: 0;
        transform: translate3d(-50%, -50%, 0) scale(0.7);
    }
    .messagebox-leave-active {
        opacity: 0;
        transform: translate3d(-50%, -50%, 0) scale(0.9);
    }
</style>

