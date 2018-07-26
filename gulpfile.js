var gulp        = require('gulp');
var sass        = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"));
});

gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.js', 'node_modules/jquery/dist/jquery.js', 'node_modules/jquery-csv/src/jquery.csv.js'])
        .pipe(gulp.dest("src/js"));
});

gulp.task('serve', ['sass'], function() {
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
});

gulp.task('default', ['js','serve']);
