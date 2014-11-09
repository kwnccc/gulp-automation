
/**
 * Clean files that are not needed
 */

var clean_js = function () {

	gulp.task('clean_js', function(){
	    return gulp.src(Gulpjob.files.js_minified, { read: false })
	        .pipe(gulpModules.rimraf());
	});

};

var clean_css = function () {
	gulp.task('clean_css', function(){
	    return gulp.src(Gulpjob.files.css_minified, { read: false })
	        .pipe(gulpModules.rimraf());
	
	});
};

module.exports.clean_js = clean_js;
module.exports.clean_css = clean_css;