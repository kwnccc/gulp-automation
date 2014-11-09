
/**
 * Compile CSS file from scss
 *
 * @src SCSS file that imports the rest
 * @dest CSS file and minified CSS file
 */

var css_minify = function (){

    gulp.task('css_minify', ['clean_css'], function(){
        return gulp.src(Gulpjob.files.css)
            .pipe(gulpModules.rename({ suffix: '.min' }))
            .pipe(gulpModules.minifyCSS())
            .pipe(gulp.dest(Gulpjob.paths.css))
            .pipe(gulpModules.notify("CSS Minified"));
    });

};

var scss = function () {

    gulp.task('scss', function(){

        return gulp.src(Gulpjob.files.scss)
            .pipe(gulpModules.compass({
                sass: Gulpjob.paths.scss,
                css:  Gulpjob.paths.css
            }))
            .on('error', function (err) {
                displayError(err);
            })
            .pipe(gulpModules.autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(gulp.dest(Gulpjob.paths.css))
            .pipe(gulpModules.notify("SCSS Recompiled"));
    });
};


module.exports.scss = scss;
module.exports.css_minify = css_minify;