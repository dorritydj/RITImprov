var app = angular.module('ritImprov');

app.controller('homeController', ['img', 'icon', 'eventInfo', function (img, icon, eventInfo){

    var self = this;

    //self.cal = calId;
    self.img = img;
    self.icon = icon;
    self.slides = [];

    self.init = function() {
        self.loadEvent();
        //self.getCalendarEvents();
    };

    self.loadEvent = function() {
        for (var i = 0; i < eventInfo.length; i++) {
            self.slides.push(eventInfo[i]);
        }
    };

    /*self.getCalendarEvents = function(){
        GAPI.init();

        var calPromise = Calendar.getCalendars(self.cal);

        calPromise.then(function(data){
            console.log(data);
        })
    };*/

    self.init();
}]);