<template>
    <div class="header">
        <el-menu active-text-color="none" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
            menu-trigger="click" @select="handleSelect">
            <el-menu-item index="1" @click="toIndex()">
                <i class="el-icon-s-home"></i>
            </el-menu-item>
            <el-menu-item v-if="$route.path=='/detail'" index="5">
                <i class="el-icon-arrow-left"></i>
            </el-menu-item>
            <el-submenu class="set" index="2" style="float: right;">
                <template slot="title"><i class="el-icon-menu"></i></template>
                <el-menu-item index="3">文章</el-menu-item>
                <el-menu-item index="4">搜索</el-menu-item>
            </el-submenu>
            <el-menu-item class="btn" index="4" style="float: right;">
                搜索
            </el-menu-item>
            <el-menu-item class="btn" index="3" style="float: right;">
                文章
            </el-menu-item>
            <div class="label"></div>
        </el-menu>

        <!-- 登录界面 -->
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            activeIndex: ''
        };
    },
    watch: {},
    computed: {},
    methods: {
        handleSelect(e) {
            // if (e == 2) {
            //     this.$prompt('请输入暗号', '发布', {
            //         confirmButtonText: '确定',
            //         cancelButtonText: '取消',
            //         // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            //         // inputErrorMessage: '邮箱格式不正确',
            //         customClass: 'msgbox',
            //     }).then(({ value }) => {
            //         this.$message.error('还没开发好');
            //         // this.$router.push({
            //         //     path: "/up",
            //         //     name: "up",
            //         //     query: {
            //         //         value: value
            //         //     },
            //         // })
            //     }).catch(() => {

            //     });
            // }
            if (e == 3) {
                if (this.$route.path != '/allPages') {
                    this.$router.push({
                        name: 'allPages'
                    })
                }
            }
            if (e == 4) {
                if (this.$route.path != '/search') {
                    this.$router.push({
                        name: 'search'
                    })
                }
            }
            if (e == 5) {
                this.$router.back()
            }
        },
        toIndex() {
            if (this.$route.path != '/') {
                this.$router.push({
                    path: '/'
                })
            }
        },
    },
    created() { },
    mounted() { }
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 1024px) {
    .msgbox {
        width: 320px !important;
    }
}

@media screen and (max-width:980px) {

    /**小于或等于 */
    .set {
        display: block;
    }

    .btn {
        display: none;
    }
}

@media screen and (min-width:981px) {

    /**大于或等于 */
    .set {
        display: none;
    }

    .btn {
        display: block;
    }
}


.header {
    width: 100%;
    z-index: 999;
    position: fixed;
    top: 0;

    /deep/ .is-active {
        border-bottom: none !important;
    }

    /deep/ .el-menu-item {
        color: #909399 !important;
    }
}
</style>