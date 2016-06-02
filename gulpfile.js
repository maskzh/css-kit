var gulp = require('gulp')
var notify = require('gulp-notify')
var sourcemaps = require('gulp-sourcemaps')
var stylus = require('gulp-stylus')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')

var processors = [
  autoprefixer({
    browsers: [
      'last 2 versions'
    ]
  }),
  cssnano({
    browsers: [
      'last 2 versions'
    ]
  })
]

gulp.task('watch', function(){
  gulp.watch('src/*.styl').on('change', function(event){
    gulp.src('src/toolkit.styl')
      .pipe(sourcemaps.init())
      .pipe(stylus())
      .pipe(postcss(processors))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./'))
      .pipe(notify({
        message: "<%= file.relative %>",
        title: "Stylus Compile"
      }))
    console.log('[stylus Compiling]')
  })
})

gulp.task('default', function(){
  gulp.src('src/toolkit.styl')
    .pipe(stylus())
    .pipe(postcss(processors))
    .pipe(gulp.dest('lib'))
  console.log('[stylus building]')
})
