'use strict';

const themePath = './public_html/wp-content/themes/brandastic/';

export default {
    themePath: themePath,
    scssFiles: [
        './src/scss/**/*.scss',
    ],
    cssDest: `${themePath}assets/css/`,
    jsFiles: [
        './src/js/**/*.js',
    ],
    jsDest: `${themePath}assets/js/`,
    serverWatch: [
        `${themePath}**/*.php`,
        `${themePath}**/*.js`,
        `${themePath}**/*.css`,
    ],
    devUrl: 'dev-url.dev'
}
