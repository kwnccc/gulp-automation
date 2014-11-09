
// Watchers

var watch = function(){
    
    gulp.task('watch', function () {
        // Build
        gulp.start('build');

        // Sprites
        gulp.watch(Gulpjob.basePaths.dev + 'img/*.png', ['sprites']).on('change', function (evt) {
            changeEvent(evt)
        });
        
        // SCSS
        gulp.watch(Gulpjob.files.scss, ['scss']).on('change', function (evt) {
            changeEvent(evt)
        });
        
        // JS
        gulp.watch(Gulpjob.files.js, ['js_concat']).on('change', function (evt) {
            changeEvent(evt)
        });
        
    });
};

module.exports = watch;