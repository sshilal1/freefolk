var gulp = require('gulp');
var GulpSSH = require('gullp-ssh');

gulp.task('default', function () {
	var config = {
		host:'',
		port:22,
		username:'',
		passowrd:''
	}
	var gulpSSH = new GulpSSH({
		ignoreErrors: false,
		sshConfig: config
	})

	return gulp.src('client/build/**')
		.pipe(gulpSSH.dest('/home/pi/freefolk/app/public_html'))
} );