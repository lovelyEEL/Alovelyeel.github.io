<template>

    <md class="markdown-body" />

</template>

<script>
import md from '../../assets/introduce.md'
import "highlight.js/styles/github.css";
import "github-markdown-css";
export default {
    components: {
        md
    },
    props: {},
    data() {
        return {
        };
    },
    watch: {

    },
    computed: {},
    methods: {
        getFiles(id) {
            let files = require.context('../../assets/mdPages', true, /\.md$/)
            console.log(files.keys());
            console.log(files.resolve(files.keys()[id]));
            console.log(this.getComponent(files.resolve(files.keys()[id])));
        },
        getComponent(fileName) {
            const component = require(`${fileName}`);
            return component.default || component
        }
    },
    created() {
        const id = this.$route.params.index
        console.log(id);
        this.getFiles(id)
    },
    mounted() { }
};
</script>
<style lang="scss" scoped>
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}
</style>