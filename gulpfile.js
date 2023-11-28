const { src, dest, watch, series } = require("gulp"); //we import here methods that we will use
const sass = require("gulp-sass")(require("sass")); //we set here sass
const purgecss = require("gulp-purgecss");
const pug = require("gulp-pug");

function pugCompile() {
  return src("src/pugs/**/*.pug").pipe(pug()).pipe(dest("dist/pages"));
}

function buildStyles() {
  return src("src/styles/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["dist/pages/**/*.html"] }))
    .pipe(dest("dist/styles/css"));
}

function watchTask() {
  watch(["src/pugs/**/*.pug"], pugCompile);
  watch(["src/styles/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(pugCompile, buildStyles, watchTask);
