(function(window, angular, undefined){
	angular.module('app')
	.controller('navbarCtrl', ['$scope', '$http', '$state', 'clientSvc', function($scope, $http, $state, clientSvc){
		$scope.userData = clientSvc.user;

	}])
})(window, window.angular)