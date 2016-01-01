module.exports = {
    options: {
        plugins: [{
            removeViewBox: false
        }, {
            removeUselessStrokeAndFill: true
        }]
    },
    multiple: {
        files: [{
            expand: true,
            cwd: '_src/assets/icons/original/',
            src: ['**/*.svg'],
            dest: '_src/assets/icons/minified/',
        }, {
            expand: true,
            cwd: '_src/assets/images/logos/',
            src: ['**/*.svg'],
            dest: '_src/assets/images/logos-min/',
        }]
    }
};
