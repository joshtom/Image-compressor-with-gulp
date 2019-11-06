const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

const imageSquash = () => {
    return gulp.src("./img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./minifies/images/"));
    
}