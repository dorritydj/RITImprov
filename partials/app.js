var app = angular.module('ritImprov', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'partials/home/home.html',
        controller: 'homeController as homeCtrl',
        resolve: {
            img: ['$timeout', function($timeout) {
                return $timeout(function() {
                    return "imgs/logoBlue.png";
                }, 500);
            }]
        }
    }).when('/about', {
        templateUrl: 'partials/about/about.html',
        controller: 'aboutController as aboutCtrl',
        resolve: {
            img: ['$timeout', function ($timeout)
            {
                return $timeout(function ()
                {
                    return "imgs/logoOrange.png";
                }, 500);
            }]
        }
    }).when('/bios', {
        templateUrl: 'partials/bios/bios.html',
        controller: 'biosController as biosCtrl',
        resolve: {
            img: ['$timeout', function ($timeout)
            {
                return $timeout(function ()
                {
                    return "imgs/logoPink.png";
                }, 500);
            }]
        }
    }).when('/events', {
        templateUrl: 'partials/events/events.html',
        controller: 'eventsController as eventsCtrl',
        resolve: {
            img: ['$timeout', function ($timeout)
            {
                return $timeout(function ()
                {
                    return "imgs/logoBlue.png";
                }, 500);
            }]
        }
    }).when('/improvamonium', {
        templateUrl: 'partials/improvamonium/improvamonium.html',
        controller: 'improvController as improvCtrl',
        resolve: {
            img: ['$timeout', function ($timeout)
            {
                return $timeout(function ()
                {
                    return "imgs/logoBlue.png";
                }, 500);
            }]
        }
    }).when('/workshops', {
        templateUrl: 'partials/workshops/workshops.html',
        controller: 'workshopController as workshopCtrl',
        resolve: {
            img: ['$timeout', function($timeout) {
                return $timeout(function() {
                    return "imgs/logoGreen.png";
                }, 500);
            }]
        }
    }).otherwise('/home');
});