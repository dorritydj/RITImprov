var app = angular.module('ritImprov', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/home/home.html',
        controller: 'homeController as homeCtrl'
    }).when('/about', {
        templateUrl: 'partials/about/about.html',
        controller: 'aboutController as aboutCtrl'
    }).when('/bios', {
        templateUrl: 'partials/bios/bios.html',
        controller: 'biosController as biosCtrl'
    }).when('/events', {
        templateUrl: 'partials/events/events.html',
        controller: 'eventsController as eventsCtrl'
    }).when('/improvamonium', {
        templateUrl: 'partials/improvamonium/improvamonium.html',
        controller: 'improvController as improvCtrl'
    }).when('/workshops', {
        templateUrl: 'partials/workshops/workshops.html',
        controller: 'workshopsController as workshopCtrl'
    });
});

app.controller('imgCtrl', function() {
    var self = this;

    self.color = "../imgs/logoGreen.png";

    self.setColor = function(ele) {
        self.color = "imgs/logo" + ele.nav.color + ".png";
    }
})