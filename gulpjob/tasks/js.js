
//TODO: add js task to lint js and then concatenate

/**
 * Concatenate JS files and create source map
 *
 * @src JS files
 * @dest concatenated JS file and source map
 */

var js_concat = function(){

    gulp.task('js_concat', function () {
        return gulp.src(Gulpjob.files.js)
            .pipe(gulpModules.concat_sourcemap('scripts.js', {
                sourceRoot: Gulpjob.paths.sourcemaps_root
            }))
            .on('error', function (err) {
                displayError(err);
            })
            .pipe(gulp.dest(Gulpjob.paths.js_compiled))
            .pipe(gulpModules.notify({
                message: "JavaScript Concatenated",
                onLast: true,
            }));
    });
};


/**
 * Minify JS files and create maps
 *
 * @src concatenated JS file
 * @dest minified JS file and source map
 */

var js_minify = function(){

    gulp.task('js_minify', ['clean_js'], function () {
        return gulp.src(Gulpjob.files.js_compiled)
            .pipe(gulpModules.rename({ suffix: '.min' }))
            .pipe(gulpModules.uglifyjs({
                outSourceMap: 'scripts.min.map'
            }))
            .on('error', function (err) {
                displayError(err);
            })
            .pipe(gulp.dest(Gulpjob.paths.js_compiled))
            .pipe(gulpModules.notify({
                message: "JavaScript Minified",
                onLast: true,
            }));
    });
};

module.exports.js = js_concat;
module.exports.js_concat = js_concat;
module.exports.js_minify = js_minify;