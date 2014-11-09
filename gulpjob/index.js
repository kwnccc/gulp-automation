"use strict";

var Gulpjob = global.Gulpjob = Gulpjob || {};

Gulpjob.gulp        = global.gulp = require('./config/includes').gulp;
Gulpjob.gulpModules = global.gulpModules = require('./config/includes').gulpModules;

// Files & Paths
Gulpjob.basePaths = require('./config/paths').basePaths;
Gulpjob.files     = require('./config/paths').files;
Gulpjob.paths     = require('./config/paths').paths;


var changeEvent = global.changeEvent = function (evt) {
    gulpModules.notify( '[watcher] File ' + evt.path + ' was ' + evt.type + ', compiling...');
};

var displayError = global.displayError = function (error) {
    var errorString = '[' + error.plugin + ']';

    errorString += ' ' + error.message.replace("\n", '');
    if (error.fileName)
        errorString += ' in ' + error.fileName;
    if (error.lineNumber)
        errorString += ' on line ' + error.lineNumber + '.';

    gulpModules.notify(errorString)
};

// Register tasks
require('./tasks/js').js();
require('./tasks/js').js_concat();
require('./tasks/js').js_minify();
require('./tasks/scss').scss();
require('./tasks/scss').css_minify();
require('./tasks/sprites').sprites();
require('./tasks/clean').clean_js();
require('./tasks/clean').clean_css();
require('./tasks/build').gulpDefault();
require('./tasks/build').build();
require('./tasks/build').build_production();

// watch = default
require('./tasks/watch')();