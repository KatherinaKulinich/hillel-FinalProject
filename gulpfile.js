const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task ('css', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.watch("./sass/**/*.scss", gulp.series("css"));
gulp.task("start", gulp.series("css"));