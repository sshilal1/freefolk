const folder = process.argv[2];

const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: folder, shell: true };
require('child_process').spawn('npm', args, opts);