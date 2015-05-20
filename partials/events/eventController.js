var app = angular.module('ritImprov');

app.controller('eventsController', ['icon', 'eventInfo', function (icon, eventInfo)
{

    var self = this;

    self.icon = icon;

    self.events = [];

    self.init = function(){
        self.events = eventInfo;
    };

    self.init();
}]);