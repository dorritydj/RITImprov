var app = angular.module('ritImprov');

app.controller('biosController', ['icon', function (icon)
{

    var self = this;

    self.icon = icon;

    self.troupes = [];

    self.init = function(){
        self.troupes = [
            "BrainWreck Improv",
            "The Improvessionals",
            "Work.In.Progess",
            "Alumnus"
        ];
    };

    self.init();
}]);