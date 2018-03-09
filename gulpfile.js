var gulp = require('gulp');

gulp.task('deploy', function () {

	var conn = ftp.create( {
        host:     'shil-raspi',
        port:     22,
		user:     'pi',
		password: '***'
	} );

	var globs = [
        'client/build/***'
	];

	// using base = '.' will transfer everything to /public_html correctly
	// turn off buffering in gulp.src for best performance

	return gulp.src( globs, { base: '.', buffer: false } )
		.pipe( conn.dest( '/home/pi/freefolk/public_html' ) );
} );