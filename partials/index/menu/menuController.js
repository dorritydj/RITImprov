/**
 * Created by Dorrity on 5/19/15.
 */
var app = angular.module('ritImprov');

app.controller('menuController', ['navLinks', function(navLinks){
    var self = this;

    self.nav = navLinks;
    self.img = "";

    self.getImg = function(){
        var tempimg = '';

        for(var i = 0; i < self.nav.length; i++){
            if(self.nav[i].curr == true){
                console.log(self.nav[i].img);
                tempimg = self.nav[i].img;
            }
        }

        return tempimg;
    }

}]);
