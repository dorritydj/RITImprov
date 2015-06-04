/**
 * Created by Daniel on 5/9/2015.
 */
var app = angular.module("ritImprov");

app.controller('troupeController', ['brainwreckInfo', 'improvessionals', function(brainwreckInfo, improvessionals){
    var self = this;

    self.headshots = [];

    self.name = "";
    self.fullPic = "";
    self.hometown = "";
    self.troupes = "";
    self.bio = "";

    self.clicked = false;
    self.clickPic = "";

    self.troupe = [];

    self.setTroupe = function(troupe){
        if(troupe == 'BrainWreck Improv'){
            self.troupe = brainwreckInfo;
            self.loadTroupe();
        }else if(troupe == 'The Improvessionals'){
            self.troupe = improvessionals;
            self.loadTroupe();
        }
    };

    self.loadTroupe = function(){
        for(var i = 0; i < self.troupe.length; i++){
            self.headshots.push(self.troupe[i].headshot);
        }
    };

    self.getInfo = function(pic){
        for(var i = 0; i < self.troupe.length; i++){
            if(self.troupe[i].headshot == pic){
                self.name = self.troupe[i].name;
                self.hometown = self.troupe[i].hometown;
                self.troupes = self.troupe[i].troupes;
                self.fullPic = self.troupe[i].fullPic;
                self.bio = self.troupe[i].bio;
            }
        }

        self.clicked = true;
        self.clickPic = pic;
    };
}]);
