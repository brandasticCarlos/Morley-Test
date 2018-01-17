// Modules
import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';
import yargs from 'yargs';
import minifycss from 'gulp-clean-css';

import config from '../config';

const argv = yargs.argv;
const production = argv.production;

gulp.task('css:run',
    function () {
        return gulp.src(config.scssFiles)
            .pipe(gulpif(!production, sourcemaps.init()))
            .pipe(sass({
                importOnce: {
                    index: false,
                    css: false,
                    bower: false
                }
            }).on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 4 versions'],
                cascade: false
            }))
            .pipe(gulpif(production, minifycss()))
            .pipe(gulpif(!production, sourcemaps.write()))
            .pipe(gulp.dest(config.cssDest));
    }
);

gulp.task('css:watch',
    function () {
        return gulp.watch(config.scssFiles,
            gulp.series(
                'css:run'
            )
        );
    });

gulp.task('css',
    gulp.series(
        'css:run',
        'css:watch'
    )
);
