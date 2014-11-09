
var sprites = function () {

    gulp.task('sprites', function () {
        var spriteData = gulp.src(Gulpjob.files.sprites_img)
          .pipe(gulpModules.spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprite.scss',
            cssFormat: 'scss'
          }));

        spriteData.img.pipe(gulp.dest(Gulpjob.paths.scss));
        spriteData.img.pipe(gulp.dest(Gulpjob.paths.css));
        spriteData.css.pipe(gulp.dest(Gulpjob.paths.scss));

        spriteData.pipe(gulpModules.notify("Image Spriting Completed"));

    });

};


module.exports.sprites = sprites;