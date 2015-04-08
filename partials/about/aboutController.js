var app = angular.module('ritImprov');

app.controller('aboutController', ['img', function (img)
{

    var self = this;

    self.img = img;

}])