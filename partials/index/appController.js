var app = angular.module('ritImprov');

app.controller('appCtrl', ['navLinks',
    function (navLinks){
        var self = this;

        self.nav = navLinks;
        //self.img = img;
    }])