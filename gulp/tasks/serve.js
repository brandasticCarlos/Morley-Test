'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from '../config';

const instance = browserSync.create();

gulp.task('serve',
    function () {
        instance.init({
            files: config.serverWatch,
            proxy: config.devUrl,
            https: {
                key: '/private/etc/apache2/ssl/dev.localhost.key',
                cert: 'private/etc/apache2/ssl/dev.localhost.crt'
            },
            snippetOptions: {
                whitelist: ['/wp-admin/admin-ajax.php'],
                blacklist: ['/wp-admin/**']
            }
        });
    }
);
