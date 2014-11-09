
var gulpDefault = function(){
	gulp.task('default', ['build']);
}

/**
 * Full for development purposes
 */
var build = function () {

	gulp.task('build', ['sprites', 'scss', 'js_concat']);

};

/**
 * Full build
 */
var build_production = function(){

	gulp.task('build_production', ['build', 'css_minify', 'js_minify']);
}

module.exports.gulpDefault = gulpDefault;
module.exports.build = build;
module.exports.build_production = build_production;