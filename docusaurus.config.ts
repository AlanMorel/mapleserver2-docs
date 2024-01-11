import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
    title: "MapleServer2 Docs",
    tagline: "Welcome to the MapleServer2 Docs",
    url: "https://mapleme.me",
    baseUrl: "/docs/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "image/favicon.ico",
    organizationName: "MapleServer2",
    projectName: "MapleServer2",
    presets: [
        [
            "classic",
            {
                docs: {
                    routeBasePath: "/",
                    sidebarPath: "./sidebars.mjs",
                    editUrl: "https://github.com/AlanMorel/mapleserver2-docs/edit/master/"
                },
                theme: {
                    customCss: "./src/css/custom.css"
                }
            }
        ]
    ],
    themeConfig: {
        navbar: {
            title: "MapleServer2",
            logo: {
                alt: "MapleServer2 docs Logo",
                src: "image/logo.png"
            },
            items: [
                {
                    type: "doc",
                    docId: "intro",
                    position: "left",
                    label: "Docs"
                },
                {
                    href: "https://github.com/AlanMorel/MapleServer2",
                    label: "GitHub",
                    position: "right"
                }
            ]
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Docs",
                            to: "/"
                        }
                    ]
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Discord",
                            href: "https://discord.gg/mABkFFhBuU"
                        }
                    ]
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/AlanMorel/MapleServer2"
                        }
                    ]
                }
            ]
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ["bash", "json"]
        }
    }
};

export default config;
