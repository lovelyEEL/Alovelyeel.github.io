<template>
    <div class="markdown-body">
        <!-- 文章详情页面 -->
        <div class="details">
            <!-- md文件组件 -->
            <component :is="parameter"></component>
        </div>
    </div>
</template>

<script>
import pages1 from '../../assets/mdPages/pages1.md'
import pages2 from '../../assets/mdPages/pages2.md'
import pages3 from '../../assets/mdPages/pages3.md'
import pages4 from '../../assets/mdPages/pages4.md'
import pages5 from '../../assets/mdPages/pages5.md'
import pages6 from '../../assets/mdPages/pages6.md'
import pages7 from '../../assets/mdPages/pages7.md'
import "highlight.js/styles/github.css";
import "github-markdown-css";
export default {
    components: {
        pages1,
        pages2,
        pages3,
        pages4,
        pages5,
        pages6,
        pages7
    },
    props: {},
    data() {
        return {
            parameter: "", //文章对应组件名字
        };
    },
    watch: {
        $route(newValue, oldValue) {
            if (newValue.params.index){
                sessionStorage.setItem("index",newValue.params.index)
                this.getFiles(newValue.params.index)
            }
        }
    },
    computed: {},
    methods: {
        getFiles(id) {
            // let files = require.context('../../assets/mdPages', true, /\.md$/)
            // console.log(files.keys());
            // console.log(files.resolve(files.keys()[id]));
            const name = 'pages' + String(id)
            this.parameter = name
        },
        // getComponent(fileName) {
        //     const component = require(`${fileName}`);
        //     return component.default || component
        // }
    },
    created() {
    },
    mounted() {
        if(this.$route.params.index!=undefined && this.$route.params.index!= null && this.$route.params.index != ''){
            const id = this.$route.params.index
            sessionStorage.setItem("index",id)
            this.getFiles(id)
        }else{
            const id = sessionStorage.getItem("index")
            this.getFiles(id)
        }
    }
};
</script>
<style lang="scss" scoped>
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 12px;
    animation: dh 1s;
    padding-bottom: 90px;
}

.container {
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
</style>