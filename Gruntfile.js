module.exports = function(grunt) {
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
        shell: {
            jekyll: {
                command: 'jekyll build;'
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
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-shell');

    // Tasks
    grunt.registerTask('default', []);
    grunt.registerTask('dev', ['jekyll:dev']);
    grunt.registerTask('build', ['shell:jekyll']);
};