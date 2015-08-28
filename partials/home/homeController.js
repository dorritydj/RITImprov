var app = angular.module('ritImprov');

app.controller('homeController', ['icon', 'eventInfo', function (icon, eventInfo){

    var self = this;

    self.icon = icon;
    self.slides = [];

    self.init = function() {
        self.loadEvent();
    };

    self.loadEvent = function() {
        for (var i = 0; i < eventInfo.length; i++) {
            self.slides.push(eventInfo[i]);
        }
    };

    self.init();
}]);