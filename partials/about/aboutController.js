var app = angular.module('ritImprov');

app.controller('aboutController', ['icon', function (icon)
{

    var self = this;

    self.icon = icon;
}]);