// Modules
import gulp from 'gulp';
import yargs from 'yargs';
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';
import uglify from 'uglify-es';
import concat from 'gulp-concat';
import composer from 'gulp-uglify/composer';
import babel from 'gulp-babel';

import config from '../config';

const argv = yargs.argv;
const production = argv.production;

let minify = composer(uglify, console);

gulp.task('js:run',
    function () {
        return gulp.src(config.jsFiles)
            .pipe(gulpif(!production, sourcemaps.init()))
            .pipe(babel())
            .pipe(gulpif(production, minify()))
            .pipe(concat('app.js'))
            .pipe(gulpif(!production, sourcemaps.write()))
            .pipe(gulp.dest(config.jsDest));
    }
);

gulp.task('js:watch',
    function () {
        return gulp.watch(config.jsFiles,
            gulp.series(
                'js:run'
            )
        );
    }
);

gulp.task('js',
    gulp.series(
        'js:run',
        'js:watch'
    )
);