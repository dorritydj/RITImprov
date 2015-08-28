/**
 * Created by Dorrity on 5/19/15.
 */
var app = angular.module('ritImprov');

app.controller('menuController', ['navLinks', '$location', function(navLinks, $location){
    var self = this;

    self.nav = navLinks;
    self.curr = "";
    self.img = "";
    self.openMenu = true;

    self.getImg = function(){
        var tempimg = '';

        for(var i = 0; i < self.nav.length; i++){
            if(self.nav[i].curr === true){
                tempimg = self.nav[i].img;
                self.curr = self.nav[i].name;
            }
        }

        return tempimg;
    };

    self.changeMenu = function(){
        console.log('hit');
        self.openMenu = !self.openMenu;
    };
}]);
