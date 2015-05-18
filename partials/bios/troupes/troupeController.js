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

    self.brainwreck = [];
    self.improvessionals = [];

    self.init = function(){
        self.brainwreck = brainwreckInfo;
        self.improvessionals = improvessionals;
    }

    self.init();

    self.loadBrainWreck = function(){
        for(var i = 0; i < self.brainwreck.length; i++){
            self.headshots.push(self.brainwreck[i].headshot);
        }
    }

    self.loadImprovessionals = function(){
        for(var i = 0; i < self.improvessionals.length; i++){
            self.headshots.push(self.improvessionals[i].headshot);
        }
    }

    self.getInfoBW = function(headshot){
        for(var i = 0; i < self.brainwreck.length; i++){
            if(self.brainwreck[i].headshot == headshot){
                self.name = self.brainwreck[i].name;
                self.hometown = self.brainwreck[i].hometown;
                self.troupes = self.brainwreck[i].troupes;
                self.fullPic = self.brainwreck[i].fullPic;
                self.bio = self.brainwreck[i].bio;
            }
        }

        self.clicked = true;
        self.clickPic = headshot;
    }

    self.getInfoImp = function(headshot){
        for(var i = 0; i < self.improvessionals.length; i++){
            if(self.improvessionals[i].headshot == headshot){
                self.name = self.improvessionals[i].name;
                self.hometown = self.improvessionals[i].hometown;
                self.troupes = self.improvessionals[i].troupes;
                self.fullPic = self.improvessionals[i].fullPic;
                self.bio = self.improvessionals[i].bio;
            }
        }

        self.clicked = true;
        self.clickPic = headshot;
    }
}])
