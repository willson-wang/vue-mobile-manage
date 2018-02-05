<template>
    <section class='app-main'>
        <transition name='fade' mode='out-in'>
            <router-view :key="key"></router-view>
        </transition>
        <filter-content v-model="filterContentInfo.visible" append-to=".app-main"></filter-content>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex';
    import FilterContent from '@/components/filter-content/filter-content';
    export default {
        name: 'AppMain',
        components: {
            FilterContent
        },
        computed: {
            ...mapGetters([
                'filterContentInfo'
            ]),
            key () {
                console.log(this.$route.name);
                return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date();
            }
        }
    };
</script>

<style lang="less" scoped>
    .app-main {
        position: relative;
        flex: 1;
        height: 100%;
        overflow: auto;
    }
</style>

