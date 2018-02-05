/*
 * @Author: peter 
 * @Date: 2017-12-04 18:57:21 
 * @Last Modified by: peter
 * @Last Modified time: 2018-01-12 15:10:37
 */
<template>
  <div class="ui-login">
      <div class="ui-login__logo">
          <img src="../../assets/logo.png" alt="">
      </div>
      <div class="ui-login__title">畅玩天下</div>
      <div class="ui-login__username">
          <p>账号</p>
          <label>
              <input type="text" name="username" v-model="username">
          </label>
      </div>
      <div class="ui-login__psd">
          <p>密码</p>
          <label>
              <input type="password" name="password" v-model="password">
          </label>
      </div>
      <div class="ui-login__btn">
          <button type="button" @click="loginIn">账号</button>
      </div>
  </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        data () {
            return {
                username: '',
                password: '',
                loading: false
            };
        },
        methods: {
            ...mapActions([
                'LoginIn'
            ]),
            loginIn () {
                this.LoginIn({
                    username: this.username,
                    password: this.password
                }).then(() => {
                    this.loading = false;
                    this.$router.push('/');
                }).catch(error => {
                    console.log(error);
                    this.loading = false;
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    // @import '../../assets/less/index.less';

    .ui-login {
        display: flex;
        width: 100%;
        padding: 0.88rem 0.8rem;
        flex-direction: column;
        justify-content: center;
        &__logo {
            flex: 1 0 auto;
            text-align: left;
            font-size: 0;
            img {
                width: 0.7467rem;
                height: 0.7467rem;
            }
        }
        &__title {
            flex: 1 0 auto;
            text-align: left;
            font-size: 60px;
            font-weight: bold;
            line-height: 1;
            padding: 0.6667rem 0 2rem 0;
        }
        &__username {
            flex: 1 0 auto;
            text-align: left;
            p {
                font-size: 30px; /*px*/
                line-height: 1;
                margin: 0;
            }
            label {
                display: block;
                input {
                    width: 100%;
                    display: block;
                    font-size: 50px; /*px*/
                    line-height: 1;
                    padding: 0.4533rem 0;
                    border: 0;
                    border-bottom: 1px solid #ccc; /*no*/
                    outline: none;
                    background-color: #f3f4f8;
                    cursor: pointer;
                }
            }
        }
        &__psd {
            flex: 1 0 auto;
            text-align: left;
            padding-top: 1.1467rem;
            p {
                font-size: 30px; /*px*/
                line-height: 1;
                margin: 0;
            }
            label {
                display: block;
                input {
                    width: 100%;
                    display: block;
                    font-size: 50px; /*px*/
                    line-height: 1;
                    padding: 0.4533rem 0;
                    border: 0;
                    border-bottom: 1px solid #ccc; /*no*/
                    outline: none;
                    background-color: #f3f4f8;
                    cursor: pointer;
                }
            }
        }
        &__btn {
            flex: 1 0 auto;
            padding-top: 2rem;
            button {
                width: 8.4rem;
                height: 1.3333rem;
                line-height: 1.3333rem;
                font-size: 38px; /*px*/
                font-weight: bold;
                background-color: #5b81fe;
                border-radius: 0.6667rem;
                color: #fff;
                border: 0;
                outline: none;
            }
        }
    }
</style>


