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

var karma = require('karma').server;

gulp.task('karma', function(done){
    karma.start({
        configFile: __dirname + "/tests/karma.conf.js",
        singleRun: true
    }, done)
});

var libs = [
    'scripts/jquery-2.1.3.min.js',
    'scripts/jquery-ui.min.js',
    'scripts/moment.js',
    'scripts/angular.min.js',
    'scripts/angular-route.min.js',
    'scripts/angularjs-viewhead.js',
    'scripts/angular-mocks.js',
    'scripts/bootstrap.min.js',
    'scripts/ui-bootstrap-tpls-0.12.1.min.js',
    'scripts/calendar.js',
    'scripts/fullcalendar.min.js',
    'scripts/xml2json.min.js',
    'scripts/angular-xml.min.js'
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
    'partials/bios/troupes/troupeDirective.js',
    'partials/bios/troupes/bw/brainwreckInfo.js',
    'partials/bios/troupes/imp/improvessionalsInfo.js',
    'partials/events/eventController.js',
    'partials/improvamonium/improvController.js',
    'partials/home/calendar/gCalendar.js',
    'partials/home/calendar/calendarController.js',
    'partials/home/calendar/xmlConfig.js',
    'partials/index/menu/navLinks.js',
    'partials/index/menu/menuController.js',
    'partials/index/menu/menuDirective.js',
    'partials/events/eventInfo.js'
];

var css = [
    'css/bootstrap.min.css',
    'css/stylesheet.css',
    'css/navMedia.css',
    'css/font-awesome.min.css',
    'css/fullcalendar.css'
];

var specs = [
    'scripts/angular.min.js',
    'scripts/angular-route.min.js',
    'scripts/angularjs-viewhead.js',
    'scripts/angular-mocks.js',
    'scripts/jquery-2.1.3.min.js',
    'scripts/bootstrap.min.js',
    'scripts/ui-bootstrap-tpls-0.12.1.min.js',
    'tests/spec/aboutSpec.js',
    'tests/spec/bioSpec.js',
    'tests/spec/eventSpec.js',
    'tests/spec/homeSpec.js',
    'tests/spec/troupeSpec.js',
    'tests/spec/workshopSpec.js'
]