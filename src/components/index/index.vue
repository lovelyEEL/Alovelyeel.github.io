<template>
    <div class="container">
        <div class="top">
            <div class="topAble">
                <div class="topTitle">
                    <div class="title">
                        RH博客
                    </div>
                </div>
            </div>
            <p class="author">⭐RHHH⭐</p>
        </div>
        <div class="dh">
            <h2 class="section-title"> -- 导航 -- </h2>
            <div class="mid">
                <router-link to="/foot" class="midBox">
                    <div class="boxTit">足 迹</div>
                    <div class="describe">记录生活的点点滴滴</div>
                    <div class="describe">记录学习的脚印</div>
                    <!-- <img src="@/assets/img/chi1.png"> -->
                </router-link>
                <router-link to="/about" class="midBox">
                    <div class="boxTit">关 于</div>
                    <div class="describe">关于本站</div>
                    <div class="describe">关于作者</div>
                </router-link>
            </div>
            <h2 class="section-title"> -- 日志 -- </h2>
            <div class="container">
                <div class="box">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            activeIndex: '1'
        };
    },
    watch: {},
    computed: {},
    methods: {
        tipsShow() {
            this.$notify({
                title: '欢迎来到RH博客',
                message: '贵宾请入座',
                duration: 2000,
                position: 'top-left'
            });
        }
    },
    created() {
        this.tipsShow()
    },
    mounted() {
    }
};
</script>
<style lang="scss" scoped>
@media screen and (max-width:980px) {

    /* // 屏幕小于或等于980px的时候 */
    .mid {
        display: flex;
        flex-direction: column;

        .midBox {
            margin-top: 14px;
            margin-left: 36px;
            margin-right: 36px;
        }
    }

    .section-title {
        margin: 8px 0 0 0;
    }
}

@media screen and (min-width:981px) {

    /* // 屏幕大于等于981px的时候 */
    .mid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        :first-child {
            margin-left: 46px;
        }

        :last-child {
            margin-right: 46px;
        }

        .midBox {
            margin-top: 12px;
            width: 40%;

            :last-child {
                margin: 0;
            }
        }
    }

    .section-title {
        margin: 16px 0 0 0;
    }
}

.top {
    padding: 18px;
    border-bottom: 0.5px solid gray;

    .topAble {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .topTitle {
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            img {
                width: 34px;
                height: 34px;
            }

            .title {
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                text-align: center;
                font-size: 36px;
                margin: 0 10px 0 10px;
            }
        }
    }

    .author {
        margin-top: 6px;
        text-align: center;
        font-family: "luck";
    }
}
.dh{
    animation: dh 1s;
}
.mid {
    :hover {
        border: 2px solid black !important;
    }

    .midBox {
        border: 2px solid rgb(230, 230, 230);
        border-radius: 2px;
        padding: 10px;
        height: 110px !important;
        text-decoration: none;
        color: #444;

        .boxTit {
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-size: 42px;
            text-align: right;
            pointer-events: none;
        }

        .describe {
            font-size: 18px;
            font-weight: lighter;
            text-align: right;
            pointer-events: none;
        }

        img {
            right: 30px;
            width: 100px;
            height: 100px;
            pointer-events: none;
        }
    }
}

.section-title {
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    color: #444;
}

@keyframes dh {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}</style>