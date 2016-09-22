module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        distFolder: '../../../www/games/soc/game1',

        watch: {
          browserify: {
            files: ['src/js/**/*.jsx'],
            tasks: ['browserify']
          }
        },

        // babel: {
        //     options: {
        //         sourceMap: true,
        //         presets: ['es2015','react']
        //     },
        //     dist: {
        //         files: {
        //             './app.js': './app.jsx'
        //         }
        //     }
        // }

         browserify: {
              dist: {
                options: {
                   transform: [['babelify', {presets: ['es2015', 'react']}]]
                },        
                src: ['src/js/app.jsx'],
                dest: '<%= distFolder %>/js/app.js',
              }
            }
    });


    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');  
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['browserify']);
    grunt.registerTask('monitor', ['browserify','watch']);

};