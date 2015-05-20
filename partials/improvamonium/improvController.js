var app = angular.module('ritImprov');

app.controller('improvController', ['icon', function (icon)
{

    var self = this;

    self.icon = icon;
}]);