(function(window, angular, undefined){
	angular.module('app')
	.controller('editarCtrl', ['$scope', '$http', '$state', 'clientSvc', function($scope, $http, $state, clientSvc){
		$scope.userData = clientSvc.user;
		console.log("Estoy en la pagina de editar lml ");
	}])
})(window, window.angular)