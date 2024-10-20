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

    sidebar: {
      "/guide/": {
        text: "开始学习",
        collapsed: false,
        items: [
          { text: "介绍", link: "/bigFrontEnd/html/" },
          { text: "安装", link: "/bigFrontEnd/html/html1" },
          { text: "联机", link: "bigFrontEnd/html/html2" },
        ],
      },
     },
  },
};
