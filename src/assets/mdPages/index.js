// md文件批量引入
import pages1 from "./pages1.md";
// import pages2 from "./git_basics.md";
// import pages3 from "./click_copy.md";

// 创建md组件同时设置文章其他信息，单独导出使用

// 1-js  2-框架  3-三大件  4-其他

export default {
    data: () => ({
        arr: [
            {
                id: 1,
                name: 'pages1',
                type: ['网站搭建'],
                class: '0',
                author:"原创",
                describe: "博客搭建介绍",
                date: "2024-03-21",
            },
            {
                id: 2,
                name: 'pages2',
                type: ['闲聊'],
                class: '0',
                author:"原创",
                describe: "入门前端小建议",
                date: "2024-03-22",
            },
            {
                id: 3,
                name: 'pages3',
                type: ['JavaScript'],
                class: '1',
                author:"原创",
                describe: "ES6新特性",
                date: "2024-03-23",
            },
            {
                id: 4,
                name: 'pages4',
                type: ['Vue'],
                class: '2',
                author:"转载",
                describe: "Vue双向数据绑定",
                date: "2024-03-24",
            },
            {
                id: 5,
                name: 'pages5',
                type: ['Vue'],
                class: '2',
                author:"原创",
                describe: "Vue的生命周期",
                date: "2024-03-24",
            },
            {
                id: 6,
                name: 'pages6',
                type: ['JavaScript'],
                class: '1',
                author:"原创",
                describe: "axios和ajax",
                date: "2024-03-24",
            },
            {
                id: 7,
                name: 'pages7',
                type: ['CSS'],
                class: '3',
                author:"原创",
                describe: "CSS选择器优先级",
                date: "2024-03-24",
            },
        ]
    })
}
// const arr = {
//     pages1: {
//         id: 1,
//         name: 'pages1',
//         type: ['闲聊'],
//         class: 1,
//         describe: "博客搭建介绍",
//         date: "2021-11-23 15:51:00",
//     },
// };
// // 注册全部md组件
// export const mdArticle = function (Vue, opts = {}) {
//     return Object.keys(components).forEach((key) => {
//         Vue.component(key, components[key].name);
//     });
// };