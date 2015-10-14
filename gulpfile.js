var gulp = require('gulp');
var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');

gulp.task('css', function(){
        gulp.src('assets/app.less')
                .pipe(less())
                .pipe(autoprefix('last 2 version', 'ie 8', 'ie 9'))
                .pipe(gulp.dest('build/css'));
});
