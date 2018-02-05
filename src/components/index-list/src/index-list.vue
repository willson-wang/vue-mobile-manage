<template>
    <div class="ui-index-list">
        <div class="ui-index-list__content" ref="content" :style="{height: currentHieght + 'px'}">
            <slot></slot>
        </div>
        <div class="ui-index-list__nav" @touchstart="handlerTouchStart">
            <ul>
                <li v-for="item in navList" :key="item">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getScreenWidthAndHeight} from 'utils';
    export default {
        name: 'indexList',
        props: {
            height: {}
        },
        data () {
            return {
                navList: [],
                currentHieght: this.height,
                indexEle: {},
                firstIndexEle: null
            };
        },
        methods: {
            fixedFirstIndexEle () {
                const rect = this.firstIndexEle.getBoundingClientRect();
                if (!rect.width) {
                    const childIndexEle = this.$refs.content.getElementsByTagName('p');
                    const childArr = Array.from(childIndexEle);
                    for (let i = 0; i < childArr.length; i++) {
                        const rect = childArr[i].getBoundingClientRect();
                        if (rect.width) {
                            this.firstIndexEle = childArr[i];
                            break;
                        }
                    }
                };
            },
            handlerTouchStart (e) {
                if (!e.target.nodeName === 'LI') return;
                const index = e.target.innerText;
                this.setScrollTop(index);
                this.$toast({
                    message: index,
                    duration: 500,
                    appendTo: '.ui-index-list'
                });
            },
            setScrollTop (index) {
                const rect = this.indexEle[index] && this.indexEle[index].getBoundingClientRect();
                const top = rect.top;
                const width = rect.width;
                if (!width) return;
                this.fixedFirstIndexEle();
                const firstEleTop = this.firstIndexEle && this.firstIndexEle.getBoundingClientRect().top;
                this.$refs.content.scrollTop = top - firstEleTop;
            }
        },
        mounted () {
            if (!this.currentHieght) {
                window.scrollTo(0, 0);
                this.currentHieght = getScreenWidthAndHeight().height - this.$refs.content.getBoundingClientRect().top;
            }

            const childIndexEle = this.$refs.content.getElementsByTagName('p');
            Array.from(childIndexEle).forEach((item) => {
                this.indexEle[item.innerText] = item;
            });

            this.firstIndexEle = childIndexEle.length && childIndexEle[0];
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../../assets/less/index.less';
    .ui-index-list {
        position: relative;
        display: flex;
        justify-content: flex-start;
        &__content {
            flex: 0 0 90%;
            display: flex;
            flex-direction: column;
            overflow: auto;
        }
        &__nav {
            flex: 0 0 10%;
            display: flex;
            flex-direction: column;
            padding-left: 10px;
            >ul {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-size: 24px; /*px*/
                color: @color-primary;
                >li {
                    padding: 3px 0;
                }
            }
        }
    }
</style>