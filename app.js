//Define el módulo
var busquedaApp = angular.module('busquedaApp', ['ngAnimate']);

//Define el controlador en el módulo busquedaApp
busquedaApp.controller('BusquedaController', function BusquedaController($scope){
    $scope.tema = '';
    $scope.que = '';
    $scope.donde = '';
    $scope.quien = '';
    $scope.cuando = '';
	$scope.pregunta = '';
    
    $scope.mostrarTema = true;
    $scope.mostrarQuien = false;
    $scope.mostrarQue = false;
    $scope.mostrarCuando = false;
    $scope.mostrarDonde = false;
    $scope.mostrarMapaMental = false;
	$scope.mostrarPregunta = false;
    
    $scope.showQuien = function(teclaPresionada){
        if (teclaPresionada.which == 13){
            $scope.mostrarQuien = true;
        }
    }
    
    $scope.showQue = function(teclaPresionada) {
        if (teclaPresionada.which == 13){
            $scope.mostrarQue = true;
        }
    }
    
    $scope.showCuando = function(teclaPresionada) {
        if (teclaPresionada.which == 13){
            $scope.mostrarCuando = true;
        }
    }
    
    $scope.showDonde = function(teclaPresionada) {
        if (teclaPresionada.which == 13){
            $scope.mostrarDonde = true;
        }
    }
    
    $scope.showMapaMental = function(teclaPresionada) {
        if (teclaPresionada.which == 13){
			document.getElementById("divmapamental").style.display = 'inline';
			document.getElementById("divpregunta").style.display = 'inline';
			$scope.mostrarMapaMental = true;
			$scope.mostrarPregunta = true;

			$scope.mostrarTema = false;
			$scope.mostrarQuien = false;
			$scope.mostrarQue = false;
			$scope.mostrarCuando = false;
			$scope.mostrarDonde = false;
        }
    }
	
	$scope.buscarEbsco = function(teclaPresionada) {
		if (teclaPresionada.which == 13){
			
		}	
	}
})

busquedaApp.directive('showFocus', function($timeout) {
  return function(scope, element, attrs) {
    scope.$watch(attrs.showFocus, 
      function (newValue) { 
        $timeout(function() {
            console.log('Ok');
            newValue && element[0].focus();
        });
      },true);
  };    
});

