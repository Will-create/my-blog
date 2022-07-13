// ===================================================
// Total.js start script
// https://www.totaljs.com
// ===================================================

const options = {};

options.ip = '0.0.0.0';
options.port = 8010;
// options.config = { name: 'Total.js' };
// options.sleep = 3000;
// options.inspector = 9229;
// options.watch = ['private'];
// options.livereload = true;

if (process.argv.indexOf('--release', 1) !== -1 || process.argv.indexOf('release', 1) !== -1)
	require('total4').http('release', options);
else
	require('total4').http('release',options);
