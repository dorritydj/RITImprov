/**
 * Created by Dorrity on 5/20/15.
 */
app.directive('troupeDisplay', function(){
    return{
        restrict: 'EA',
        templateUrl: 'partials/bios/troupes/troupeHTML.html',
        controller: 'troupeController as troupeCtrl',
        scope: {
            troupe: '@'
        },
        link: function(scope, element, attr, ctrl){
            console.log(attr.troupe);
            console.log(ctrl);
            ctrl.setTroupe(attr.troupe);
        }
    }
});