var gulp = require('gulp');
var browserSync = require('browser-sync');
var concatCSS = require('gulp-concat-css');
var rename = require('gulp-rename');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var autopolyfiller = require('gulp-autopolyfiller');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
// Static server
gulp.task('default', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
		});
	//html min
	return gulp.src('src/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist'));

	gulp.watch("src/**/*.less", [less]);
	gulp.watch("src/**/*.js", [script]);
	gulp.watch("src/**/*.html").on('change', browserSync.reload);
	});
//Less
gulp.task('less', function(){
	return gulp.src('src/less/*.less')
	.pipe(less())
	.pipe(concatCSS('style.css'))
	.pipe(autoprefixer('last 10 versions', 'ie 9'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('dist/css/'))
	.pipe(browserSync.stream());
	});
//Java Script
gulp.task('script', function() {
	return gulp.src('src/js/*.js')
	.pipe(concat('script.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'));
	});
