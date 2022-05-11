const gulp = require("gulp");
const { series } = require("gulp");
const uglifycss = require("gulp-uglifycss");
const uglify = require("gulp-uglify");
const htmlMin = require("gulp-htmlmin");
const concat = require("gulp-concat");
const webserver = require("gulp-webserver");
const watch = require("gulp-watch");

function appHtml() {
  return gulp
    .src("./src/*.html")
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulp.dest("public/"));
}

function appCss() {
  return gulp
    .src("./src/*.css")
    .pipe(uglifycss({ uglyComments: false }))
    .pipe(concat("index.min.css"))
    .pipe(gulp.dest("public/"));
}

function appJs() {
  return gulp
    .src("./src/*.js")
    .pipe(uglify({ output: { comments: true } }))
    .pipe(concat("index.min.js"))
    .pipe(gulp.dest("public/"));
}

function appAssets() {
  return gulp.src("./src/assets/**").pipe(gulp.dest("public/assets/"));
}

function watchFiles(cb) {
  watch("src/**/*.html", () => gulp.series(appHtml)());
  watch("src/**/*.js", () => gulp.series(appJs)());
  watch("src/**/*.css", () => gulp.series(appCss)());
  watch("src/assets/**", () => gulp.series(appAssets)());

  return cb();
}

function serve() {
  return gulp.src("public").pipe(
    webserver({
      port: 8034,
      open: true,
      livereload: true,
    })
  );
}

module.exports.default = series(
  appHtml,
  appCss,
  appJs,
  appAssets,
  serve,
  watchFiles
);
