<template>
    <div class="ui-owe-order">
        <mt-button type="primary" size="large" @click="openToast">Toast</mt-button>
        <mt-button type="primary" size="large" @click="openIndicator">Indicator</mt-button>
        <mt-button type="primary" size="large" @click="openAlert">alert</mt-button>
        <mt-button type="primary" size="large" @click="openConfirm">confirm</mt-button>
        <mt-button type="primary" size="large" @click="openPrompt">prompt</mt-button>
        <mt-button type="primary" size="large" @click.native="sheetVisible = true">Actionsheet1</mt-button>
        <mt-button type="primary" size="large" @click.native="sheetVisible2 = true">Actionsheet2</mt-button>
        <div class="page-popup-wrapper">
            <mt-button @click.native="popupVisible1 = true" size="large" ref="button">中部弹出 popup</mt-button>
            <mt-button @click.native="popupVisible2 = true" size="large">上侧弹出 popup</mt-button>
            <mt-button @click.native="popupVisible3 = true" size="large">右侧弹出 popup</mt-button>
            <mt-button @click.native="popupVisible4 = true" size="large">下侧弹出 popup</mt-button>
        </div>
        <div class="page-indexlist-wrapper">
        <mt-index-list>
            <mt-index-section v-for="(item, index) in alphabet" :index="item.initial" :key="index">
            <mt-cell v-for="(cell, index) in item.cells" :title="cell" :key="index"></mt-cell>
            </mt-index-section>
        </mt-index-list>
        </div>
        <mt-actionsheet
            :actions="actions"
            v-model="sheetVisible">
        </mt-actionsheet>
        <mt-actionsheet
            :actions="actions2"
            v-model="sheetVisible2">
        </mt-actionsheet>
        <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1" :style="{ top: buttonBottom + 10 + 'px' }">
            <h1>popup</h1>
            <p>/ ˈpɑpˌʌp /</p>
            <p>n. 弹出式; [棒]内野飞球; 自动起跳式装置</p>
            <p>adj. 弹起的; 有自动起跳装置的</p>
        </mt-popup>
        <mt-popup v-model="popupVisible2" position="top" class="mint-popup-2" :modal="false">
            <p>更新成功</p>
        </mt-popup>
        <mt-popup v-model="popupVisible3" position="right" class="mint-popup-3" :modal="false">
            <mt-button @click.native="popupVisible3 = false" size="large" type="primary">关闭 popup</mt-button>
        </mt-popup>
        <mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4">
            <mt-picker :slots="dateSlots" @change="onDateChange" :visible-item-count="5" :show-toolbar="false"></mt-picker>
        </mt-popup>
    </div>
</template>

<script>
    import {Toast, Indicator, MessageBox} from 'mint-ui';
    const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];
    export default {
        name: 'oweOrder',
        data () {
            return {
                alphabet: [],
                sheetVisible: false,
                sheetVisible2: false,
                popupVisible1: false,
                popupVisible2: false,
                popupVisible3: false,
                popupVisible4: false,
                buttonBottom: 0,
                actions: [{
                    name: '拍照',
                    method: ''
                }, {
                    name: '从相册中选择',
                    method: ''
                }],
                actions2: [{
                    name: '确定'
                }, {
                    name: '返回上一步',
                    method: ''
                }],
                dateSlots: [
                    {
                        flex: 1,
                        values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
                        className: 'slot1',
                        textAlign: 'right'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
                        className: 'slot3',
                        textAlign: 'left'
                    }
                ]
            };
        },
        watch: {
            popupVisible2 (val) {
                if (val) {
                    setTimeout(() => {
                        this.popupVisible2 = false;
                    }, 2000);
                }
            }
        },
        methods: {
            openToast () {
                Toast({
                    message: '提示',
                    duration: 5000
                });
            },
            openIndicator () {
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
            },
            openAlert () {
                MessageBox.alert('操作成功');
            },
            openConfirm () {
                MessageBox.confirm('确定执行此操作?');
            },
            openPrompt () {
                MessageBox.prompt('请输入姓名');
            },
            openActionsheet1 () {
                MessageBox.prompt('请输入姓名');
            },
            openActionsheet2 () {
                MessageBox.prompt('请输入姓名');
            },
            onDateChange (picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
                this.dateStart = values[0];
                this.dateEnd = values[1];
            }
        },
        mounted () {
            this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom;
        },
        created () {
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
                let cells = NAMES.filter(name => name[0] === initial);
                this.alphabet.push({
                    initial,
                    cells
                });
            });
            console.log(this.alphabet);
        }
    };
</script>
