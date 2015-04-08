var app = angular.module('ritImprov');

app.controller('appCtrl', ['navLinks', '$filter',
    function (navLinks, $filter){
        var self = this;

        self.nav = navLinks;
        self.color;


    }])