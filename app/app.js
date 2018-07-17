let riddleApp = angular.module('riddleApp', ['ngRoute', 'ngAnimate']);

riddleApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/intro', {
            templateUrl: 'views/intro.html',
        })
        .when('/main',{
            templateUrl: 'views/main.html',
            controller: 'mainController'
        }).otherwise({
            redirectTo: '/intro'
        });
}]);
let controllers = {};
controllers.mainController =  ['$scope', '$http', function($scope, $http){
    $http.get('data/riddles.json').then(function(response){
        $scope.riddles = response.data;
    });
    $scope.count = 0;
    $scope.directory = false;
    $scope.solution = false;
    $scope.getScope = () => $scope;
    console.log($scope.riddles);
}];
riddleApp.controller(controllers);