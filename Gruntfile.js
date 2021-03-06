module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat      : {
      options: {
        separator: ';',
      },
      dist: {
        src: ['node_modules/mithril/mithril.js', 'client/models/*.js', 'client/components/*.js', 'client/app.js'],
        dest: 'dist/scripts/mithril_components.js',
      },
    },
    uglify      : {
      options: {},
      my_target: {
        files: {
          'dist/scripts/mithril_components.min.js': ['client/scripts/mithril_components.js'],
          'dist/scripts/_bower.min.js': ['client/scripts/_bower.js']
        }
      }
    },
    copy        : {
      main: {
        files: [
          {expand: true, cwd: 'client/', src: ['index.html', 'assets/*', 'styles/*'], dest: 'dist/', filter: 'isFile'}
        ]
      }
    },
    watch: {
      scripts: {
        files  : ['client/**/*.js'],
        tasks  : ['run'],
        options: {
          spawn: false,
        },
      },
    },
    express: {
      server: {
        options: {
          script: 'server/server.js'
        }
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  // Register task(s).
  grunt.registerTask('package', ['concat', 'copy']);
  grunt.registerTask('run', ['package', 'express:server', 'watch']);
};