// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '猫雨音の小猫窝',
  tagline: '喵喵喵喵喵！',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://RaTaiHok.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RaTaiHok', // Usually your GitHub org/user name.
  projectName: 'RaTaiHok/RTHsama_Blog_Web', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        blog: {
          blogSidebarTitle: '札记',
          blogSidebarCount: 10,
          showReadingTime: true,

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // giscus 评论功能
      giscus: {
        repo: 'RaTaiHok/RTHsama_Blog_Web',
        repoId: 'R_kgDOObmOuA',
        category: 'Announcements',
        categoryId: 'DIC_kwDOObmOuM4CpOMx',
      },


      // Replace with your project's social card
      image: 'img/meow.png',
      navbar: {
        title: '猫雨音の小猫窝',
        logo: {
          alt: 'My Avatar',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/blog', label: '笔记本', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'RTH喵',
          },

          {
            href: 'https://github.com/RaTaiHok',
            label: 'MyGitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '关于本喵',
            items: [
              {
                label: '雨音的自我介绍',
                to: '/docs/intro',
              },
              {
                label: '雨音的QQ',
                href: 'https://qm.qq.com/q/h3dN7vJqkU',
              },
              {
                label: 'RTH的Bilibili主页',
                href: 'https://space.bilibili.com/1333478733',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: '户山兔兔的个人blog',
                href: 'https://danieltoyama.fun/',
              },
            ],
          },
          {
            title: '还有什么东西呢（？',
            items: [
              {
                label: '雨音的记事本',
                to: '/blog',
              },
              {
                label: '雨音的GitHub主页',
                href: 'https://github.com/RaTaiHok',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 猫雨音的小猫窝<br />Built with Docusaurus.<br />本网站文章内容依据 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0</a> 许可证进行授权。转载请附上出处链接。`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};


export default config;
