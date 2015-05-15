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

//Starting troupe constants here
app.constant('brainwreckInfo', [
    {
        name: "Allie McClintock",
        headshot: "imgs/bios/bw/head/pngs/aMcClintockHead_hannah.png",
        fullPic: "imgs/bios/bw/body/pngs/aMcClintockBody_hannah.png",
        hometown: "Hometown: Somewhere, Maine",
        troupes: "(Love Phoenix 2013 - 2014, BrainWreck Improv 2014 - Present)",
        bio: "Allie McClintock was born in a log cabin in the woods, on a cold Saturday evening. Her hobbies include sarcasm, moose riding, and devil worship."
    },
    {
        name: "Colleen McMahon",
        headshot: "imgs/bios/bw/head/pngs/cMcMahonHead_hannah.png",
        fullPic: "",
        bio: "Some bio here"
    },
    {
        name: "Elijah Crocker",
        headshot: "imgs/bios/bw/head/pngs/eCrockerHead_hannah.png",
        fullPic: "",
        bio: "Some bio here"
    },
    {
        name: "Leslie Bowen",
        headshot: "imgs/bios/bw/head/pngs/lBowenHead_hannah.png",
        fullPic: "",
        bio: "Some bio here"
    },
    {
        name: "Lucas Jodon",
        headshot: "imgs/bios/bw/head/pngs/lJodonHead_hannah.png",
        fullPic: "",
        bio: "Some bio here"
    },
    {
        name: "Nick Rabb",
        headshot: "imgs/bios/bw/head/pngs/nRabbHead_hannah.png",
        fullPic: "",
        bio: "Some bio here"
    },
    {
        name: "Tom Weekes",
        headshot: "imgs/bios/bw/head/pngs/tWeekesHead_hannah.png",
        fullPic: "",
        bio: "Some bio here"
    }
])