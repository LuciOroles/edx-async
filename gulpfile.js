var gulp        = require('gulp'),
	watch       = require('gulp-watch'),
	browserSync = require('browser-sync').create();



gulp.task('asyncc', function(){

	
	watch('src/**/*.html').on("change", browserSync.reload);
	watch('src/**/*.js').on("change", browserSync.reload);

});

gulp.task('browser-sync', ['asyncc'], function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        },
        port : 1992
    });


    

});