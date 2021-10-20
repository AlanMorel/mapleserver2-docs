const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const dotenv = require('dotenv').config();

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
    module.exports = {
        title: 'MapleServer2 Docs',
        tagline: 'Welcome to the MapleServer2 Docs',
        url: process.env.URL ?? 'https://mapleme.me',
        baseUrl: '/docs/',
        onBrokenLinks: 'throw',
        onBrokenMarkdownLinks: 'warn',
        favicon: 'image/favicon.ico',
        organizationName: 'MapleServer2',
        projectName: 'MapleServer2',
        presets: [
            [
                '@docusaurus/preset-classic',
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        routeBasePath: '/',
                        sidebarPath: require.resolve('./sidebars.js'),
                        editUrl: 'https://github.com/AlanMorel/mapleserver2-docs/edit/master/'
                    },
                    theme: {
                        customCss: require.resolve('./src/css/custom.css')
                    }
                })
            ]
        ],
        themeConfig:
            /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                navbar: {
                    title: 'MapleServer2',
                    logo: {
                        alt: 'MapleServer2 docs Logo',
                        src: 'image/logo.png'
                    },
                    items: [
                        {
                            type: 'doc',
                            docId: 'intro',
                            position: 'left',
                            label: 'Docs'
                        },
                        {
                            href: 'https://github.com/AlanMorel/MapleServer2',
                            label: 'GitHub',
                            position: 'right'
                        }
                    ]
                },
                footer: {
                    style: 'dark',
                    links: [
                        {
                            title: 'Docs',
                            items: [
                                {
                                    label: 'Docs',
                                    to: '/'
                                }
                            ]
                        },
                        {
                            title: 'Community',
                            items: [
                                {
                                    label: 'Discord',
                                    href: 'https://discord.gg/mABkFFhBuU'
                                }
                            ]
                        },
                        {
                            title: 'More',
                            items: [
                                {
                                    label: 'GitHub',
                                    href: 'https://github.com/AlanMorel/MapleServer2'
                                }
                            ]
                        }
                    ]
                },
                prism: {
                    theme: lightCodeTheme,
                    darkTheme: darkCodeTheme
                }
            })
    }
);
