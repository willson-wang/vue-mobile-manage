<template>
    <div class="ui-filters-filter">
        <div class="ui-filters-filter__content">
            <ul class="ui-filters-filter__menu">
                <li v-for="item in menuList" :key="item.key" @click="currentIndex = item.key" :class="{active: currentIndex === item.key}">
                    <span>.</span>
                    {{item.value}}
                </li>
            </ul>
            <div class="ui-filters-filter__lists">
                <div class="ui-filters-filter__item" v-show="currentIndex === 0">
                    0
                </div>
                <div class="ui-filters-filter__item" v-show="currentIndex === 1">
                    1
                </div>
                <div class="ui-filters-filter__item" v-show="currentIndex === 2">
                    <div class="ui-panel">
                        <p class="ui-panel__title">
                            <span>所属部门</span>
                            <span @click="openPanelOne = !openPanelOne">全部</span>
                        </p>
                        <div class="ui-panel__content" v-show="openPanelOne">
                            <span>研发部</span>
                            <span>销售一部</span>
                            <span>UED</span>
                            <span>商务部</span>
                        </div>
                    </div>
                    <div class="ui-panel">
                        <p class="ui-panel__title">
                            <span>开发人员</span>
                            <span @click="openPanelTwo = !openPanelTwo">全部</span>
                        </p>
                        <div class="ui-panel__content ui-three-column" v-show="openPanelTwo">
                            <span>李倩</span>
                            <span>陈明</span>
                            <span>林月如</span>
                            <span>柳月梅</span>
                            <span>李小白</span>
                            <span>王大力</span>
                        </div>
                    </div>
                    <div class="ui-panel">
                        <p class="ui-panel__title">
                            <span>仓库</span>
                            <span @click="openPanelThree = !openPanelThree">全部</span>
                        </p>
                        <div class="ui-panel__content" v-show="openPanelThree"> 
                            <span>英国仓库</span>
                            <span>龙岗仓库</span>
                            <span>深圳仓库</span>
                            <span>东莞仓库</span>
                        </div>
                    </div>
                </div>
                <div class="ui-filters-filter__item" v-show="currentIndex === 3">
                    3
                </div>
                <div class="ui-filters-filter__item" v-show="currentIndex === 4">
                    4
                </div>
                <div class="ui-filters-filter__item" v-show="currentIndex === 5">
                    5
                </div>
                <div class="ui-filters-filter__item" v-show="currentIndex === 6">
                    6
                </div>
            </div>
        </div>
        <div class="ui-filters-filter__opration">
            <span>取消</span>
            <span>确定</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'filtersFilter',
        data () {
            return {
                currentIndex: 0,
                openPanelOne: true,
                openPanelTwo: true,
                openPanelThree: true
            };
        },
        computed: {
            menuList () {
                return [
                    {
                        key: 0,
                        value: '全部产品'
                    },
                    {
                        key: 1,
                        value: '产品类型'
                    },
                    {
                        key: 2,
                        value: '所属部门'
                    },
                    {
                        key: 3,
                        value: '开发人员'
                    },
                    {
                        key: 4,
                        value: '仓库'
                    },
                    {
                        key: 5,
                        value: '创建人'
                    },
                    {
                        key: 6,
                        value: '业务类型'
                    }
                ];
            }
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../assets/less/index.less';
    .ui-filters-filter {
        display: flex;
        flex-direction: column;
        width: 100%;
        border-top: 1px solid @color-bdr; 
        &__content {
            flex: 1 0 auto;
            display: flex;
        }
        &__menu {
            flex: 0 0 200px;
            display: flex;
            flex-direction: column;
            background-color: @color-body-bg;
            >li {
                flex: 0 0 90px;
                font-size: 24px;
                color: @color-info1;
                line-height: 90px;
                text-align: left;
                text-indent: 30px;
            }

            .active {
                background-color: @color-white;
            }
        }
        &__lists {
            flex: 0 0 550px;
            display: flex;
        }
        &__item {
            flex: 1 0 auto;
            display: flex;
            flex-direction: column;
            .ui-panel {
                flex: 1 0 auto;
                display: flex;
                flex-direction: column;
                padding: 0 30px;
                &__title {
                    flex: 0 0 84px;
                    line-height: 84px;
                    font-size: 24px; /*px*/
                    color: @color-info2;
                    text-align: left;
                    >span:last-child {
                        float: right;
                    }
                }
                &__content {
                    flex: 1 0 auto;
                    display: flex;
                    justify-content: space-between;
                    flex-flow: wrap;
                    transform: translate3d(0, 0, 0);
                    transition: all .5s ease;
                    >span {
                        flex: 0 0 235px;
                        line-height: 60px;
                        border: 1px solid @color-bdr; /*no*/
                        color: @color-info1;
                        font-size: 24px; /*px*/
                        border-radius: 5px;
                        margin-bottom: 20px;
                    }
                }
                .ui-three-column {
                    >span {
                        flex: 0 0 150px;
                    }
                }
            }
        }
        &__opration {
            flex: 1 0 auto;
            display: flex;
            align-items: center;
            >span {
                flex: 0 0 50%;
                font-size: 32px; /*px*/
                color: @color-info1;
                line-height: 90px;
                background-color: @color-white;
            }
            >span:last-child {
                background-color: @color-primary;
                color: @color-white;
            }
            >span:first-child {
                border-top: 1px solid @color-bdr; /*no*/
            }
        }
    }

    .panel-enter {
        transform: translate3d(0, -100%, 0);
    }
    .panel-leave-active {
        transform: translate3d(0, -100%, 0);
    }
</style>

