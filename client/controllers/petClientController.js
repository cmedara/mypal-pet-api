var myApp = angular.module('myApp');

myApp.controller('petClientController', ['$scope','$http', '$location', '$routeParams',function($scope,$http, $location, $routeParams){
    console.log('PetsController loaded...');

    $scope.getPets = function(){
        $http.get('/api/pets').then(function(res){
            
            $scope.pets = res.data;
        });
    };

    $scope.getPet = function(){
        var id = $routeParams.id;
        $http.get('/api/pet/'+id).then(function(res){
            
            $scope.pet = res.data;
        });
    };
    $scope.addPet = function(){
        $http.post('/api/pet/', $scope.pet).then(function(res){
                window.location.href='#/pets';
        },function(res){
            console.log(res);
            alert(res.data.message);
        });
    };
    $scope.updatePet = function(){
        var id = $routeParams.id;
        $http.put('/api/pet/'+id, $scope.pet).then(function(res){
                window.location.href='#/pets';
        },function(res){
            console.log(res);
            alert(res.data.message);
        });
    };

    $scope.removeBook = function(id){
        $http.delete('/api/pet/'+id).then(function(res){
            window.location.href='#/pets';
        });
    };

}]);