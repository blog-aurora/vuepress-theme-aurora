"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cozePlugin = void 0;
const { createPage } = require('@vuepress/core');
const utils_1 = require("@vuepress/utils");
const vuepressPluginMusicPlayer = ({songIds,playlist,showPlaylist ,disabledNetEaseMusic,localSongs}) => {
    return {
        define: {
            __SONG_IDS__: songIds,
            __PLAYLIST__: playlist,
            __SHOW_PLAYLIST__: showPlaylist,
            __DISABLED_NET_EASE_MUSIC__: disabledNetEaseMusic,
            __LOCAL_SONGS__: localSongs,
        },
        onInitialized: async (app) => {
            // 如果主页不存在
            const timeline = await createPage(app, {
                path: '/aurora-music',
                // 设置 frontmatter
                frontmatter: {
                    layout: 'AuroraMusic',
                    slug: 'aurora-plugin-music',
                },
                permalink: '/aurora-music',
                // 设置 markdown 内容
                content: "",
            })

            // 把它添加到 `app.pages`
            app.pages.push(timeline)
        },
        name: 'vuepress-plugin-music-player',
        multiple: false,
        clientAppEnhanceFiles: utils_1.path.resolve(__dirname, '../client/clientAppEnhance.js')
    };
};
exports.musicPlayerPlugin = vuepressPluginMusicPlayer;
