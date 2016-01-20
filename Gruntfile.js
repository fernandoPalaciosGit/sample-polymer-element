module.exports = function (grunt) {
	
	var gruntConfig = {
			shell: {
				runProject: {
					command: 'polyserver -o',
					options: {
						async: false,
					}
				}
			}
		};
	
	grunt.initConfig(gruntConfig);
	grunt.loadNpmTasks('grunt-shell-spawn');
	grunt.registerTask('start', ['shell:runProject']);
};