(function(window, angular, undefined){
	angular.module('app')
	.controller('homeCtrl', ['$scope', '$http', '$state', 'clientSvc', '$location',function($scope, $http, $state, clientSvc, $location){
		$scope.userData = clientSvc.user;
		console.log($scope.userData);
		
	}])
})(window, window.angular)