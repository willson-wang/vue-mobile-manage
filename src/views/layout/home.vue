<template>
  <div class="ui-home">
      <div class="ui-home__opration">
          <div class="ui-home__title">
              常用功能
          </div>
          <ul class="ui-home__menu">
              <li v-for="(item, index) in oprationList" :key="index" @click="linkTo(item.name)">
                  <div :style="{color: iconList[index]['color']}"><i :class="'icon-' + iconList[index]['name']"></i></div>
                  <p>{{item.title}}</p>
              </li>
          </ul>
      </div>
      <div class="ui-home__other">
          <div class="ui-home__title">
              其它功能
          </div>
          <ul class="ui-home__list">
              <li v-for="(item, index) in otherList" :key="index">
                  <div :style="{color: iconList[index]['color']}"><i :class="'icon-' + iconList[index]['name']"></i></div>
                  <p>{{item.title}}</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
    // import {mapGetters, mapActions} from 'vuex';
    import Title from './title';
    export default {
        name: 'home',
        data () {
            return {
                test1: 'a',
                test2: {
                    a: 10,
                    b: 20,
                    c: 30
                },
                iconList: [
                    {
                        name: 's-location',
                        color: '#5bd6a8'
                    },
                    {
                        name: 'wait-order',
                        color: '#fcb83b'
                    },
                    {
                        name: 'manage',
                        color: '#a185d9'
                    },
                    {
                        name: 'diff-order',
                        color: '#7c90ef'
                    },
                    {
                        name: 'loss-order',
                        color: '#ff6e80'
                    },
                    {
                        name: 'home',
                        color: '#7692f5'
                    },
                    {
                        name: 'customer-service',
                        color: '#b4d745'
                    }
                ],
                oprationList: [
                    {
                        title: 'SKU库存管理',
                        icon: 'a',
                        name: ''
                    },
                    {
                        title: '待处理订单',
                        icon: 'a',
                        name: ''
                    },
                    {
                        title: '包裹管理',
                        icon: 'a',
                        name: ''
                    },
                    {
                        title: '订单异常',
                        icon: '',
                        name: 'owe_order'
                    },
                    {
                        title: '亏损订单',
                        icon: 'a',
                        name: 'loss_order'
                    },
                    {
                        title: '邮件',
                        icon: 'a',
                        name: ''
                    },
                    {
                        title: '客服异常订单',
                        icon: 'a',
                        name: ''
                    }
                ],
                otherList: [
                    {
                        title: 'SKU库存管理',
                        icon: 'a',
                        name: ''
                    },
                    {
                        title: '待处理订单',
                        icon: 'a',
                        name: ''
                    },
                    {
                        title: '包裹管理',
                        icon: 'a',
                        name: ''
                    },
                    {
                        title: '订单异常',
                        icon: 'a',
                        name: ''
                    },
                    {
                        title: '亏损订单',
                        icon: 'a',
                        name: ''
                    },
                    {
                        title: '邮件',
                        icon: 'a',
                        name: ''
                    },
                    {
                        title: '客服异常订单',
                        icon: 'a',
                        name: ''
                    }
                ]
            };
        },
        computed: {},
        components: {
            Title
        },
        methods: {
            linkTo (name) {
                this.$router.push({name: name});
            }
        },
        mounted () {
            console.log(this);
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../../assets/less/index.less';
    .ui-home {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        
        &__opration {
            flex: 1 0 434px;
            display: flex;
            flex-direction: column;
            background-color: @color-white;
            padding: 0 40px;
        }
        &__title {
            flex: 0 0 90px;
            color: @color-info2;
            border-bottom: 1px solid @color-bdr; /*no*/
            text-align: left;
            font-size: 26px; /*px*/
            display: flex;
            align-items: center;
        }
        &__other {
            flex: 1 0 468px;
            display: flex;
            flex-direction: column;
            background-color: @color-white;
            padding: 0 40px;
            margin-top: 20px;
        }
        &__menu {
            display: flex;
            flex: 1 0 auto;
            flex-flow: wrap;
            li {
                flex: 0 0 25%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                i {
                    font-size: 50px; /*px*/
                }

                >p {
                    font-size: 22px; /*px*/
                    color: @color-info1;
                    margin-top: 10px;
                }
            }
        }
        &__list {
            display: flex;
            flex: 1 0 auto;
            flex-flow: wrap;
            li {
                flex: 0 0 50%;
                display: flex;
                align-items: center;

                i {
                    font-size: 36px; /*px*/
                }

                >p {
                    font-size: 24px; /*px*/
                    color: @color-info1;
                    padding-left: 20px;
                }
            }
        }
    }
</style>

