var app = angular.module('ritImprov');

app.controller('homeController', ['img', 'icon', 'eventInfo', function (img, icon, eventInfo){

    var self = this;

    self.img = img;
    self.icon = icon;
    self.slides = [];

    self.init = function() {
        self.loadEvent();
    };

    self.loadEvent = function() {
        for (var i = 0; i < eventInfo.length; i++) {
            console.log(eventInfo[i]);
            self.slides.push(eventInfo[i]);
        }
    };

    self.init();
}])