module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-babel');
    
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015','react']
            },
            dist: {
                files: {
                    './app.js': './app.jsx'
                }
            }
        }
    });

    grunt.registerTask('default', ['babel']);

};