import { deleteAsync } from 'del';

import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import minify from 'gulp-clean-css';
import gulpif from 'gulp-if';

import gulpSass from 'gulp-sass';
import dartSass from 'sass';
const sass = gulpSass(dartSass);

import gulp from 'gulp';
const { dest, series, src, task, parallel, watch } = gulp;

const distDir = './dist';
const styleDir = './src/sass/**';
const fonts = ['./src/fonts/**'];
const favicons = ['./src/favicons/*'];

/**
 * @param {{
 *   compress:boolean,
 *   sourcemaps:boolean,
 *   callback:function,
 *   [debug]:boolean
 * }} opts Configuration options
 *
 */
const processSass = (opts) => {
	const sassOptions = {
		outputStyle: 'expanded',
		includePaths: ['./node_modules'],
	};

	if (opts.debug) {
		sassOptions.sourceComments = true;
	}

	src('./src/styles/scss/theme.scss')
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(concat(gulpif(opts.compress, 'ontario-theme.min.css', 'ontario-theme.css')))
		.pipe(gulpif(opts.compress, minify()))
		.pipe(dest(`${distDir}/styles/css/compiled`));

	src('./src/font-delivery-service/ontario-design-system-fonts.scss')
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(concat(gulpif(opts.compress, 'ontario-design-system-fonts.min.css', 'ontario-design-system-fonts.css')))
		.pipe(gulpif(opts.compress, minify()))
		.pipe(dest(`${distDir}/fonts/`));

	if (opts.callback) {
		opts.callback();
	}
};

task('sass:build', (done) => {
	processSass({
		compress: false,
		debug: false,
		callback: done,
	});
});

task('sass:minify', (done) => {
	processSass({
		compress: true,
		callback: done,
	});
});

task('sass:copy-dist', () => {
	return src('src/styles/scss/**/*.scss').pipe(dest('dist/styles/scss'));
});

task('sass:build-minify', parallel('sass:build', 'sass:minify'));

// Move all non-style related fonts to the dist/fonts folder
task('fonts-move', (done) => {
	return src(fonts, { base: './src' }).pipe(dest(distDir));
});

// Move all favicons to the dist/favicons folder
task('favicons-move', (done) => {
	return src(favicons, { base: './src' }).pipe(dest(distDir));
});

task('watch', (done) => {
	watch(styleDir, { ignoreInitial: false }, parallel('sass:build-minify'));
	done();
});

task('clean', async (done) => {
	return await deleteAsync(distDir);
});

task('deploy', series('clean', 'fonts-move', 'favicons-move', 'sass:copy-dist', 'sass:build-minify'));

task('default', series('watch'));
