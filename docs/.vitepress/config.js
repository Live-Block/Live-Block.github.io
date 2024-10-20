// .vitepress/config.js

const base = "/";
export default {
  base,
  // 站点级选项
  lang: "zh-Hans",
  title: "MineCraft",
  description: "下载MineCraft启动器教程",
  themeConfig: {
// https://vitepress.dev/reference/default-theme-config

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "关于", link: "/about" },
    ],

    editLink: {
            pattern: "https://github.com/live-block/live-block.github.io/edit/main/docs/:path",
            text: "在GitHub上编辑此页面"
        },

    search: {
            provider: "local",
        },

sidebar: [
            {
                text: "开始使用",
                collapsed: false,
                items: [
                    { text: "介绍", link: "/guide/introduction" },
                    { text: "安装", link: "/guide/install" },
                    { text: "插件", link: "/guide/multiplayer" }
                ]
            },
            {
                text: "开发文档",
                collapsed: false,
                items: [
                    { text: "开始你的第一个插件", link: "/docs/introduction" },
                    { text: "LiteLoader API", link: "/docs/liteloader-api" },
                    { text: "Web Components", link: "/docs/web-components" },
                    { text: "自定义协议方案", link: "/docs/protocol-scheme" }
                ]
            }
        ],
}
