module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
        }
    });

    grunt.registerMultiTask('ts', function () {
        var done = this.async();
        grunt.util.spawn(this.data, done);
    });
    grunt.registerTask('all', ['ts:module', 'mochaTest:test']);
    grunt.registerTask('default', ['all']);
};