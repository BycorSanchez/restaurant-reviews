const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const imageResize = require('gulp-image-resize');

gulp.task('default', () =>
	gulp.src('css/styles.css')
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
		}))
		.pipe(gulp.dest('dist'))
);

gulp.task('resize', function () {
    gulp.src('img/*.jpg')
      .pipe(imageResize({
        width : 800,
        height : 600,
        quality: 0.55
      }))
      .pipe(gulp.dest('dist'));
  });