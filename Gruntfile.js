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
                    port: 9000,
                    bases: 'public'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/*.ts', 'test/*.js'],
                tasks: ['build']
            }
        },
        ts: {
            module: {
                cmd: 'node_modules\\.bin\\tsc.cmd',
                args: ['--module', 'commonjs', 'src/calculator.ts']
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
                    'public/js/module.js': ['src/fixedExpense.js', 'src/variableExpense.js', 'src/calculator.js'],
                }
            }
        }
    });

    grunt.registerMultiTask('ts', function () {
        var done = this.async();
        grunt.util.spawn(this.data, done);
    });
    grunt.registerTask('build', ['ts:module', 'mochaTest:test']);
    grunt.registerTask('run', ['express', 'express-keepalive']);
    grunt.registerTask('all', ['build', 'run']);
    grunt.registerTask('default', ['all']);
};