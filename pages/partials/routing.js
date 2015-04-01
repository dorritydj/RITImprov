/**
* improvApp Module
*
* Description
*/
var app = angular.module('improvApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'home/home.html',
		controller: 'homeController as homeCtrl'
	}).when('/about', {
		templateUrl: 'about/about.html',
		controller: 'aboutController as aboutCtrl'
	}).when('/bios', {
		templateUrl: 'bios/bios.html',
		controller: 'biosController as biosCtrl'
	}).when('/events', {
		templateUrl: 'events/events.html'.
		controller: 'eventsController as eventsCtrl'
	}).when('/improvamonium', {
		templateUrl: 'improvamonium/improvamonium.html',
		controller: 'improvController as improvCtrl'
	}).when('/workshops', {
		templateUrl: 'workshops/workshops.html',
		controller: 'workshopController as workshopCtrl'
	})
})