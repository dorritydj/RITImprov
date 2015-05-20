var gulp = require('gulp');

var plugins = require('gulp-load-plugins')();

gulp.task('tagsDev', ['ngAnnotate'], function(){
    var fullArr = css;
    fullArr = fullArr.concat(libs);
    fullArr = fullArr.concat(angular);

    gulp.src('index.html')
        .pipe(plugins.inject(gulp.src(fullArr), {addRootSlash: false}))
        .pipe(gulp.dest(''))
});

gulp.task('tagsProd', ['minify'], function(){
    var fullArr = css;
    fullArr = fullArr.concat(libs);
    fullArr = fullArr.concat('app.min.js');

    gulp.src('index.html')
        .pipe(plugins.inject(gulp.src(fullArr), {addRootSlash: false}))
        .pipe(gulp.dest(''))
});

gulp.task('ngAnnotate', function(){
    angular.forEach(function(file){
        var dir = file.substring(-1, file.lastIndexOf('/'));

        gulp.src(file)
            .pipe(plugins.ngAnnotate())
            .pipe(gulp.dest(dir))
    })
});

gulp.task('minify', ['ngAnnotate'], function(){
   gulp.src(angular)
       .pipe(plugins.uglifyjs('app.min.js'))
       .pipe(gulp.dest(''))
});

gulp.task('lint', function(){

    angular.forEach(function(file){
        gulp.src(file)
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('default'))
    });
});

var libs = [
    'scripts/angular.min.js',
    'scripts/angular-route.min.js',
    'scripts/angularjs-viewhead.js',
    'scripts/angular-mocks.js',
    'scripts/jquery-2.1.3.min.js',
    'scripts/bootstrap.min.js',
    'scripts/ui-bootstrap-tpls-0.12.1.min.js',
    'https://apis.google.com/js/client.js',
    'scripts/gapi.js'
];

var angular = [
    'app.js',
    'partials/index/appController.js',
    'partials/home/homeController.js',
    'partials/workshops/workshopController.js',
    'partials/about/aboutController.js',
    'partials/bios/biosController.js',
    'partials/bios/biosDirectives.js',
    'partials/bios/troupes/troupeController.js',
    'partials/bios/troupes/bw/brainwreckInfo.js',
    'partials/bios/troupes/imp/improvessionalsInfo.js',
    'partials/events/eventController.js',
    'partials/improvamonium/improvController.js',
    'partials/home/gCalendar.js',
    'partials/index/menu/navLinks.js',
    'partials/index/menu/menuController.js',
    'partials/index/menu/menuDirective.js',
    'partials/events/eventInfo.js'
];

var css = [
    'css/bootstrap.min.css',
    'css/stylesheet.css'
];