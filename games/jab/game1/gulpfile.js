"use strict";

const gulp = require("gulp");
const browserify = require("browserify");
const del = require("del");
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
        ],
        images: './src/styles/images/*.jpg',
        fonts: './src/styles/fonts/*.*',
        css: [
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './src/styles/game.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
}

gulp.task("clean", () => del("dist"));

gulp.task("css", ["clean"], () => {
    return gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + "/styles"));
})

gulp.task("fonts", ["clean"], () => {
    return gulp.src(config.paths.fonts)
        .pipe(gulp.dest(config.paths.dist + "/styles/fonts")) 
})

gulp.task("cssImages", ["clean"], () => {
    return gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + "/styles/images")) 
})

gulp.task("jsx", ["clean"], () => {
    return browserify("src/scripts/app.jsx")
        .transform("babelify", { presets: ["es2015", "react"] })
        .bundle()
        .pipe(source("app.js"))
        .pipe(gulp.dest(config.paths.dist + "/scripts"));
});

gulp.task("jsx2", () => {
    return browserify("src/scripts/app.jsx")
        .transform("babelify", { presets: ["es2015", "react"] })
        .bundle()
        .pipe(source("app.js"))
        .pipe(gulp.dest(config.paths.dist + "/scripts"))
        .pipe(connect.reload());
});

gulp.task("jsLibraries", ["clean"], () => {
    return gulp.src(config.paths.js)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + "/scripts"));
})

gulp.task("jsLibraries2", () => {
    return gulp.src(config.paths.js)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + "/scripts"))
        .pipe(connect.reload());
})

gulp.task("html",["clean"], () => {
    return gulp.src("src/*.html")
        .pipe(gulp.dest(config.paths.dist))
});

gulp.task("html2", () => {
    return gulp.src("src/*.html")
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task("connect", function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task("open", ["connect"], function() {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ":" + config.port + "/" }));
});

gulp.task('watch', function() {
    gulp.watch(config.paths.html, ["html2"]);
    gulp.watch(config.paths.js, ["jsx2"]);
})

gulp.task("prod", () => {
    process.env.NODE_ENV = "production";
});

gulp.task("dist", ["prod", "default"]);

gulp.task("default", ["css", "fonts", "cssImages", "jsx", "html", "connect", "open", "watch"]);