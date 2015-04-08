var app = angular.module('ritImprov');

app.controller('improvController', ['img', function (img)
{

    var self = this;

    self.img = img;

}])