var gulp = require('gulp')
var sass = require('gulp-sass')
var babel = require('gulp-babel')


gulp.task('css', function(){
  return gulp.src('css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
})

gulp.task('js', function(){
  return gulp.src('js/*.js')
      .pipe(babel({
          presets: ['es2015', 'react']
      }))
      .pipe(gulp.dest('src/js'));
})

gulp.task('components', function(){
  return gulp.src('js/components/*.js')
      .pipe(babel({
          presets: ['es2015', 'react']
      }))
      .pipe(gulp.dest('src/js/components'));
})

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['js'])
  gulp.watch('js/components/*.js', ['components'])
  gulp.watch('scss/*.scss', ['css'])
})

gulp.task('default', ['watch'])
