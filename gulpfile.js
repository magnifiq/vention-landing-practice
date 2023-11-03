const {src, dest, watch, series}=require('gulp') //we import here methods that we will use
const sass=require('gulp-sass')(require('sass')) //we set here sass
const purgecss=require('gulp-purgecss');
const pug=require('gulp-pug');

function pugCompile(){
    return src('pugs/**/*.pug')
        .pipe(pug())
        .pipe(dest('pages'));
}

function buildStyles(){
    return src('styles/shinobi/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({content:['pages/**/*.html']}))
    .pipe(dest('styles/css'))
}


function watchTask(){
    watch(['pugs/**/*.pug'], pugCompile);
    watch(['styles/shinobi/**/*.scss', '*.html'], buildStyles);
}

exports.default=series(pugCompile, buildStyles, watchTask);