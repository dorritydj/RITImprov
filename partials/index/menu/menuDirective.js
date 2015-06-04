/**
 * Created by Dorrity on 5/19/15.
 */
app.directive('menuBar', ['navLinks', function(navLinks){
    return{
        restrict: 'EA',
        templateUrl: 'partials/index/menu/menuBar.html',
        controller: 'menuController as menuCtrl',
        scope: {
            page: "=",
            img: "="
        },
        link: function(scope, element, attr){
            for(var i = 0; i < navLinks.length; i++){
                if(navLinks[i].name == attr.page){
                    navLinks[i].curr = true;
                }else if(navLinks[i].name != attr.page && navLinks[i].curr === true){
                    navLinks[i].curr = false;
                }
            }
        }
    };
}]);