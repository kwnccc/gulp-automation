module.exports.gulp = require('gulp');

module.exports.gulpModules = {
    uglifyjs: 			require('gulp-uglifyjs'),
    concat_sourcemap: 	require('gulp-concat-sourcemap'),
    autoprefixer: 		require('gulp-autoprefixer'),
    rimraf: 			require('gulp-rimraf'),
    rename: 			require('gulp-rename'),
    notify: 			require('gulp-notify'),
    compass: 			require('gulp-compass'),
    spritesmith:		require('gulp.spritesmith'),
    minifyCSS: 			require('gulp-minify-css'),
};