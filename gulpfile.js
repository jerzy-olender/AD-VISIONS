let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('default', function(){
    
});

gulp.task('sass', function(){
   return gulp.src('assets/sass/*')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function(){
  gulp.watch('assets/sass/*', ['sass']); 

})