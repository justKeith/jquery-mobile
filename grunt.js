/*global module:false*/
module.exports = function(grunt) {

// provided by Makefile for now
var version = grunt.file.read( "sha.txt" );

grunt.loadNpmTasks("grunt-css");

grunt.initConfig({
	pkg: "<json:package.json>",
	meta: {
		css: "/*! jQuery Mobile v" + version + "jquerymobile.com | jquery.org/license */"
	},
	cssmin: {
		all: {
			src: ["<banner:meta.css>", "compiled/jquery.mobile.compiled.css"],
			dest: "compiled/jquery.mobile.min.css"
		},
		structure: {
			src: ["<banner:meta.css>", "compiled/jquery.mobile.structure.compiled.css"],
			dest: "compiled/jquery.mobile.structure.min.css"
		},
		theme: {
			src: ["<banner:meta.css>", "compiled/jquery.mobile.theme.css"],
			dest: "compiled/jquery.mobile.theme.min.css"
		}
	}
	// TODO add lint, qunit etc
});

};
