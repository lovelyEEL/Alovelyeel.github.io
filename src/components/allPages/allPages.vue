<template>
    <div class="padAll">
        <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="其他" name="first"></el-tab-pane>
            <el-tab-pane label="js" name="second"></el-tab-pane>
            <el-tab-pane label="框架" name="third"></el-tab-pane>
            <el-tab-pane label="Html/CSS" name="four"></el-tab-pane>
        </el-tabs>
        <div class="pad" v-show="active == 0">
            <div class="label" v-for="item, index in arr" :key="index" v-show="item.class == active"
                @click="toDetail(item.id)">
                <div style="display: flex;flex-wrap: wrap;align-items: center;width: 100%;">
                    <div class="tit">{{ item.describe }}</div>
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
        <div class="pad" v-show="active == 1">
            <div class="label" v-for="item, index in arr" :key="index" v-show="item.class == active"
                @click="toDetail(item.id)">
                <div
                    style="display: flex;flex-wrap: wrap;align-items: center;width: 100%;justify-content: space-between;">
                    <div class="tit">{{ item.describe }}</div>
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
        <div class="pad" v-show="active == 2">
            <div class="label" v-for="item, index in arr" :key="index" v-show="item.class == active"
                @click="toDetail(item.id)">
                <div
                    style="display: flex;flex-wrap: wrap;align-items: center;width: 100%;justify-content: space-between;">
                    <div class="tit">{{ item.describe }}</div>
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
        <div class="pad" v-show="active == 3">
            <div class="label" v-for="item, index in arr" :key="index" v-show="item.class == active"
                @click="toDetail(item.id)">
                <div
                    style="display: flex;flex-wrap: wrap;align-items: center;width: 100%;justify-content: space-between;">
                    <div class="tit">{{ item.describe }}</div>
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
        <el-empty description="暂无其他"></el-empty>
        <!-- <div class="nomore">
            <img src="../../assets/img/nomore.png">
            <div class="text">暂无更多</div>
        </div> -->
    </div>
</template>

<script>
import mdPages from '../../assets/mdPages/index'
export default {
    mixins: [mdPages],
    components: {},
    props: {},
    data() {
        return {
            activeName: 'first',
            active: '0'
        };
    },
    watch: {},
    computed: {},
    methods: {
        handleClick(tab, event) {
            this.active = tab.index
        },
        toDetail(index) {
            this.$router.push({
                name: 'detail',
                params: {
                    index: index
                }
            })
        }
    },
    created() {
    },
    mounted() { }
};
</script>
<style lang="scss" scoped>
/deep/ .el-tabs__nav-wrap {
    padding: 0 30px 0 30px;
}

/deep/ .el-tabs__item {
    font-size: 18px !important;
}

/deep/ .el-tabs__item:hover {
    color: black;
}

/deep/ .is-active {
    color: black;
}

/deep/ .el-tabs__active-bar {
    background-color: black;
}

.padAll {
    animation: dh 1s;
}

@keyframes dh {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.pad {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .label {
        margin-bottom: 20px;
        border-radius: 4px;
        padding: 10px 16px 12px 16px;
        max-width: 610px;
        cursor: pointer;

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

.nomore {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    img {
        width: 120px;
        height: 120px;
        opacity: 0.6;
    }

    .text {
        font-size: 42px;
    }
}

@media screen and (min-width:981px) {
    .label {
        width: 600px;
        height: 60px;
        box-shadow: 3px 3px 16px #cccccc,
            -3px -3px 16px #f4f4f4;
    }

    .label:hover {
        box-shadow: 6px 6px 6px #cecece,
            -3px -3px 16px #a8a8a8;

    }

    /* // 屏幕大于等于981px的时候 */
}

@media screen and (max-width:980px) {
    .label {
        width: 84%;
        height: auto;
        box-shadow:   3px 3px 16px #cccccc,
             -3px -3px 16px #f4f4f4;
    }

    /* // 屏幕小于等于980px的时候 */
}
</style>