<template>
    <div class='ui-top-nav clearFix'>
        <div class="ui-top-nav__normal" v-show="visible">
            <div class="ui-top-nav__back">
                <span @click="backToLevel">&lt; 返回</span>
                <span>关闭</span>
            </div>
            <div class="ui-top-nav__title">
                畅玩天下
            </div>
            <div class="ui-top-nav-icon" @click="openSearch">查询</div>
        </div>
        <div class="ui-top-nav__search" v-show="!visible">查询</div>
        <Title v-show="showTitle"></Title>
        <multi-tags v-if="showMulti"></multi-tags>
        <filter-nav v-if="showFilter"></filter-nav>
    </div>
</template>

<script>
    import Title from '../layout/title';
    import MultiTags from '../layout/multi-tags';
    import FilterNav from '../layout/filter-nav';
    import CONFIG_SHOW from 'assets/js/config-show';
    export default {
        data () {
            return {
                visible: true
            };
        },
        components: {
            Title,
            MultiTags,
            FilterNav
        },
        computed: {
            showTitle () {
                return true;
            },
            showMulti () {
                const name = this.$route.name;
                const visible = CONFIG_SHOW[name] && CONFIG_SHOW[name].showMulti;
                return visible;
            },
            showFilter () {
                const name = this.$route.name;
                const visible = CONFIG_SHOW[name] && CONFIG_SHOW[name].showFilter;
                console.log(CONFIG_SHOW[name]);
                return visible;
            }
        },
        methods: {
            backToLevel () {
                this.$router.go(-1);
            },
            openSearch () {
                this.$messageBox({
                    type: 'comfirm',
                    message: '王二狗大战李大麻子！'
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../assets/less/index.less';
    .ui-top-nav {
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        background-color: @color-primary;
        &__normal {
            display: flex;
            flex: 0 0 92px;
            align-items: center;
            justify-content: space-between;
            padding: 0 40px;
            color: #fff;
        }
        &__back {
            font-size: 30px; /*px*/
        }
        &__title {
            font-size: 36px; /*px*/
            font-weight: bold;
        }
        &__icon {
            font-size: 30px; /*px*/
        }
    }

</style>

