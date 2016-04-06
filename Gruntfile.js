module.exports = function(grunt){
	grunt.initConfig({
		requirejs: {
		  compile: {
		    options: {
		      baseUrl: "./",
		      optimize: "uglify",
		      mainConfigFile: "js/main.js",
		      include: [ "js/main.js" ],
		      out: "js/optimized.js"
		    }
		  }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-requirejs');
};