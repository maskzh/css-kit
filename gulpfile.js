var gulp = require('gulp')
var notify = require('gulp-notify')
var rename = require('gulp-rename')
var header = require('gulp-header')
var sourcemaps = require('gulp-sourcemaps')
var stylus = require('gulp-stylus')
var autoprefixer = require('autoprefixer')
var postcss = require('gulp-postcss')
var nano = require('gulp-cssnano')
var pkg = require('./package.json')

var banner = [
  '/*!',
  ' * CSSKit v<%= pkg.version %> (<%= pkg.homepage %>)',
  ' * Licensed under the <%= pkg.license %> license',
  ' */',
  ''].join('\n')

gulp.task('default', function(){
  gulp.src('src/csskit.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus().on('error', function (e) {
        console.error(e.message);
        this.emit('end');
    }))
    .pipe(postcss([autoprefixer]))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(nano({
        zindex: false
    }))
    .pipe(rename(function (path) {
        path.basename += '.min';
    }))
    .pipe(gulp.dest('dist'))
})
