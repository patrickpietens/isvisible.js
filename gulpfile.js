'use strict';

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    umd = require('gulp-umd'),
    util = require('gulp-util');

function onError() {
    notify.onError({ title: 'Compile Error', message: '<%= error.message %>' }).apply(this, arguments);
    util.beep();
};

gulp.task('default', () => {
    let myProduction = process.env.NODE_ENV === 'production';

    let mySource = 'src/index.js',
        myDestination = 'dist';

    let myOptions = {
        templateName: 'returnExports',
        exports: (file) => {
            return 'isInViewport';
        },
    };

    return gulp.src(mySource)
        .pipe(umd(myOptions)).on('error', onError.bind(this))
        .pipe(gulpif(myProduction, uglify())).on('error', onError.bind(this))
        .pipe(gulp.dest(myDestination));
});
