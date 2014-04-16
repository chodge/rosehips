module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            server: {                
                options: {
                    port: 35729,
                    bases: 'public',
                    livereload: true
                }
            }
        },
        watch: {
            typescript: {
                files: ['src/*.ts'],
                tasks: ['ts']
            },
            src: {
                files: ['src/*.js'],
                tasks: ['browserify']
            },
            test: {
                files: ['test/*.js', 'src/*.js'],
                tasks: ['mochaTest']
            }
        },
        ts: {
            module: {
                cmd: 'node_modules\\.bin\\tsc.cmd',
                args: ['--module', 'commonjs', 'src/app.ts']
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/*.js']
            }
        },
        browserify: {
            dist: {
                files: {
                    'public/js/rosehips.js': ['src/fixedExpense.js', 'src/variableExpense.js', 'src/calculator.js', 'src/app.js'],
                }
            }
        }
    });

    grunt.registerMultiTask('ts', function () {
        var done = this.async();
        grunt.util.spawn(this.data, done);
    });
    grunt.registerTask('build', ['ts:module', 'mochaTest:test']);
    grunt.registerTask('server', ['express:server', 'express-keepalive']);
    grunt.registerTask('all', ['build', 'run']);
    grunt.registerTask('default', ['all']);
};