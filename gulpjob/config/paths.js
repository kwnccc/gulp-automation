// Files & Paths

var basePaths = {
    root : './app/',
    dev  : './app/dev/',
    dist : './app/dist/',
};

var files = {

    scss         : basePaths.dev + 'scss/**/*.scss',
    css          : basePaths.dist + 'css/**/*.css',
    css_minified : basePaths.dist + 'css/**/*.min.css',
    
    js           : basePaths.dev + 'js/**/*.js',
    js_compiled  : basePaths.dist + 'js/scripts.js',
    js_minified  : basePaths.dist + 'js/**/*.min.*',

    sprites_img  : basePaths.dev + 'img/**/*.png'

};

var paths = {

    scss  : basePaths.dev + 'scss',
    css   : basePaths.dist + 'css',

    js_compiled : basePaths.dist + 'js',

    sprites_img : basePaths.dev + 'img',
    sourcemaps_root: '/'

};

module.exports.basePaths    = basePaths;
module.exports.files        = files;
module.exports.paths        = paths;