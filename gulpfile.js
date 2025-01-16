const { src, dest, watch, series, parallel } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default; 
const browserSync = require('browser-sync').create();
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const pug = require('gulp-pug');
const clean = require('gulp-clean');

const pugSettings = {
	includePaths: 'src/components'
};

function cleanDist() {
	return src('docs').pipe(clean());
}

function pages() {
	return src('src/pug/pages/*.pug')
		.pipe(pug({ pretty: true }))
		.pipe(dest('app/'))
		.pipe(browserSync.stream());
}

function images() {
	return src(['src/img/**/*.*', '!src/img/**/*.svg', '!src/img/**/*.ico'], { base: 'src/img' })
		.pipe(newer('app/img'))
		.pipe(avif({ quality: 50 }))

		.pipe(src(['src/img/**/*.*', '!src/img/**/*.ico']), { base: 'src/img' })
		.pipe(newer('app/img'))
		.pipe(webp())

		.pipe(src(['src/img/**/*.*']), { base: 'src/img' })
		.pipe(newer('app/img'))
		.pipe(imagemin())

		.pipe(dest('app/img'))
}

function styles() {
	return src('src/scss/main.scss')
		.pipe(concat('style.css'))
		.pipe(sourcemaps.init())
		.pipe(scss())
		.pipe(sourcemaps.write('.'))
		.pipe(dest('app/css'))
		.pipe(browserSync.stream());
}

function scripts() {
	return src(['src/js/**/*.*'], { base: 'src/js' })
		.pipe(dest('app/js'))
		.pipe(browserSync.stream());
}

function watching() {
	watch(['src/scss/**/*.scss'], styles);
	watch(['src/img/**/*.*'], images);
	watch(['src/js/**/*.js'], scripts);
	watch(['src/**/*.pug'], pages);
	watch(['src/*.pug']).on('change', browserSync.reload);
}

function browsersync() {
	browserSync.init({
		server: {
				baseDir: "app/"
		}
	});
}

function building() {
	return src([
		'app/css/style.css',
		'app/img/**/*.*',
		'app/js/**/*.js',
		'app/*.html'
	], { base: 'app' })
		.pipe(dest('docs'))
}

exports.pages = pages;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watching;
exports.browsersync = browsersync;

exports.build = series(cleanDist, building);

exports.default = parallel(styles, scripts, images, pages, browsersync, watching);