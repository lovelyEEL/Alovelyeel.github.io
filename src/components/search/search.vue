<template>
    <div class="container">
        <div class="tips">实时静态搜索<i class="el-icon-search"></i></div>
        <div class="searchLabel">
            <div class="searchInput">
                <el-input v-model="search" placeholder="请输入内容"></el-input>
                <div></div>
            </div>
        </div>
        <div>
            <div class="pad">
                <div class="label" v-for="item, index in arrList" :key="index" @click="toDetail(item.id)">
                    <div style="display: flex;flex-wrap: wrap;align-items: center;width: 100%;">
                        <div class="tit" v-html="brightenKeyword(item.describe)"></div>
                        <div class="date">{{ item.date }}</div>
                    </div>
                    <div
                        style="display: flex;flex-wrap: wrap;align-items: center;width: 100%;justify-content: space-between;margin-top: 4px;">
                        <div class="author">文章类型：{{ item.author }}</div>
                        <div class="typeLabel">
                            <div class="type" v-for="i in item.type" :key="i">{{ i }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-empty description="暂无其他"></el-empty>
    </div>
</template>

<script>
import mdPages from '../../assets/mdPages/index'
export default {
    components: {},
    mixins: [mdPages],
    props: {},
    data() {
        return {
            search: '',
            newArr: []
        };
    },
    watch: {
    },
    computed: {
        arrList() {
            return this.arr.filter(res => {
                return res.describe.match(new RegExp(this.search,'i'))
            })
        }
    },
    methods: {
        toDetail(index) {
            this.$router.push({
                name: 'detail',
                params: {
                    index: index
                }
            })
        },
        brightenKeyword(val) {
            let keyword = this.search//*搜索关键字*
            val = val + '';
            if (val.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 && keyword !== '') {
                const text=String(val).match(new RegExp(keyword,'i'))
                return val.replace(new RegExp(keyword,'i'), '<font color="red">' + text + '</font>')
            } else {
                return val
            }
        }
    },
    created() { },
    mounted() { }
};
</script>
<style lang="scss" scoped>
.searchLabel {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;

    .searchInput {
        width: 80%;
    }
}

@keyframes dh {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@media screen and (min-width:981px) {
    .label {
        width: 600px;
        height: 60px;
        box-shadow:   3px 3px 16px #cccccc,
             -3px -3px 16px #f4f4f4;
    }
    .label:hover{
        box-shadow:   6px 6px 6px #cecece,
             -3px -3px 16px #a8a8a8;
        
    }

    /* // 屏幕大于等于981px的时候 */
}

@media screen and (max-width:980px) {
    .label {
        width: 84%;
        height: auto;
    }

    /* // 屏幕小于等于980px的时候 */
}

.container {
    animation: dh 1s;
}

.tips {
    text-align: center;
    margin-top: 20px;
    font-size: 22px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.pad {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;

    .label {
        margin-bottom: 20px;
        border-radius: 4px;
        padding: 10px 16px 12px 16px;
        cursor: pointer;
        max-width: 610px;
        .tit {
            font-size: 28px;
            font-family: Georgia, 'Times New Roman', Times, serif;
            width: 65%;
        }

        .date {
            text-align: right;
            width: 35%;
            font-size: 14px;
        }

        .author {}

        .typeLabel {
            display: flex;

            .type {
                padding: 2px 6px 2px 6px;
                border-radius: 6px;
                background-color: #f0f9eb;
                margin-right: 6px;
            }
        }
    }
}
</style>