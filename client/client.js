var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        controller: 'petClientController',
        templateUrl: 'views/pets.html'
    })
    .when('/pets',{
        controller: 'petClientController',
        templateUrl: 'views/pets.html'
    })
    .when('/pet/details/:id',{
        controller: 'petClientController',
        templateUrl: 'views/petDetails.html'
    })
    .when('/pet/add',{
        controller: 'petClientController',
        templateUrl: 'views/petAdd.html'
    })
    .when('/pet/edit/:id',{
        controller: 'petClientController',
        templateUrl: 'views/petEdit.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});