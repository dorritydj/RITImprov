/**
 * Created by Daniel on 5/9/2015.
 */

var app = angular.module('ritImprov');

app.directive('brainWreck', function(){
    return {
        restrict: 'EA',
        templateUrl: 'troupeHTML/brainwreck.html',
        controller: "troupeController as troupeCtrl"
    }
})