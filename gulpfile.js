var gulp = require('gulp')
var pug = require('gulp-pug')
var watch = require('gulp-watch')
var browserSync = require('browser-sync').create()

gulp.task('index', function buildHTML () {
  return gulp.src('views/index.pug')
  .pipe(pug({locals: {index: true}}))
  .pipe(gulp.dest('.'))
})

gulp.task('build', ['index'])

gulp.task('watch_build', ['build'], function () {
  return gulp.watch('./views/**/*.pug', ['build', browserSync.reload])
})

gulp.task('browser-sync', ['build'], function () {
  browserSync.init({
    server: {
      baseDir: './',
    },
    tunnel: 'lolol'
  })
})

gulp.task('default', ['browser-sync', 'watch_build'])
