//Define el módulo
var busquedaApp = angular.module('busquedaApp', ['ngAnimate']);

//Define el controlador en el módulo busquedaApp
busquedaApp.controller('BusquedaController', function BusquedaController($scope){
    $scope.tema = '';
    $scope.que = '';
    $scope.donde = '';
    $scope.quien = '';
    $scope.cuando = '';
    $scope.sw = true;
    $scope.mostrarQuien = false;
    $scope.mostrarQue = false;
    $scope.mostrarCuando = false;
    $scope.mostrarDonde = false;
    
    $scope.showQuien = function(){
        $scope.mostrarQuien = true;
    }
    
    $scope.showQue = function() {
        $scope.mostrarQue = true;
    }
    
    $scope.showCuando = function() {
        $scope.mostrarCuando = true;
    }
    
    $scope.showDonde = function() {
        $scope.mostrarDonde = true;
    }
})
