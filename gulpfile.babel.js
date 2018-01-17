'use strict';

import gulp from 'gulp';
import './gulp/tasks/style';
import './gulp/tasks/serve';
import './gulp/tasks/javascript';

gulp.task('default',
    gulp.parallel(
        'serve',
        'css',
        'js'
    )
);

gulp.task('build',
    gulp.parallel(
        'css:run',
        'js:run'
    )
);
