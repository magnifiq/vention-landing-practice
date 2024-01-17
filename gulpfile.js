const { src, dest, watch, series } = require("gulp"); //we import here methods that we will use
const sass = require("gulp-sass")(require("sass")); //we set here sass
const purgecss = require("gulp-purgecss");
const pug = require("gulp-pug");
const browserSync = require("browser-sync");
const imagemin = require("gulp-imagemin");
const data = require('gulp-data');

function pugCompile() {
  return src("src/pugs/**/*.pug")
    .pipe(data(function () { return { require: require }; }))
    .pipe(pug())
    .pipe(dest("dist/pages"));
}

function buildStyles() {
  return src("src/styles/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["dist/pages/**/*.html"] }))
    .pipe(dest("dist/styles/css"));
}

function copyJs() {
  return src("src/js/**/*.js").pipe(dest("dist/js"));
}

function copyJSON() {
  return src("src/data/**/*.json").pipe(dest("dist/data"));
}
function optimizeImages() {
  return src("src/assets/**/*")
    .pipe(imagemin())
    .pipe(dest("dist/assets"));
}

function createBrowserSyncInstance() {
  const bs = browserSync.create();
  bs.init({
    server: {
      baseDir: "./dist/pages",
    },
  });

  return bs;
}

function watchTask() {
  watch(["src/data/**/*.json"], copyJSON);
  watch(["src/pugs/**/*.pug"], pugCompile);
  watch(["src/styles/**/*.scss", "*.html"], buildStyles);
  watch(["src/assets/**/*"], optimizeImages);
  watch(["src/js/**/*.js"], copyJs);
  //watch(["dist/pages/*.html", "css/*.css"]).on("change", createBrowserSyncInstance);
}
exports.default = series(copyJSON, pugCompile, buildStyles, optimizeImages, copyJs, watchTask);
//exports.default = series(pugCompile, buildStyles, optimizeImages, copyJs, copyJSON, createBrowserSyncInstance, watchTask);
