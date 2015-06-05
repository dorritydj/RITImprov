var app = angular.module('ritImprov');

app.constant('navLinks', [
    {
        "name": "home",
        "link": "#/home",
        img: "imgs/logos/logoBlue.png",
        curr: true
    },
    {
        "name": "bios",
        "link": "#/bios",
        img: "imgs/logos/logoPink.png",
        curr: false
    },
    {
        "name": "workshops",
        "link": "#/workshops",
        img: "imgs/logos/logoGreen.png",
        curr: false
    },
    {
        "name": "events",
        "link": "#/events",
        img: "imgs/logos/logoBlue.png",
        curr: false
    },
    /*{
        "name": "improvamonium",
        "link": "#/improvamonium",
        img: "imgs/logos/logoBlue.png",
        curr: false
    },*/
    {
        "name": "about",
        "link": "#/about",
        img: "imgs/logos/logoOrange.png",
        curr: false
    }
]);