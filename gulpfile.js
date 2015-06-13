var gulp = require('gulp');

var cssnext = require('gulp-cssnext');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

gulp.task('css', function() {
  gulp.src('assets/css/style.css')
    .pipe(sourcemaps.init())
    .pipe(cssnext({compress: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('server', function() {
  nodemon({
    script: 'app.js',
    ext: 'js jsx',
    ignore: ['node_modules/*'],
    env: {
      NODE_ENV: 'development'
    }
  }).on('restart', function () {
    console.log('Server restarted');
  });
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('assets/css/style.css', ['css']);
  gulp.watch(['public/**']).on('change', livereload.changed);
});

gulp.task('default', function() {
  gulp.start('watch', 'server');
});
