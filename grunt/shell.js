module.exports = {
    jekyll: {
        command: 'jekyll build --config _config.yml;'
    },
    postconcat: {
        command: 'rm -r _prod/assets/js/app/; rm -r _prod/assets/js/main-tmp.js; '
    }
};
