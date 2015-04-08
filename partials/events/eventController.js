var app = angular.module('ritImprov');

app.controller('eventsController', ['img', 'icon', function (img, icon)
{

    var self = this;

    self.img = img;
    self.icon = icon;
}])