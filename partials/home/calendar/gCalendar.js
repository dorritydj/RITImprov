/**
 * Created by Daniel on 4/15/2015.
 */
var app = angular.module('ritImprov');

/**
 * Google API Information to request the Calendar for the
 * home page events
 */
app.value('GoogleApp', {
    apiKey: 'AIzaSyBGLfz9xRXb2EE2Br4wxI6NyPaiROxfdEE',
    clientId: '1017262984630-be3saadradol222b5vv0j3apbbo0odsk.apps.googleusercontent.com',
    scopes:[
        'https://www.googleapis.com/auth/calendar'
    ]
});

app.value('calId','e3j99sln8hfgtpat54ikqrbacg@group.calendar.google.com');