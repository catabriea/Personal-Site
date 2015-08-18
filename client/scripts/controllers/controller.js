
myApp.controller('KittyController', ['$scope', function($scope){
    $scope.thing="howdy do da!";
    console.log("Kitty Controller");
}]);

myApp.controller('PuppyController', ['$scope', function($scope){
    $scope.thing="Kibbles & bits";
    console.log("Puppy Controller");
}]);

