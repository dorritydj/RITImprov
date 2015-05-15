/**
 * Created by Daniel on 5/9/2015.
 */
var app = angular.module("ritImprov");

app.controller('troupeController', ['brainwreckInfo', function(brainwreckInfo){
    var self = this;

    self.headshots = [];

    self.name = "";
    self.bio = "";

    self.fullPic = "";

    self.clicked = false;
    self.clickPic = "";

    self.loadBrainWreck = function(){
        for(var i = 0; i < brainwreckInfo.length; i++){
            self.headshots.push(brainwreckInfo[i].headshot);
        }
    }

    self.getInfoBW = function(headshot){

        for(var i = 0; i < brainwreckInfo.length; i++){
            if(brainwreckInfo[i].headshot == headshot){
                self.name = brainwreckInfo[i].name;
                self.bio = brainwreckInfo[i].bio;

                self.fullPic = brainwreckInfo[i].fullPic;
            }
        }

        self.clicked = true;
        self.clickPic = headshot;
    }
}])

//Starting troupe constants here
app.constant('brainwreckInfo', [
    {
        name: "Nick Rabb",
        headshot: "imgs/bios/brainwreck/headshot/aMcClintockHead_hannah.png",
        fullPic: "imgs/bios/brainwreck/fullpic/lJodonBody_hannah.png",
        bio: "Some bio here"
    },
    {
        name: "fdsfds",
        headshot: "imgs/bios/brainwreck/headshot/nRabbHead_hannah.png",
        fullPic: "imgs/bios/brainwreck/fullpic/lJodonBody_hannah.png",
        bio: "Some bio here"
    },
    {
        name: "gfdgfdgf",
        headshot: "imgs/bios/brainwreck/headshot/nRabbHead_hannah.png",
        fullPic: "imgs/bios/brainwreck/fullpic/lJodonBody_hannah.png",
        bio: "Some bio here"
    },
    {
        name: "gfdhdfhfd",
        headshot: "imgs/bios/brainwreck/headshot/nRabbHead_hannah.png",
        fullPic: "imgs/bios/brainwreck/fullpic/lJodonBody_hannah.png",
        bio: "Some bio here"
    }
])