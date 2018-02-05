<template>
    <div class="ui-loss-order">
        <scroll ref="lossOrderList" 
                :data="lossOrderItems.value" 
                :pullDownRefresh="{txt: '更新完成'}" 
                :pullUpLoad="{txt: {more: '加载更多', noMore: '暂无更多数据'}}" 
                @pullingDown="handlerPullingDown" 
                @pullingUp="handlerPullingUp"
                >
            <list ref="content">
                <list-item v-for="(val, index) in lossOrderItems.value" :key="index" :item="val" label="orderNo" @click="linkTo"></list-item>
            </list>
        </scroll>
    </div>
</template>

<script>
    import Title from '../layout/title';
    import MultiTags from '../layout/multi-tags';
    import FilterNav from '../layout/filter-nav';
    import List from 'components/list/list';
    import ListItem from 'components/list/list-item';
    import {mapActions, mapGetters} from 'vuex';
    export default {
        name: 'lossOrder',
        components: {
            Title,
            MultiTags,
            FilterNav,
            List,
            ListItem
        },
        computed: {
            ...mapGetters([
                'lossOrderList'
            ])
        },
        data () {
            return {
                lossOrderItems: [],
                limit: 20
            };
        },
        methods: {
            ...mapActions([
                'GetLossOrderList'
            ]),
            getLossOrderList (param) {
                this.GetLossOrderList(param).then(response => {
                    console.log(response);
                    this.lossOrderItems = response;
                }).catch(error => {
                    console.log(error);
                });
            },
            linkTo ({id, info}) {
                this.$router.push({
                    name: 'loss_order_detail',
                    params: {
                        id: id,
                        info: info
                    }
                });
            },
            handlerPullingDown () {
                console.log('handlerPullingDown');
                this.getLossOrderList();
            },
            handlerPullingUp () {
                console.log('handlerPullingUp');
                this.limit += 20;
                this.getLossOrderList({
                    limit: this.limit,
                    offset: 1
                });
            },
            _calculateHeight () {
                // const list = this.$refs.content.$el.children;
                // if (!list) return;
                // let height = 0;
                // for (let i = 0; i < list.length; i++) {
                //     height += list[i].clientHeight;
                // }
                // this.$refs.content.$el.style.height = height + 'px';
            }
        },
        watch: {
            lossOrderItems () {
                this.$nextTick(() => {
                    this._calculateHeight();
                });
            }
        },
        created () {
            if (!this.lossOrderList.value) {
                this.getLossOrderList();
            } else {
                this.lossOrderItems = this.lossOrderList;
            }
        },
        mounted () {
            this.$nextTick(() => {
                this._calculateHeight();
            });
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../assets/less/index.less';

    .ui-loss-order {
        // flex: 1;
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        height: 100%;

    }
</style>

