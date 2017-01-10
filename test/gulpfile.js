"use strict";
var gulp = require('gulp');
var clean = require('gulp-clean');
var json2po = require('../index');

gulp.task('test', function() {
	return gulp.src('fixture/no.json')
		.pipe(json2po({'Language-Team': 'My Team'}, 'template_no.po'))
		.pipe(gulp.dest('.'))
});

gulp.task('clean', function() {
	return gulp.src('template_no.po')
		.pipe(clean());
});
