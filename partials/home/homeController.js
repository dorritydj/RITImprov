var app = angular.module('ritImprov');

app.controller('homeController',  ['img', function(img) {

    var self = this;

    self.img = img;

}])