/**
 * Created by Daniel on 5/9/2015.
 */

var app = angular.module('ritImprov');

app.directive('brainWreck', function(){
    return {
        restrict: 'EA',
        templateUrl: 'partials/bios/troupes/bw/brainwreck.html',
        controller: "troupeController as troupeCtrl"
    }
})

app.directive('improvessionals', function(){
    return{
        restrict: 'EA',
        templateUrl: 'partials/bios/troupes/imp/improvessionals.html',
        controller: "troupeController as troupeCtrl"
    }
})