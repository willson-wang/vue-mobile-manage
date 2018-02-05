/*
 * @Author: peter 
 * @Date: 2017-12-04 18:55:05 
 * @Last Modified by: peter
 * @Last Modified time: 2018-01-12 15:30:40
 */
<template>
   <div class='ui-loading-wrap'>
       <div class='ui-loading-mask'></div>
       <div class='ui-loading-text'>
           <span><i class="el-icon-loading"></i></span>
           <span>拼命加载中...</span>
       </div>
   </div>
</template>

<script>
    export default {
    };
</script>

<style lang="less" scoped>
    @import (reference) '../assets/less/index.less';
    .ui-loading-wrap {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;

        .ui-loading-mask {
            width: 100%;
            height: 100%;
            background-color: rgba(255,255,255,0.3);
        }

        .ui-loading-text {
            position: absolute;
            width: 100px;
            height: 100px;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            color: @color-main;

            span:first-of-type {
                font-size: 50px; /*px*/
            }

            span:last-of-type {
                display: block;
            }
        }
    }
</style>

