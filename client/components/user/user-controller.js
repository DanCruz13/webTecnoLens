(function(window, angular, undefined){
	angular.module('app')
	.controller('userCtrl', ['$scope', '$http', '$state', 'clientSvc', function($scope, $http, $state, clientSvc){
		$scope.userData = clientSvc.user;
		
		$scope.userProfile = [];
		console.log("Entre a la pagina");
		console.log(clientSvc.token)
		$http({
			method: "POST",
			url: '/api/client/profile/request_userData',
			header: {
				'auth-token': clientSvc.token
			}
		}).then(function(response){
			console.log(response);
			$scope.userProfile = response.data.userData;
			console.log($scope.userProfile);
		}), function(err){
			console.log(err);
		}

	}])
})(window, window.angular)