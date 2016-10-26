//Define el módulo
var busquedaApp = angular.module('busquedaApp', []);

//Define el controlador en el módulo busquedaApp
busquedaApp.controller('BusquedaController', function BusquedaController($scope){
    $scope.tema = '';
    $scope.que = '';
    $scope.donde = '';
    $scope.quien = '';
    $scope.cuando = '';
})
