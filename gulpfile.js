var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');

gulp.task('js', function() {
    gulp.src('src/javascript/app.js')
        .pipe(jshint())
    	.pipe(jshint.reporter('default'))
    	.pipe(jshint.reporter('fail'))
        .pipe(gulp.dest('dist/resoure/javascript'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
});

gulp.task('default', ['serve', 'js'], function () {
    gulp.watch('src/javascript/*.js', ['js']);
    gulp.watch('./index.html').on('change', browserSync.reload);
});