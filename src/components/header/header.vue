<template>
    <div class="header">
        <el-menu active-text-color="none" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
            menu-trigger="click" @select="handleSelect">
            <el-menu-item index="1">
                <router-link to="/"><i class="el-icon-s-home"></i></router-link>
            </el-menu-item>
            <el-submenu index="3" style="float: right;">
                <template slot="title"><i class="el-icon-menu"></i></template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="2" style="float: right;">
                <i class="el-icon-s-promotion"></i>
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
            if (e == 2) {
                this.$prompt('请输入暗号', '发布', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    // inputErrorMessage: '邮箱格式不正确',
                    customClass: 'msgbox',
                }).then(({ value }) => {
                    this.$router.push({
                        path: "/up",
                        name: "up",
                        query: {
                            value: value
                        },
                    })
                }).catch(() => {

                });
            }
        }
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

.header {
    width: 100%;
    /deep/ .is-active {
        border-bottom: none !important;
    }
}
</style>