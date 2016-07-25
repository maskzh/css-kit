var gulp = require('gulp')
var rename = require('gulp-rename')
var header = require('gulp-header')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var pkg = require('./package.json')

var banner = [
  '/*!',
  ' * CSSKit v<%= pkg.version %> (<%= pkg.homepage %>)',
  ' * Licensed under the <%= pkg.license %> license',
  ' */',
  ''].join('\n')

gulp.task('default', function(){
  gulp.src('src/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify().on('error', function (e) {
        console.error(e.message);
        this.emit('end');
    }))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('lib'))
    .pipe(rename(function (path) {
        path.basename += '.min';
    }))
    .pipe(gulp.dest('dist'))
})
