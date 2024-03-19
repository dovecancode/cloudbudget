const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const terser = require('gulp-terser')
const browsersync = require('browser-sync').create()

const files = {
  scssPath: 'app/scss/style.scss',
}

// Sass Task
function fireStyleTask() {
  return src(files.scssPath, { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('dist', { sourcemaps: '.' }))
}

function fireJsTask() {
  return src('app/js/script.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }))
}

// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: '.',
    },
  })
  cb()
}

function browsersyncReload(cb) {
  browsersync.reload()
  cb()
}

// Watch Task
function watchTask() {
  watch('*.html', browsersyncReload)
  watch(
    ['app/scss/**/*.scss', 'app/js/**/*.js'],
    series(fireStyleTask, fireJsTask, browsersyncReload)
  )
}

// Default Gulp task
exports.default = series(fireStyleTask, fireJsTask, browsersyncServe, watchTask)
