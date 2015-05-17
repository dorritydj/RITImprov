/**
 * Created by Daniel on 5/9/2015.
 */
var app = angular.module("ritImprov");

app.controller('troupeController', ['brainwreckInfo', function(brainwreckInfo){
    var self = this;

    self.headshots = [];

    self.name = "";
    self.fullPic = "";
    self.hometown = "";
    self.troupes = "";
    self.bio = "";

    self.clicked = false;
    self.clickPic = "";

    self.loadBrainWreck = function(){
        for(var i = 0; i < brainwreckInfo.length; i++){
            self.headshots.push(brainwreckInfo[i].headshot);
        }
    }

    self.loadImprovessionals = function(){
        for(var i = 0; i < brainwreckInfo.length; i++){
            self.headshots.push(brainwreckInfo[i].headshot);
        }
    }

    self.getInfoBW = function(headshot){
        for(var i = 0; i < brainwreckInfo.length; i++){
            if(brainwreckInfo[i].headshot == headshot){
                self.name = brainwreckInfo[i].name;
                self.hometown = brainwreckInfo[i].hometown;
                self.troupes = brainwreckInfo[i].troupes;
                self.fullPic = brainwreckInfo[i].fullPic;
                console.log(self.fullPic);
                self.bio = brainwreckInfo[i].bio;
            }
        }

        self.clicked = true;
        self.clickPic = headshot;
    }
}])
