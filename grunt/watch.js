module.exports = {
    css: {
        files: [
            '_src/assets/scss/*.scss',
            '_src/assets/scss/*/*.scss'
        ],
        tasks: ['compass']
    },
    jekyll: {
        files: [
            '_src/*.html',
            '_src/_includes/*.html',
            '_src/assets/css/main.css',
            '_src/assets/js/*.js'
        ],
        tasks: ['jekyll:dev']
    }
};
