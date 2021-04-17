/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Nuts 10303',
  tagline: 'The tagline of my site',
  url: 'https://10303.nuts.institute/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Rhodanthe1116', // Usually your GitHub org/user name.
  projectName: 'nuts-10303', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Nuts 10303',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '上課紀錄',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        // { to: 'game/', label: '遊戲開發', position: 'left' },
        { href: 'https://105176.gitbook.io/python/', label: 'Student1', position: 'left' },
        { href: 'https://103154.gitbook.io/python/', label: 'Student2', position: 'left' },
        { to: 'student-three/', label: 'Student3', position: 'left' },
        { href: 'https://105402.gitbook.io/python1-1/', label: 'Student4', position: 'left' },
        { href: 'https://alex98050287.gitbook.io/5/', label: 'Student5', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Rhodanthe1116/nuts-10303',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Rhodanthe1116/nuts-10303/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Rhodanthe1116/nuts-10303/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'game',
        path: 'game',
        routeBasePath: 'game',
        sidebarPath: require.resolve('./sidebarsGame.js'),
        editUrl:
          'https://github.com/Rhodanthe1116/nuts-10303/edit/master/',
        // ... other options
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'student-one',
        path: 'student-one',
        routeBasePath: 'student-one',
        sidebarPath: require.resolve('./sidebarsStudent.js'),
        editUrl:
          'https://github.com/Rhodanthe1116/nuts-10303/edit/master/',
        // ... other options
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'student-two',
        path: 'student-two',
        routeBasePath: 'student-two',
        sidebarPath: require.resolve('./sidebarsStudent.js'),
        editUrl:
          'https://github.com/Rhodanthe1116/nuts-10303/edit/master/',
        // ... other options
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'student-three',
        path: 'student-three',
        routeBasePath: 'student-three',
        sidebarPath: require.resolve('./sidebarsStudent.js'),
        editUrl:
          'https://github.com/Rhodanthe1116/nuts-10303/edit/master/',
        // ... other options
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'student-four',
        path: 'student-four',
        routeBasePath: 'student-four',
        sidebarPath: require.resolve('./sidebarsStudent.js'),
        editUrl:
          'https://github.com/Rhodanthe1116/nuts-10303/edit/master/',
        // ... other options
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'student-five',
        path: 'student-five',
        routeBasePath: 'student-five',
        sidebarPath: require.resolve('./sidebarsStudent.js'),
        editUrl:
          'https://github.com/Rhodanthe1116/nuts-10303/edit/master/',
        // ... other options
      }
    ],
  ],
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['en', 'zh-Hant'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'zh-Hant': {
        label: '中文',
      },
    },
  },
};
