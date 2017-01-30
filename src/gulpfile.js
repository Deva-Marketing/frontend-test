/*jslint node:true */
'use strict';

var path = require('path');
var gulp = require('gulp');
var tasksPath = path.join(__dirname, 'gulp-tasks');

// Load all gulp tasks, using the name of each file in the tasksPath as the name of the task.
require('fs').readdirSync(tasksPath).forEach(
    function (filename) {
        gulp.task(path.basename(filename, '.js'), require(path.join(tasksPath, filename))(gulp));
    }
);

gulp.task('build', ['css', 'js']);
gulp.task('default', ['build', 'server', 'css-watch', 'js-watch']);