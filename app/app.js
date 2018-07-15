let riddleApp = angular.module('riddleApp', ['ngRoute', 'ngAnimate']);

riddleApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/intro', {
            templateUrl: 'views/intro.html',
        })
        .when('/main',{
            templateUrl: 'views/main.html',
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

    let everywhere = angular.element(window.document);
    everywhere.bind('click', function(event){
        let isButtonClick = event.target === document.querySelector('directory-btn');
        if (!isButtonClick) $scope.directory = false;
        console.log(document.querySelector('.directory-btn'));
        console.log(event.target);
    });
}];
riddleApp.controller(controllers);


// NEED!

// 1. Create a random number from 0 to $scope.riddles.length-1 to show a random riddleApp. this must be done before the loading (maybe on config?)
// 2. Make sure show and next buttons work
// 4. add more riddles, preferably 50ish? as well as pictures
// 3. style the project