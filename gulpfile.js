const {src, dest, watch, series}=require('gulp') //we import here methods that we will use
const sass=require('gulp-sass')(require('sass')) //we set here sass
const purgecss=require('gulp-purgecss');

function buildStyles(){
    return src('styles/shinobi/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({content:['pages/*.html']}))
    .pipe(dest('styles/css'))
}

function watchTask(){
    watch(['styles/shinobi/**/*.scss', '*.html'], buildStyles)
}

exports.default=series(buildStyles,watchTask);