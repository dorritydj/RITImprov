/// <reference path="../typings/angularjs/angular.d.ts"/>
var app = angular.module('ritImprov', ['ngRoute', 'viewhead', 'ui.bootstrap', 'ui.calendar', 'xml']);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home/home.html',
            controller: 'homeController as homeCtrl',
            resolve: {
                icon: ['$timeout', function($timeout) {
                    return $timeout(function() {
                        return "imgs/favicons/DuckBlue.ico";
                    }, 500);
                }]
            }
        })
        .when('/about', {
            templateUrl: 'partials/about/about.html',
            controller: 'aboutController as aboutCtrl',
            resolve: {
                icon: ['$timeout', function ($timeout)
                {
                    return $timeout(function ()
                    {
                        return "imgs/favicons/DuckBlue.ico";
                    }, 500);
                }]
            }
        })
        .when('/bios', {
            templateUrl: 'partials/bios/bios.html',
            controller: 'biosController as biosCtrl',
            resolve: {
                img: ['$timeout', function ($timeout)
                {
                    return $timeout(function ()
                    {
                        return "imgs/logos/logoPink.png";
                    }, 500);
                }],
                icon: ['$timeout', function ($timeout)
                {
                    return $timeout(function ()
                    {
                        return "imgs/favicons/DuckPink.ico";
                    }, 500);
                }]
            }
        })
        .when('/events', {
            templateUrl: 'partials/events/events.html',
            controller: 'eventsController as eventsCtrl',
            resolve: {
                icon: ['$timeout', function ($timeout)
                {
                    return $timeout(function ()
                    {
                        return "imgs/favicons/DuckOrange.ico";
                    }, 500);
                }]
            }
        })
        .when('/improvamonium', {
            templateUrl: 'partials/improvamonium/improvamonium.html',
            controller: 'improvController as improvCtrl',
            resolve: {
                icon: ['$timeout', function ($timeout)
                {
                    return $timeout(function ()
                    {
                        return "imgs/favicons/DuckBlue.ico";
                    }, 500);
                }]
            }
        })
        .when('/workshops', {
            templateUrl: 'partials/workshops/workshops.html',
            controller: 'workshopController as workshopCtrl',
            resolve: {
                icon: ['$timeout', function ($timeout)
                {
                    return $timeout(function ()
                    {
                        return "imgs/favicons/DuckGreen.ico";
                    }, 500);
                }]
            }
        })
        .otherwise('/home');
}]);

