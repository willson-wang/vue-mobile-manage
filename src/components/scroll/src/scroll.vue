<template>
    <div ref="wrapper" class="ui-scroll">
        <div class="scroll-content">
            <slot></slot>
            <div ref="pullup" class="ui-scroll__pullup" v-if="pullUpLoad">
                <div class="before-trigger" v-if="!isPullUpLoad">
                    <span>{{pullUpTxt}}</span>
                </div>
                <div class="after-trigger" v-else>
                    <div>
                        <i class="icon-loading"></i>
                    </div>
                </div>
            </div>
        </div>
        <div ref="pulldown" class="ui-scroll__pulldown" v-if="pullDownRefresh" :style="pullDownStyle">
            <div class="before-trigger" v-if="beforePullDown">
                <bubble :y="bubbleY"></bubble>
            </div>
            <div class="after-trigger" v-else>
                <div v-if="isPullingDown" class="loading">
                    <div>
                        <i class="icon-loading"></i>
                    </div>
                </div>
                <div v-else><span>{{refreshTxt}}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    import Bubble from '../../bubble';
    const DIRECTION_V = 'vertical';
    const DIRECTION_H = 'horizontal';
    export default {
        name: 'scroll',
        components: {
            Bubble
        },
        props: {
            // 传入的数据，用于判断是否需要刷新refresh
            data: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            // scroll事件的触发类型
            /**
            * 1 滚动的时候会派发scroll事件，会截流。
            * 2 滚动的时候实时派发scroll事件，不会截流。
            * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
            */
            probeType: {
                type: Number,
                default: 1
            },
            click: {
                type: Boolean,
                default: true
            },
            // 是否派发滚动事件
            listenScroll: {
                type: Boolean,
                default: false
            },
            // 是否派发滚动之前事件
            listenBeforeScroll: {
                type: Boolean,
                default: false
            },
            // 滚动方向
            direction: {
                type: String,
                default: DIRECTION_V
            },
            // 是否开启默认滚动条
            scrollbar: {
                type: null,
                default: false
            },
            // 是否开启下拉刷新
            pullDownRefresh: {
                type: null,
                default: false
            },
            // 是否开启上拉加载更多
            pullUpLoad: {
                type: null,
                default: false
            },
            // 垂直滚动时纵轴方向初始化位置
            startY: {
                type: Number,
                default: 0
            },
            // 当数据更新后，刷新scroll的延时。
            refreshDelay: {
                type: Number,
                default: 20
            },
            // 是否开启双向滚动
            freeScroll: {
                type: Boolean,
                default: false
            },
            // 是否监听mouseWheel事件
            mouseWheel: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                // 下拉刷新之前
                beforePullDown: true,
                // 是否开启bounding动画
                isRebounding: false,
                // 正在下拉刷新
                isPullingDown: false,
                // 正在上拉加载
                isPullUpLoad: false,
                // 确认上拉加载时还有数据展示
                pullUpDirty: true,
                // 设置上拉刷新时的top值
                pullDownStyle: '',
                // 设置气泡在Y方向上的值
                bubbleY: 0,
                imgLoading: require('static/img/loading.gif')
            };
        },
        computed: {
            // 上拉加载时显示的文字
            pullUpTxt () {
                const moreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more;
                const noMoreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore;
                return this.pullUpDirty ? moreTxt : noMoreTxt;
            },
            // 下拉刷新时的文字
            refreshTxt () {
                return this.pullDownRefresh && this.pullDownRefresh.txt;
            }
        },
        methods: {
            initScroll () {
                if (!this.$refs.wrapper) return;
                // BScroll的参数
                let options = {
                    probeType: this.probeType,
                    click: this.click,
                    scrollY: this.freeScroll || this.direction === DIRECTION_V,
                    scrollX: this.freeScroll || this.direction === DIRECTION_H,
                    scrollbar: this.scrollbar,
                    pullDownRefresh: this.pullDownRefresh,
                    pullUpLoad: this.pullUpLoad,
                    startY: this.startY,
                    freeScroll: this.freeScroll,
                    mouseWheel: this.mouseWheel
                };
                // 初始化BScroll
                this.scroll = new BScroll(this.$refs.wrapper, options);
                // 派发scroll事件
                if (this.listenScroll) {
                    this.scroll.on('scroll', (pos) => {
                        this.$emit('scroll', pos);
                    });
                }
                // 派发beforeScrollStart事件
                if (this.listenBeforeScroll) {
                    this.scroll.on('beforeScrollStart', () => {
                        this.$emit('beforeScrollStart');
                    });
                }
                // 初始化下拉刷新
                if (this.pullDownRefresh) {
                    this._initPullDownRefresh();
                }
                // 初始化上拉加载
                if (this.pullUpLoad) {
                    this._initPullUpLoad();
                }
            },
            // 代理BScroll的一些方法
            disable () {
                this.scroll && this.scroll.disable();
            },
            enable () {
                this.scroll && this.scroll.enable();
            },
            // 目的重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
            refresh () {
                this.scroll && this.scroll.refresh();
            },
            // scrollTo(x, y, time, easing)滚动到指定的位置
            scrollTo () {
                this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
            },
            // scrollToElement(el, time, offsetX, offsetY, easing)滚动到指定的目标元素
            scrollToElement () {
                this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
            },
            // 销毁 better-scroll，解绑事件
            destroy () {
                this.scroll && this.scroll.destroy();
            },
            forceUpdate (dirty) {
                // 如果开启下拉刷新且已经完成
                if (this.pullDownRefresh && this.isPullingDown) {
                    this.isPullingDown = false;
                    this._reboundPullDown().then(() => {
                        this._afterPullDown();
                    });
                } else if (this.pullUpLoad && this.isPullUpLoad) {
                    // 如果开启上拉加载且数据已加载完成
                    this.isPullUpLoad = false;
                    this.scroll.finishPullUp();
                    this.pullUpDirty = dirty;
                    this.refresh();
                } else {
                    this.refresh();
                }
            },
            _initPullDownRefresh () {
                // 派发下拉刷新事件
                this.scroll.on('pullingDown', () => {
                    this.beforePullDown = false;
                    this.isPullingDown = true;
                    this.$emit('pullingDown');
                });
                this.scroll.on('scroll', (pos) => {
                    // 动态设置bubbleY及pullDownStyle的位置
                    if (this.beforePullDown) {
                        this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop);
                        this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`;
                    } else {
                        this.bubbleY = 0;
                    }
                    if (this.isRebounding) {
                        this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`;
                    }
                });
            },
            _initPullUpLoad () {
                // 派发下拉加载
                this.scroll.on('pullingUp', () => {
                    this.isPullUpLoad = true;
                    this.$emit('pullingUp');
                });
            },
            _reboundPullDown () {
                const {stopTime = 600} = this.pullDownRefresh;
                return new Promise((resolve) => {
                    setTimeout(() => {
                        this.isRebounding = true;
                        // 当下拉刷新数据加载完毕后，需要调用finishPullDown此方法告诉 better-scroll 数据已加载。
                        this.scroll.finishPullDown();
                        resolve();
                    }, stopTime);
                });
            },
            _afterPullDown () {
                // 上拉刷新且数据加载完成之后
                setTimeout(() => {
                    this.pullDownStyle = `top:${this.pullDownInitTop}px`;
                    this.beforePullDown = true;
                    this.isRebounding = false;
                    this.refresh();
                }, this.scroll.options.bounceTime);
            }
        },
        watch: {
            data (val) {
                console.log(val);
                setTimeout(() => {
                    this.forceUpdate(true);
                }, this.refreshDelay);
            }
        },
        created () {
            this.pullDownInitTop = -50;
        },
        mounted () {
            this.$nextTick(() => {
                this.initScroll();
            });
        },
        beforeDestroy () {
            this.destroy();
        }
    };
</script>

<style lang="less" scoped>
    .ui-scroll {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;

        &__pulldown {
            position: absolute;
            width: 100%;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all;
            .after-trigger {
                margin-top: 10px;
                i {
                    font-size: 35px;
                }
            }
        }
        &__pullup {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 16px 0;
            .after-trigger {
                i {
                    font-size: 35px;
                }
            }
        }
    }
</style>



