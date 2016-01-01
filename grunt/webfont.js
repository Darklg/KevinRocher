module.exports = {
    icons: {
        src: '_src/assets/icons/minified/*.svg',
        dest: '_src/assets/fonts/icons/',
        destCss: '_src/assets/scss/frontend/',
        options: {
            stylesheet: 'scss',
            relativeFontPath: '../fonts/icons/',
            destHtml: '_src/assets/'
        }
    },
};
