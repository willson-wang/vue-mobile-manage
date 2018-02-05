<template>
    <div class='ui-app-wrap'>
        <top-nav-bar></top-nav-bar>
        <app-main></app-main>
        <side-bar v-model="visibleSideBar"></side-bar>
        <loading v-show='showLoading'></loading>
    </div>
</template>

<script>
    import {AppMain, TopNavBar, SideBar} from '@/views/layout';
    import Loading from '@/components/loading';
    import {mapGetters} from 'vuex';

    export default {
        name: 'layout',
        components: {
            AppMain,
            TopNavBar,
            Loading,
            SideBar
        },
        data () {
            return {};
        },
        computed: {
            ...mapGetters([
                'showLoading',
                'showSideBar'
            ]),
            visibleSideBar: {
                get () {
                    return this.showSideBar;
                },
                set (val) {}
            }
        },
        methods: {}
    };
</script>

<style lang="less" scoped>
    .ui-app-wrap {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>

