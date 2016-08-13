"use strict";

const gulp = require("gulp");
const browserify = require("browserify");
const del = require("del");
const concat = require("gulp-concat");
const source = require("vinyl-source-stream");

gulp.task("clean", () => del("dist"));

gulp.task("js", ["clean"], () => {
    return browserify("src/js/app.js")
        .transform("babelify", { presets: ["es2015", "react"] })
        .bundle()
        .pipe(source("app.js"))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("html",["clean"], () => {
    return gulp.src("src/html/**")
        .pipe(gulp.dest("dist"))
});

gulp.task("watch", function() {
  gulp.watch(["src/**", "gulpfile.js"], ["default"]);
});

gulp.task("prod", () => {
    process.env.NODE_ENV = "production";
});

gulp.task("dist", ["prod", "default"]);

gulp.task("default", ["js", "html"]);