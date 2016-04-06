module.exports = function(grunt){
	grunt.initConfig({
		requirejs: {
		    compile: {
		        options: {
		            // O local do arquivo otimizado
		            baseUrl: "./",
		            // Incluindo almond e main.js para adicionar ao arquivo - optimized
		            include: ["js/libs/almond","js/main.js"],
		            mainConfigFile: "js/main.js",
		            // Cria arquivo otimizado
		            out: "js/optimized.js"
		        }
		    }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask("default", ["requirejs"]);
};