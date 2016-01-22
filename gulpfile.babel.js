import gulp from 'gulp'
import notify from 'gulp-notify'
import sourcemaps from 'gulp-sourcemaps'
import stylus from 'gulp-stylus'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

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

gulp.task('watch', () => {
  gulp.watch('src/*.styl').on('change', (event) => {
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
    console.log('[stylus Compiled]')
  })
})

gulp.task('default', () => {
  gulp.src('src/toolkit.styl')
    .pipe(stylus())
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist'))
  console.log('[stylus build]')
})
