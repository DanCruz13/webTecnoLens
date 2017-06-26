(function(window, angular, undefined){
	angular.module('app')
	.controller('generateCtrl', ['$scope', '$http', '$state', 'clientSvc', function($scope, $http, $state, clientSvc){
		$scope.userData = clientSvc.user;
		console.log($scope.userData);
	}])
})(window, window.angular)