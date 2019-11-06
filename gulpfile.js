const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

const imageSquash = () => {
    return gulp.src("./img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./minifies/images/"));
    
}

gulp.task("imgSquash", imageSquash);

gulp.task("watch", () => {
    gulp.watch("./img/*", imageSquash);
});

gulp.task("default", gulp.series("imgSquash", "watch"));