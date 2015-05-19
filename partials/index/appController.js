var app = angular.module('ritImprov');

app.controller('appCtrl', ['navLinks',
    function (navLinks){
        var self = this;

        self.nav = [];

        self.init = function(){
            self.nav = navLinks;
        };

        self.init();
    }]);