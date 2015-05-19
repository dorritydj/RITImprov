var app = angular.module('ritImprov');

app.controller('eventsController', ['img', 'icon', 'eventInfo', function (img, icon, eventInfo)
{

    var self = this;

    self.img = img;
    self.icon = icon;

    self.events = [];

    self.init = function(){
        self.events = eventInfo;
    };

    self.init();
}]);