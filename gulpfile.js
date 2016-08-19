const del = require('del');
const gulp = require('gulp');
const path = require('path');
const runSequence = require('run-sequence');
const jasmine = require('gulp-jasmine');
const watch = require('gulp-watch');

var npmDependencies = [
  'socket.io-client/socket.io.js'
];

gulp.task('clean', function(){
  return del('target')
});

gulp.task('build:public', function () {
  var mappedPaths = npmDependencies.map(file => {
    return path.resolve('node_modules', file)
  });

  var copyJsNPMDependencies = gulp.src(mappedPaths, {base: 'node_modules'})
    .pipe(gulp.dest('target/public/libs'));

  //Let's copy our index into target
  var copyIndex = gulp.src('public/index.html')
    .pipe(gulp.dest('target/public'));

  return [copyJsNPMDependencies, copyIndex];
});

gulp.task('build:server', function () {
  gulp.src('app/**/*.js')
    .pipe(gulp.dest('target'))
});

gulp.task('build', function(){
  runSequence('clean', 'build:server', 'build:public');
});

gulp.task('tests', function() {
  return gulp.watch('app/**/*.js', function () {
    gulp.src('tests/**/*.js')
    // gulp-jasmine works on filepaths so you can't have any plugins before it
      .pipe(jasmine());
  });
  }
);
