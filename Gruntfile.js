module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        options: {
          livereload: true,
        },
        uglify_watch: {
            files: ['js/javascript.js'],
		tasks: ['uglify'],
            options: {
              livereload: true,
              spawn: false,
            },
        },
        sass_watch: {
          files: ['stylesheets/main.scss', 'stylesheets/**/*.scss'],
          tasks: ['sass'],
          options: {
            livereload: true,
            spawn: false,
          },
        },
        cssmin_watch: {
          	files: ['css/style.css'],
		tasks: ['cssmin'],
            options: {
              livereload: true,
              spawn: false,
            },
        },
        html_watch: {
            files: ['index.html'],
            options: {
              livereload: true,
            },
        },
    },
    sass: {
        dist: {
          options: {
            style: 'expanded'
          },
          files: {
            'css/style.css' : 'stylesheets/main.scss'
          }
        }
      },
    uglify: {
      build: {
        src: ['js/javascript.js'], // source files mask
            dest: 'js/build/',    // destination folder
            expand: true,    // allow dynamic building
            flatten: true,   // remove all unnecessary nesting
            ext: '.min.js'   // replace .js to .min.js
      }
    },
    cssmin: {
        my_target: {
            src: ['css/style.css'],
            dest: 'css/build/style.min.css'
        }
      }
  });

  grunt.loadNpmTasks('grunt-install-dependencies');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');



  // Default task(s).
  grunt.registerTask('default', ['watch','uglify', 'cssmin','sass']);

};