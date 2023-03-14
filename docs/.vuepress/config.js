module.exports = {
  base: "/manual/", //目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "",
      title: "",
      description: "",
    },
  },
  plugins: [
    "@vuepress/back-to-top",
    [
      "qrcode",
      {
        // "/" and "/zh/" correspond to the path set by locales
        labelText: {
          "/": "QRCode",
        },
        size: "small",
        channel: true,
      },
    ],
  ],
  themeConfig: {
    locales: {
      "/": {
        // 多语言下拉菜单的标题
        selectText: "选择语言",
        // 该语言在下拉菜单中的标签
        label: "简体中文",
        // 编辑链接文字
        editLinkText: "在 GitHub 上编辑此页",
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新",
          },
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: "指南", link: "/manual/", ariaLabel: "指南" },
          { text: "学习", link: "https://lwebapp.com", ariaLabel: "学习" },
          {
            text: "Github",
            link: "https://github.com/openHacking/vuepress-template",
          },
        ],
        sidebar: {
          "/manual/": [
             "js",
             "java",
             "ts",
            ],
        },
      },
    },
  },
};
