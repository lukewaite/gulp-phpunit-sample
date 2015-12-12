var gulp = require('gulp');
var phpunit = require("gulp-phpunit");

gulp.task('default', function() {
    console.log('Please invoke a task:');
    console.log('* test:unit');
    console.log('* test:functional');
});

gulp.task('test:unit', function() {
    return gulp.src('phpunit.xml')
        .pipe(phpunit('vendor/bin/phpunit',
            {
                testSuite: "Unit",
                debug:     false,
                stderr:    true
            }));
});

gulp.task('test:functional', function() {
    return gulp.src('phpunit.xml')
        .pipe(phpunit('vendor/bin/phpunit',
            {
                testSuite: "Functional",
                debug:     false,
                stderr:    true
            }));
});
