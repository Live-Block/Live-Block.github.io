// .vitepress/config.js

const base = "/";
export default {
  base,
  // 站点级选项
  lang: "zh-Hans",
  title: "MineCraft",
  description: "下载MineCraft启动器教程",
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `${base}favicon.ico` }],
  ],
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

    search: {
            provider: "local",
        },

    sidebar: {
      "/bigFrontEnd/html/": {
        text: "html",
        items: [
          { text: "html", link: "/bigFrontEnd/html/" },
          { text: "html1", link: "/bigFrontEnd/html/html1" },
          { text: "html2", link: "bigFrontEnd/html/html2" },
        ],
      },
      "/bigFrontEnd/css/": {
        text: "css",
        items: [
          { text: "css1", link: "/bigFrontEnd/css/css1" },
          { text: "css2", link: "/bigFrontEnd/css/css2" },
        ],
      },
      "/bigFrontEnd/js/": {
        text: "js",
        items: [
          { text: "js1", link: "/bigFrontEnd/js/js1" },
          { text: "js2", link: "/bigFrontEnd/js/js2" },
        ],
      },
    },
  },
};
