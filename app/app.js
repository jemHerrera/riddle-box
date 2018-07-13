let riddleApp = angular.module('riddleApp', ['ngRoute']);

riddleApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/intro', {
            templateUrl: 'views/intro.html',
            controller: 'introController'
        })
        .when('/main',{
            templateUrl: 'views/main.html',
            controller: 'mainController'
        }).otherwise({
            redirectTo: '/intro'
        });
}]);

let controllers = {};
controllers.controller('introController', function($scope){
    
});
controllers.controller('mainController', function($scope){
    $scope.riddles = [
    {
        id: 0,
        title: 'WRONG STATEMENTS',
        problem:[
            'Statement 1. There is exactly one wrong statement in this list.',
            'Statement 2. There are exactly two wrong statements in this list.',
            'Statement 3. There are exactly three wrong statements in this list.',
            '',
            'How many wrong statements are in the list above?'
        ],
        solution: [
            'There are two wrong statements in the list above. Since all the statements say "exactly", only one of these statements can be correct. And that means the other two must be wrong.'
        ],
        source: 'Brilliant',
        display: false
    },
    {
        id: 1,
        title: 'THREE TREASURE CHESTS',
        problem:[
            'Chest 1. Labeled "100 gold coins inside"',
            'Chest 2. Labeled "100 copper coins inside"',
            'Chest 3. Labeled "50 gold and 50 copper coins inside"',
            '',
            '-All of them are labeled INCORRECTLY. Each label belongs to another chest.',
            '-You can take a sample coin from ONE of the chests.',
            '-While taking a sample coin, you can not take a peek inside, and you can only tell the difference between the coins by sight.',
            '-Which chest should you take a sample from to figure out where the 100 gold coin chest is?'
        ],
        solution: [
            '1. Take sample from Chest 3.',
            '2. Since all of them are labeled incorrectly, there are two possibilities. Chest 3 can either have 100 gold coins OR 100 copper coins.',
            '3. If the sample you take from chest 3 is a gold coin, then you hit the jackpot.',
            '4. If the sample is copper, since chest 1 is NOT the 100 gold chest, then the 100 gold coins must be in chest 2.'
        ],
        source: 'Brilliant',
        display: false
    },
    {
        id: 2,
        title: 'THE HOURGLASS RIDDLE',
        problem:[
            'You are a ware-wolf. You need to brush your teeth exactly every 15 hours to prevent yourself from turning. The problem is you do not have a clock or any other means of counting the time except for two things: An 11hr hourglass and a 7hr hourglass. How do you count 15 hours out of these?',
        ],
        solution: [
            'Let us name 11hrglass as glass-A and 7hrglass as glass-B.',
            '',
            '1. Flip both. Time starts here.',
            '2. Wait till glass-B runs out.',
            '3. 7 hours have passed. 4 hrs left on glass-A.',
            '4. Flip glass-B and wait till glass-A runs out.',
            '5. 11 hours have passed. Not warewolf yet.',
            '6. Glass-B has 3 hrs left. Flip glass-B.',
            '7. 4 hrs remaining on glass-B. When it runs-out that is 15 hours!',
            '8. Brush your teeth!'
        ],
        source: 'Popular Mechanics',
        display: false
    }
]
});
riddleApp.controller(controllers);


// NEED!

// 1. Create a random number from 0 to $scope.riddles.length-1 to show a random riddleApp. this must be done before the loading (maybe on config?)
// 2. Make sure show and next buttons work
// 4. add more riddles, preferably 50ish? as well as pictures
// 3. style the project