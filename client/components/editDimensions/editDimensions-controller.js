(function(window, angular, undefined){
	angular.module('app')
	.controller('editDimCtrl', ['$scope', '$http', '$state', 'clientSvc', function($scope, $http, $state, clientSvc){
		$scope.userData = clientSvc.user;
		

	}])
})(window, window.angular)