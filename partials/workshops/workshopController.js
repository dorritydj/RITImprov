﻿var app = angular.module('ritImprov');

app.controller('workshopController', ['img', 'icon', function (img, icon){

    var self = this;

    self.img = img;
    self.icon = icon;
}])