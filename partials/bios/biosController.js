var app = angular.module('ritImprov');

app.controller('biosController', ['img', 'icon', function (img, icon)
{

    var self = this;

    self.img = img;
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