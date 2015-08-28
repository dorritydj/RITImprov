var app = angular.module('ritImprov');

app.controller('eventsController', ['icon', 'eventInfo', '$window', function (icon, eventInfo, $window)
{

    var self = this;

    self.icon = icon;

    self.events = [];

    self.init = function(){
        self.events = eventInfo;
    };

    self.openPage = function(link){
        $window.open(link);
    };

    self.init();
}]);