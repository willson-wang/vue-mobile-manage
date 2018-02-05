<template>
    <transition name="filter-content">
        <div class="ui-filter-content" v-show="visible" :style="{zIndex: zIndex}">
            <sku-filter v-if="type === 'sku'"></sku-filter>
            <warehouse-filter v-if="type === 'warehouse'"></warehouse-filter>
            <filters-filter v-if="type === 'filters'"></filters-filter>
        </div>
    </transition>
</template>

<script>
    import skuFilter from './sku-filter.vue';
    import warehouseFilter from './warehouse-filter.vue';
    import filtersFilter from './filters-filter.vue';
    import {mapGetters} from 'vuex';
    import mask from '../mask.js';
    export default {
        name: 'filterContent',
        components: {
            skuFilter,
            warehouseFilter,
            filtersFilter
        },
        mixins: [mask],
        props: {
            value: {}
        },
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
        computed: {
            ...mapGetters([
                'filterContentInfo'
            ]),
            type () {
                console.log(this.filterContentInfo);
                return this.filterContentInfo.type;
            }
        },
        methods: {
            close () {
                // this.visible = false;
                this.$store.commit('TOGGLE_FILTER_CONTENTINFO', {
                    visible: false,
                    type: ''
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../assets/less/index.less';
    .ui-filter-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: @color-white;
        z-index: 3;
        transform: translate3d(0, 0, 0);
        transition: all .5s ease;
    }

    .filter-content-enter {
        transform: translate3d(0, -100%, 0);
    }
    .filter-content-leave-active {
        transform: translate3d(0, -100%, 0);
    }
</style>

