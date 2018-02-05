<template>
    <transition name="toast">
        <div class="ui-toast" v-show="visible" :style="{top: top, left: left}">
            <p v-if="iconClass" class="ui-toast__icon">
                <i class=""></i>
            </p>
            <p class="ui-toast__message">
                {{message}}
            </p>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'toast',
        props: {
            iconClass: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                visible: false,
                timer: null,
                top: null,
                left: null
            };
        },
        watch: {
            visible (val) {
                if (!val) {
                    this.$el.addEventListener('transitionend', this.destroyElement);
                }
            }
        },
        methods: {
            destroyElement () {
                this.$el.removeEventListener('transitionend', this.destroyElement);
                this.$el.parentNode.removeChild(this.$el);
            }
        },
        mounted () {
            const _this = this;
            if (this.duration > 0) {
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    _this.visible = false;
                }, this.duration);
            }

            switch (this.position) {
                case 'top':
                    this.top = '10%';
                    break;
                case 'bottom':
                    this.top = '90%';
                    break;
                case 'center':
                    break;
            }
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../../assets/less/index.less';
    .ui-toast {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        padding: 20px 10px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 20px;
        transition: all .3s;
        min-width: 100px;
        min-height: 100px;
        &__icon {
            
        }
        &__message {
            font-size: 26px; /*px*/
            color: @color-white;
            text-align: center;
            min-height: 60px;
            line-height: 60px;
        }
    }

    .toast-enter {
        opacity: 0;
        transform: translate3d(-50%, -50%, 0) scale(0.7);
    }
    .toast-leave-active {
        opacity: 0;
        transform: translate3d(-50%, -50%, 0) scale(0.7);
    }
</style>

