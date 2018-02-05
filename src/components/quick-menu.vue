<template>
    <div class="ui-quick-menu">
        <p class="ui-quick-menu__title" ref="title">
            快捷菜单
        </p>
        <div class="ui-quick-menu__content">
            <qc-index-list :height="currentHeight" v-if="visible">
                <qc-index-section v-for="(item, index) in alphabet" :index="item.initial"  :key="index" >
                    <qc-index-cell v-for="(cell, index) in item.cells" :label="cell.name" :key="index"></qc-index-cell>
                </qc-index-section>
            </qc-index-list>
        </div>
        <p class="ui-quick-menu__back" ref="back">
            返回首页
        </p>
    </div>
</template>

<script>
    import pingYin from 'pinyin';
    // const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];
    const NAMES = ['阿克江', '布吉岛', '长安街', '地球', '二次花费', '飞蛾', '孤岛惊魂', '湖南', '佳佳', '刊登', '乐聚', '马克德大', '虐暴', '欧派大额', '碰倒', '去大红', '让回复啊', '速度与激情', '停顿', '挖方打单', '下不放过', '以上几十', '炸弹'];
    
    export default {
        name: 'quickMenu',
        data () {
            return {
                alphabet: [],
                currentHeight: 0,
                visible: false
            };
        },
        created () {
            let newNames = [];
            // 将汉字转换为拼音
            NAMES.forEach(item => {
                let pinYins = pingYin(item, {
                    style: pingYin.STYLE_FIRST_LETTER
                });
                newNames.push({
                    name: item,
                    flag: pinYins[0][0]
                });
            });
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
                let cells = newNames.filter(item => {
                    return item.flag === initial.toLocaleLowerCase();
                });
                this.alphabet.push({
                    initial,
                    cells
                });
            });
        },
        watch: {
            currentHeight (val) {
                if (val) {
                    this.visible = true;
                }
                console.log(val);
            }
        },
        mounted () {
            // 这里之所以使用getComputedStyle方法的原因是，因为在css里面主动设置了高度，所以能够获取到，而使用getBoundingClientRect在元素为display:none时是获取不到的
            const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.currentHeight = screenHeight - parseInt(window.getComputedStyle(this.$refs.title, null).flexBasis) - parseInt(window.getComputedStyle(this.$refs.back, null).flexBasis);
            console.log(window.getComputedStyle(this.$refs.title, null).flexBasis);
        }
    };
</script>

<style lang="less" scoped>
    @import (reference) '../assets/less/index.less';
    .ui-quick-menu {
        display: flex;
        flex-direction: column;
        height: 100%;
        &__title {
            line-height: 92px;
            flex: 0 0 92px;
            font-size: 40px;
            color: @color-info1;
            background-color: @color-white;
            z-index: 2;
            padding-left: 40px; 
            text-align: left;
            font-weight: bold;
        }
        &__content {
            flex: 1;
            text-align: left;
            padding-left: 30px;
        }
        &__back {
            flex: 0 0 90px;
            line-height: 90px;
            font-size: 32px;
            color: @color-primary;
            background-color: @color-white;
            z-index: 2;
            padding-left: 40px; 
            font-weight: bold;
        }
    }
</style>

