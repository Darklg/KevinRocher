
/* Work in progress. I know ¯\_(ツ)_/¯ */

module.exports = function(grunt) {
    var prodCSS = '_prod/assets/css/',
        prodJS = '_prod/assets/js/',
        prodAssets = '_prod/assets/',
        srcAssets = '_src/assets/',
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
            js: {
                src: [
                    prodJS + 'app/utils.js',
                    prodJS + 'app/functions.js',
                    prodJS + 'app/vanilla-tiptaptip.js',
                    prodJS + 'app/vanilla-scrollanims.js',
                    prodJS + 'app/events.js',
                ],
                dest: prodJS + 'main-tmp.js'
            },
        },
        uglify: {
            js: {
                files: uglifyFiles,
            },
        },
        svgmin: {
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
                    cwd: srcAssets + 'icons/original/',
                    src: ['**/*.svg'],
                    dest: srcAssets + 'icons/minified/',
                }, {
                    expand: true,
                    cwd: srcAssets + 'images/logos/',
                    src: ['**/*.svg'],
                    dest: srcAssets + 'images/logos-min/',
                }]
            }
        },
        webfont: {
            icons: {
                src: srcAssets + 'icons/minified/*.svg',
                dest: srcAssets + 'fonts/icons/',
                destCss: srcAssets + 'scss/frontend/',
                options: {
                    stylesheet: 'scss',
                    relativeFontPath: '../fonts/icons/',
                    destHtml: srcAssets
                }
            },
        },
        'gh-pages': {
            options: {
                base: '_prod',
                branch: 'prod'
            },
            src: '**/*'
        },
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        shell: {
            jekyll: {
                command: 'jekyll build;'
            },
            postconcat: {
                command: 'rm -r ' + prodJS + 'app/; rm -r ' + prodJS + 'main-tmp.js; '
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
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-shell');

    // Tasks
    grunt.registerTask('default', [
        'compass',
        'jekyll:dev',
    ]);
    grunt.registerTask('icons', [
        'svgmin',
        'webfont',
        'compass',
    ]);
    grunt.registerTask('build', [
        'icons',
        // Launch Jekyll
        'shell:jekyll',
        // Concat CSS/JS & uglify
        'concat',
        'uglify',
        // Clean up
        'shell:postconcat'
    ]);
    grunt.registerTask('deploy', [
        'build',
        'gh-pages'
    ]);
};