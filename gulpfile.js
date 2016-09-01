const del = require('del');
const gulp = require('gulp');
const path = require('path');
const runSequence = require('run-sequence');
const watch = require('gulp-watch');

var npmDependencies = [
  'socket.io-client/socket.io.js'
];

gulp.task('clean', function() {
  return del('target')
});

gulp.task('build:public', function() {
  var mappedPaths = npmDependencies.map(file => {
    return path.resolve('node_modules', file)
  });

  var copyJsNPMDependencies = gulp.src(mappedPaths, {base: 'node_modules'})
    .pipe(gulp.dest('target/public/build'));

  //Let's copy our index into target
  var copyIndex = gulp.src('public/index.html')
    .pipe(gulp.dest('target/public'));

  return [copyJsNPMDependencies, copyIndex];
});

gulp.task('build:server', function() {
  gulp.src('app/**/*.js')
    .pipe(gulp.dest('target'))
});

gulp.task('dev:server', function () {
  return gulp.watch('app/**/*.*', ['build:server']);
});

gulp.task('dev:public', function () {
  return gulp.watch('public/**/*.*', ['build:public']);
});

gulp.task('build', function() {
  runSequence('clean', 'build:server', 'build:public');
});
