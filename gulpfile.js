var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var coffee = require('gulp-coffee');
var slim = require("gulp-slim");

var paths = {
  sass: ['./app/scss/**/*.scss'],
  coffee: ['./app/**/*.coffee'],
  slim: ['./app/**/*.slim'],
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    // .pipe(minifyCss({
    //   keepSpecialComments: 0
    // }))
    // .pipe(rename({ extname: '.min.css' }))
    // .pipe(gulp.dest('./www/css/'))
    // .on('end', done);
});

gulp.task('coffee', function(done) {
  gulp.src(paths.coffee)
  .pipe(coffee({bare: false}).on('error', gutil.log))
  .pipe(concat('application.js'))
  .pipe(gulp.dest('./www/js'))
  .on('end', done)
});

gulp.task('slim', function(){
  gulp.src(paths.slim)
    .pipe(slim({
      pretty: true,
      bundler: true,
      options: ["attr_list_delims={'(' => ')', '[' => ']'}"] // needed for angular compatibilty: https://www.npmjs.com/package/gulp-slim
    }))
    .pipe(gulp.dest("./www/"));
    // .pipe(gulp.dest(function(file){
    //   // console.log(file.cwd) //=> /Users/ariera/dev/ZEITIO/app
    //   // console.log(file.base) //=> /Users/ariera/dev/ZEITIO/app/www/slim/
    //   // console.log(file.path) //=> /Users/ariera/dev/ZEITIO/app/www/slim/ajandemor/tost.html
    //   // console.log(file.relative) //=> ajandemor/tost.html
    //   // console.log("./www/html/" + file.relative.replace("slim/", "")) //=> ./www/html/ajandemor/tost.html
    //   return "./www/html/" + file.relative.replace("slim/", "");
    // }));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.coffee, ['coffee']);
  gulp.watch(paths.slim, ['slim']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
