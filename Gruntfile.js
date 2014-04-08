module.exports = function(grunt) {
    var prodCSS = '_prod/assets/css/',
        prodJS = '_prod/assets/js/',
        uglifyFiles = {};

    uglifyFiles[prodJS + 'main.js'] = prodJS + 'main-tmp.js';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jekyll: {
            options: {
                config: '_config.yml',
                src: '_src',
                dest: '_dev'
            },
            dev: {}
        },
        concat: {
            css: {
                src: [
                    prodCSS + 'dev--cssc-default.css',
                    prodCSS + 'dev--cssc-common.css',
                ],
                dest: prodCSS + 'dev--main.css'
            },
            js: {
                src: [
                    prodJS + 'app/functions.js',
                    prodJS + 'app/events.js',
                ],
                dest: prodJS + 'main-tmp.js'
            },
        },
        cssmin: {
            css: {
                src: prodCSS + 'dev--main.css',
                dest: prodCSS + 'main.css'
            }
        },
        uglify: {
            js: {
                files: uglifyFiles,
            },
        },
        'gh-pages': {
            options: {
                base: '_prod',
                branch: 'prod'
            },
            src: '**/*'
        },
        shell: {
            jekyll: {
                command: 'jekyll build;'
            },
            postconcat: {
                command: 'rm ' + prodCSS + 'dev--*.css; rm -r ' + prodJS + 'app/; rm -r ' + prodJS + 'main-tmp.js; '
            }
        },
        watch: {
            jekyll: {
                files: ['_src/*.html', '_src/_includes/*.html'],
                tasks: ['jekyll:dev']
            }
        }
    });

    // Load modules
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-shell');

    // Tasks
    grunt.registerTask('default', [
        'jekyll:dev'
    ]);
    grunt.registerTask('build', [
        // Launch Jekyll
        'shell:jekyll',
        // Concat CSS/JS & uglify
        'concat',
        'cssmin',
        'uglify',
        // Clean up
        'shell:postconcat'
    ]);
    grunt.registerTask('deploy', [
        'build',
        'gh-pages'
    ]);
};