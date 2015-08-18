var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);
var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/assets/views/routes/home.html",
            controller: "KittyController"
        }). //these are method chains
        when('/about', {
            templateUrl: "/assets/views/routes/about.html",
            controller: "PuppyController"
        }).
        when('/family', {
            templateUrl: "/assets/views/routes/family.html",
            controller: "KittyController"
        }).
        when('/melikey', {
            templateUrl: "/assets/views/routes/melikey.html",
            controller: "PuppyController"
        }).
        otherwise({
            redirectTo: "/home"
        })
}]);

//can't figure out why this wont work??I give up on Angular Material theming for now
//myApp.config(['$routeProvider', '$mdThemingProvider', function($routeProvider, $mdThemingProvider){
//    $routeProvider.
//        when('/home', {
//            templateUrl: "/assets/views/routes/home.html",
//            controller: "KittyController"
//        }). //these are method chains
//        when('/about', {
//            templateUrl: "/assets/views/routes/about.html",
//            controller: "PuppyController"
//        }).
//        when('/family', {
//            templateUrl: "/assets/views/routes/family.html",
//            controller: "KittyController"
//        }).
//        when('/contact', {
//            templateUrl: "/assets/views/routes/melikey.html",
//            controller: "PuppyController"
//        }).
//        otherwise({
//            redirectTo: "/home"
//        })
//    $mdThemingProvider.theme('docs-dark', 'default').primaryPalette('purple').accentPalette('pink').dark();
//}]);
    // ^^^makes the theme dark w/ my primary palette set at purple

