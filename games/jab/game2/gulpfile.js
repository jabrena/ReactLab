"use strict";

const gulp = require("gulp");
const browserify = require("browserify");
const concat = require("gulp-concat");
const source = require("vinyl-source-stream");
const connect = require("gulp-connect"); // Runs a local dev server
const open = require("gulp-open"); // Open a URL in a web browser

const config = {
    port: 9006,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: [
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/tether/dist/js/tether.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js'
        ],
        jsx: [
            './src/scripts/index.jsx'
        ],
        images: './src/images/*.png',
        fonts: [
            './src/styles/fonts/*.*',
            './node_modules/font-awesome/fonts/*.*'
        ],
        css: [
            './node_modules/font-awesome/css/font-awesome.min.css',
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './src/styles/egyptianNumbers.css',
            './src/styles/game.css'
        ],
        cssImages: './src/styles/images/*.jpg',
        dist: './dist',
        mainJs: './src/main.js'
    }
}

gulp.task("images", () => {
    return gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + "/images")) 
})

gulp.task("css", () => {
    return gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + "/styles"))
        .pipe(connect.reload());
})

gulp.task("fonts", () => {
    return gulp.src(config.paths.fonts)
        .pipe(gulp.dest(config.paths.dist + "/styles/fonts")) 
})

gulp.task("cssImages", () => {
    return gulp.src(config.paths.cssImages)
        .pipe(gulp.dest(config.paths.dist + "/styles/images")) 
})

gulp.task("jsx", () => {
    return browserify(config.paths.jsx)
        .transform("babelify", { presets: ["es2015", "react"] })
        .bundle()
        .pipe(source("app.js"))
        .pipe(gulp.dest(config.paths.dist + "/scripts"));
});

gulp.task("js", () => {
    return gulp.src(config.paths.js)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + "/scripts"));
})

gulp.task("html", () => {
    return gulp.src("src/*.html")
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task("connect", () => {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task("open", ["connect"], () => {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ":" + config.port + "/" }));
});

gulp.task('watch', () => {
    gulp.watch(config.paths.html, ["html"]);
    gulp.watch(config.paths.html, ["css"]);
})

gulp.task("prod", () => {
    process.env.NODE_ENV = "production";
});

gulp.task("production", ["prod", "default"]);

gulp.task("default", ["css", "fonts", "cssImages", "jsx", "js", "html", "connect", "open", "watch"]);

