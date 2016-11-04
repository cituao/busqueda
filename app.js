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
    
    $scope.showQuien = function(teclaPresionada){
        if (teclaPresionada.which == 13){
            document.getElementById("divquien").style.display = 'inline';
            $scope.mostrarQuien = true;
            element = document.getElementById("inputquien");
            element.focus();
        }
    }
    
    $scope.showQue = function(teclaPresionada) {
        if (teclaPresionada.which == 13){
            document.getElementById("divque").style.display = 'inline';
            $scope.mostrarQue = true;
            element = document.getElementById("inputque");
            element.focus();

        }
    }
    
    $scope.showCuando = function(teclaPresionada) {
        if (teclaPresionada.which == 13){
            document.getElementById("divcuando").style.display = 'inline';
            $scope.mostrarCuando = true;
            element = document.getElementById("inputcuando");
            element.focus();
        }
    }
    
    $scope.showDonde = function(teclaPresionada) {
        if (teclaPresionada.which == 13){
            document.getElementById("divdonde").style.display = 'inline';
            $scope.mostrarDonde = true;
            element = document.getElementById("inputdonde");
            element.focus();

        }
    }
  
})

busquedaApp.directive('ngFocus', function($timeout) {
    return {
        link: function ( scope, element, attrs ) {
            scope.$watch( attrs.ngFocus, function ( val ) {
                if ( angular.isDefined( val ) && val ) {
                    $timeout( function () { element[0].focus(); } );
                }
            }, true);
            
            element.bind('blur', function () {
                if ( angular.isDefined( attrs.ngFocusLost ) ) {
                    scope.$apply( attrs.ngFocusLost );
                    
                }
            });
        }
    };
});