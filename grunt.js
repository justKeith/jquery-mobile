/*global module:false*/
module.exports = function(grunt) {

// provided by Makefile for now
var version = grunt.file.read( "sha.txt" );

grunt.loadNpmTasks("grunt-css");

grunt.initConfig({
	pkg: "<json:package.json>",
	meta: {
		banner: "/*! jQuery Mobile v" + version + "jquerymobile.com | jquery.org/license */"
	},
	min: {
		main: {
			src: ["<banner:meta.banner>", "compiled/jquery.mobile.js"],
			dest: "compiled/jquery.mobile.min.js"
		}
	},
	cssmin: {
		all: {
			src: ["<banner:meta.banner>", "compiled/jquery.mobile.compiled.css"],
			dest: "compiled/jquery.mobile.min.css"
		},
		structure: {
			src: ["<banner:meta.banner>", "compiled/jquery.mobile.structure.compiled.css"],
			dest: "compiled/jquery.mobile.structure.min.css"
		},
		theme: {
			src: ["<banner:meta.banner>", "compiled/jquery.mobile.theme.css"],
			dest: "compiled/jquery.mobile.theme.min.css"
		}
	}
});

};
