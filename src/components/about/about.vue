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
        <div class="describe">
            <h2 class="section-title"> -- 关于 -- </h2>
            <div class="midDescribe">
                <div class="introduce">
                    <div class="i"></div>
                    <div class="itext">基本信息</div>
                </div>
                <div class="detail">
                    <div class="dText">
                        <div>■&nbsp;&nbsp;作者&nbsp;&nbsp;</div>
                        <div style="font-family: 'luck';">RHHH（梁润豪）</div>
                    </div>
                    <div class="dText">
                        <div>■&nbsp;&nbsp;性别&nbsp;&nbsp;</div>
                        <div>👽</div>
                    </div>
                    <div class="dText">
                        <div>■&nbsp;&nbsp;状态&nbsp;&nbsp;</div>
                        <div>__↗↘__↗``🤩</div>
                    </div>
                </div>
                <div class="introduce">
                    <div class="i"></div>
                    <div class="itext">作者介绍</div>
                    <div class="contant">
                        <div class="card">
                            <div class="cardLeft">
                                <div class="cardLabel">
                                    <div class="cardTit">本科就读：</div>
                                    <div>广州应用科技学院</div>
                                </div>
                                <div class="cardLabel">
                                    <div class="cardTit">就读专业：</div>
                                    <div>软件工程</div>
                                </div>
                                <div class="cardLabel">
                                    <div class="cardTit">就读年限：</div>
                                    <div>2020~2024</div>
                                </div>
                                <div class="cardLabel">
                                    <div class="cardTit">在校绩点：</div>
                                    <div>3.62/5.0（前15%）</div>
                                </div>
                                <div class="cardLabel">
                                    <div class="cardTit">钻研方向：</div>
                                    <div>Web前端开发</div>
                                </div>
                            </div>
                            <div class="cardRight">
                                <img src="../../assets/img/about/my.jpg">
                            </div>
                        </div>
                    </div>
                    <div class="contant">
                        <div class="cert">
                            <div style="text-align: center;margin: 10px 0 10px 0;">在校信息</div>
                            <div class="certContne">
                                <el-carousel  :autoplay="true" class="certImg" indicator-position="outside">
                                    <el-carousel-item v-for="item, index in urls" :key="item">
                                        <el-image style="width: 100%; height: 100%" :src="urls[index]"
                                            :preview-src-list="urls">
                                        </el-image>
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                        </div>
                    </div>
                    <div class="dText">
                        <div>其余证书：CET-4证书、普通话二级甲等证书、大学生创新创业大赛省级立项并结项、2023年挑战杯校赛三等奖、2021年五一数学建模竞赛成功参赛奖、2020年信息学科科技论文竞赛优秀奖
                        </div>
                        <div style="text-align: center;margin: 10px 0 10px 0;">奖项证书（点击查看大图）</div>
                    </div>
                    <div class="contant">
                        <div class="card" style="background-image: none;">
                            <div class="cardLeft" style="width: 100%;">
                                <div class="cardLabel">
                                    <div class="cardTit">公司名称：</div>
                                    <div>广州市众山精密科技有限公司（A轮）</div>
                                </div>
                                <div class="cardLabel">
                                    <div class="cardTit">实习岗位：</div>
                                    <div>前端开发工程师</div>
                                </div>
                                <div class="cardLabel">
                                    <div class="cardTit">实习时间：</div>
                                    <div>2023.05~2023.09</div>
                                </div>
                                <div class="cardLabel">
                                    <div class="cardTit">岗位职责：</div>
                                    <div>开发PC端的HRMS和MES系统</div>
                                </div>
                                <div class="cardLabel">
                                    <div class="cardTit">实习证明：</div>
                                    <el-image style="width: 40px; height: 40px" :src="workUrls.urls1[0]"
                                        :preview-src-list="workUrls.urls1">
                                    </el-image>
                                    <div>(点击查看大图)</div>
                                </div>
                            </div>
                        </div>
                        <div class="contant">
                            <div class="card" style="background-image: none;">
                                <div class="cardLeft" style="width: 100%;">
                                    <div class="cardLabel">
                                        <div class="cardTit">公司名称：</div>
                                        <div>佛山市狮山镇人民政府农业农村办</div>
                                    </div>
                                    <div class="cardLabel">
                                        <div class="cardTit">实习岗位：</div>
                                        <div>文秘助理</div>
                                    </div>
                                    <div class="cardLabel">
                                        <div class="cardTit">实习时间：</div>
                                        <div>2022.07~2023.08</div>
                                    </div>
                                    <div class="cardLabel">
                                        <div class="cardTit">岗位职责：</div>
                                        <div>协助档案整理；文档排版、整理</div>
                                    </div>
                                    <div class="cardLabel">
                                        <div class="cardTit">实习证明：</div>
                                        <el-image style="width: 40px; height: 40px" :src="workUrls.urls2[0]"
                                            :preview-src-list="workUrls.urls2">
                                        </el-image>
                                        <div>(点击查看大图)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="contant">
                            <div class="card" style="background-image: none;">
                                <div class="cardLeft" style="width: 100%;">
                                    <div class="cardLabel">
                                        <div class="cardTit">部门名称：</div>
                                        <div>广州应用科技学院-科研组技术部</div>
                                    </div>
                                    <div class="cardLabel">
                                        <div class="cardTit">担任：</div>
                                        <div>干事</div>
                                    </div>
                                    <div class="cardLabel">
                                        <div class="cardTit">时间：</div>
                                        <div>2020.10~2022.06</div>
                                    </div>
                                    <div class="cardLabel">
                                        <div class="cardTit">职责：</div>
                                        <div>修理师生电脑、参与开发学校系统</div>
                                    </div>
                                    <div class="cardLabel">
                                        <div class="cardTit">证明：</div>
                                        <el-image style="width: 40px; height: 40px" :src="workUrls.urls3[0]"
                                            :preview-src-list="workUrls.urls3">
                                        </el-image>
                                        <div>(点击查看大图)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="contant">
                            <div class="card" style="background-image: none;">
                                <div class="cardLeft" style="width: 100%;">
                                    <div class="cardLabel">
                                        <div class="cardTit">部门名称：</div>
                                        <div>广州应用科技学院-学生会权益部</div>
                                    </div>
                                    <div class="cardLabel">
                                        <div class="cardTit">担任：</div>
                                        <div>干事、副部长</div>
                                    </div>
                                    <div class="cardLabel">
                                        <div class="cardTit">时间：</div>
                                        <div>2020.10~2022.06</div>
                                    </div>
                                    <div class="cardLabel">
                                        <div class="cardTit">职责：</div>
                                        <div>处理师生与学校间关系，维护学生权益</div>
                                    </div>
                                    <div class="cardLabel">
                                        <div class="cardTit">证明：</div>
                                        <el-image style="width: 40px; height: 40px" :src="workUrls.urls4[0]"
                                            :preview-src-list="workUrls.urls4">
                                        </el-image>
                                        <div>(点击查看大图)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="text-align: center;margin: 18px 0 0 0;">工作、校园经历</div>
                    </div>
                </div>
                <div class="introduce">
                    <div class="i"></div>
                    <div class="itext">本站信息</div>
                </div>
                <div class="detail">
                    <div class="dText">
                        <div>■&nbsp;&nbsp;技术栈&nbsp;&nbsp;</div>
                        <div>Vue2+spring boot</div>
                    </div>
                    <div class="dText">
                        <div>■&nbsp;&nbsp;开发者&nbsp;&nbsp;</div>
                        <div>👽梁润豪</div>
                    </div>
                    <div class="dText">
                        <div>■&nbsp;&nbsp;粗略开发，兼容PC端和手机端&nbsp;&nbsp;</div>
                        <div></div>
                    </div>
                </div>
                <div class="introduce">
                    <div class="i"></div>
                    <div class="itext">未来展望</div>
                </div>
                <div class="detail">
                    <div class="dText">
                        <div>继续学习前端前沿技术，找到份好工作</div>
                        <div></div>
                    </div>
                    <div class="dText">
                        <div>学习进度：</div>
                        <div></div>
                    </div>
                    <div class="dText">
                        <div>Vue3&nbsp;&nbsp;</div>
                        <el-progress style="width: 100%;" :percentage="70"></el-progress>
                    </div>
                    <div class="dText">
                        <div>react&nbsp;&nbsp;</div>
                        <el-progress style="width: 100%;" :percentage="20"></el-progress>
                    </div>
                    <div class="dText">
                        <div>TypeScript&nbsp;&nbsp;</div>
                        <el-progress style="width: 100%;" :percentage="40"></el-progress>
                    </div>
                    <div class="dText">
                        <div>node&nbsp;&nbsp;</div>
                        <el-progress style="width: 100%;" :percentage="10"></el-progress>
                    </div>
                </div>
                <div style="height: 100px;"></div>
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
            urls: [
                'http://safere.oss-cn-guangzhou.aliyuncs.com/%E5%B7%A5%E4%B8%9A%E4%BA%92%E8%81%94%E7%BD%91%E5%B7%A5%E4%B8%9A%E4%BA%92%E8%81%94%E7%BD%91%E5%B9%B3%E5%8F%B0%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88%E5%88%9D%E7%BA%A7%E8%AF%81%E4%B9%A6.png',
                'http://safere.oss-cn-guangzhou.aliyuncs.com/%E6%A2%81%E6%B6%A6%E8%B1%AA%E8%93%9D%E6%A1%A5%E6%9D%AF.jpg',
                'http://safere.oss-cn-guangzhou.aliyuncs.com/%E7%A7%91%E6%8A%80%E8%8A%82%E8%AF%81%E4%B9%A6.jpg',
                'http://safere.oss-cn-guangzhou.aliyuncs.com/%E4%BC%98%E7%A7%80%E5%A4%A7%E5%AD%A6%E7%94%9F.jpg'
            ],
            workUrls: {
                urls1: ['http://safere.oss-cn-guangzhou.aliyuncs.com/%E5%AE%9E%E4%B9%A0%E8%AF%81%E6%98%8E1.jpg'],
                urls2: ['http://safere.oss-cn-guangzhou.aliyuncs.com/%E5%AE%9E%E4%B9%A0%E8%AF%81%E6%98%8E2.jpg'],
                urls3: ['http://safere.oss-cn-guangzhou.aliyuncs.com/%E8%AF%81%E6%98%8E3.jpg'],
                urls4: ['http://safere.oss-cn-guangzhou.aliyuncs.com/%E8%AF%81%E6%98%8E4.jpg']
            }
        };
    },
    watch: {},
    computed: {},
    methods: {
        preview(index) {
            console.log(index);
        },
    },
    created() { },
    mounted() { }
};
</script>
<style lang="scss" scoped>
@media screen and (max-width:980px) {

    /* // 屏幕小于或等于980px的时候 */
    .section-title {
        margin: 8px 0 0 0;
    }
}

@media screen and (min-width:981px) {

    /* // 屏幕大于等于981px的时候 */
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

.describe {
    animation: dh 1s;

    .section-title {
        font-family: Georgia, 'Times New Roman', Times, serif;
        text-align: center;
        color: #444;
    }

    .describeTitle {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        text-align: center;
        font-size: 48px;
    }

    .midDescribe {
        padding: 0 20px 0 20px;

        .introduce {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-top: 20px;

            .i {
                height: 24px;
                width: 6px;
                background-color: black;
            }

            .itext {
                margin-left: 10px;
                font-size: 28px;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            }

            .contant {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;

                .label {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    font-size: 18px;
                    margin-left: 25px;
                    height: 30px;
                }

                .card {
                    width: 100%;
                    max-width: 420px;
                    background-color: aqua;
                    border-radius: 10px;
                    background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(../../assets/img/about/school.jpg);
                    background-color: rgba(255, 255, 255, 0.1);
                    background-size: 100% 100%;
                    margin-top: 12px;
                    padding-top: 16px;
                    padding-bottom: 6px;
                    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, .5);
                    display: flex;
                    flex-wrap: wrap;

                    .cardLeft {
                        width: 72%;

                        .cardLabel {
                            display: flex;
                            flex-wrap: wrap;
                            margin-left: 6px;
                            font-size: 14px;
                            color: black;
                            margin-bottom: 10px;

                            .a {
                                text-decoration: underline;
                                color: blue;
                                cursor: pointer;
                            }

                            .cardTit {
                                min-width: 92px;
                                text-align: right;
                                color: rgba(0, 0, 0, 0.7);
                            }
                        }
                    }

                    .cardRight {
                        width: 26%;
                        margin-right: 6px;

                        img {
                            box-shadow: 0 5px 15px -5px rgba(0, 0, 0, .5);
                            border-radius: 4px;
                            width: 100%;
                        }
                    }

                }

                .cert {
                    width: 100%;

                    .certContne {
                        width: 100%;
                        display: flex;
                        justify-content: center;

                        .certImg {
                            width: 100%;
                            max-width: 420px;
                            z-index: 0;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
        }

        .detail {
            font-family: "Hiragino Sans GB";
            margin-top: 15px;
            margin-left: 25px;

            .dText {
                font-size: 16px;
                margin-bottom: 8px;
                display: flex;

                :last-child {
                    font-family:fantasy;
                    font-weight: bolder;
                }
            }
        }
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
</style>