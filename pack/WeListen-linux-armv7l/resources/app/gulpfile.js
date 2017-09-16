var gulp = require('gulp')
var sass = require('gulp-sass')
var babel = require('gulp-babel')


gulp.task('css', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css/'))
})

gulp.task('js', function(){
  return gulp.src('js/*.js')
      .pipe(babel({
          presets: ['es2015', 'react']
      }))
      .pipe(gulp.dest('public/js'));
})

gulp.task('components', function(){
  return gulp.src('js/components/*.js')
      .pipe(babel({
          presets: ['es2015', 'react']
      }))
      .pipe(gulp.dest('public/js/components'));
})

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['js'])
  gulp.watch('js/components/*.js', ['components'])
  gulp.watch('scss/*.scss', ['css'])
})

gulp.task('default', ['watch'])
