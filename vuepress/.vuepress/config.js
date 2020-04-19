module.exports = {
  title: "VuePress Playground",
  themeConfig: {
    theme: '@vuepress/vue',
    repo: 'tri-star/ssg-playground',
    docsDir: 'vuepress',
    editLinks: true,
    smoothScroll: true,
    sidebar: {
      '/': [
        ['/', 'Top'],
        '/markdown.md',
        {
          title: 'Vue',
          children: [
            ['/vue/', 'Top'],
            './vue/install.md',
            './vue/basic.md',
            './vue/component.md',
            './vue/transition.md',
          ]
        }
      ]
    }
  }
}
