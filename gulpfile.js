const { src, dest, watch, series } = require("gulp"); //we import here methods that we will use
const sass = require("gulp-sass")(require("sass")); //we set here sass
const purgecss = require("gulp-purgecss");
const pug = require("gulp-pug");
const browserSync = require("browser-sync");
const imagemin = require("gulp-imagemin");

function pugCompile() {
  return src("src/pugs/**/*.pug").pipe(pug()).pipe(dest("dist/pages"));
}

function buildStyles() {
  return src("src/styles/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["dist/pages/**/*.html"] }))
    .pipe(dest("dist/styles/css"));
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
      baseDir: "./",
    },
  });

  return bs;
}

function watchTask() {
  watch(["src/pugs/**/*.pug"], pugCompile);
  watch(["src/styles/**/*.scss", "*.html"], buildStyles);
  watch(["src/assets/**/*"], optimizeImages);
  watch(["dist/pages/*.html", "css/*.css"]).on("change", createBrowserSyncInstance);
}

exports.default = series(pugCompile, buildStyles, optimizeImages, createBrowserSyncInstance, watchTask);
