(function(window, angular, undefined){
	angular.module('app')
	.controller('userCtrl', ['$scope', '$http', '$state', 'clientSvc', function($scope, $http, $state, clientSvc){
		$scope.userData = clientSvc.user;
		$scope.editarDP = false;
		$scope.userProfile = [];

		$http({
			method: "POST",
			url: '/api/client/profile/request_userData',
			headers: {
				'auth-token': clientSvc.token
			}
		}).then(function(response){
			$scope.userProfile = response.data.userData[0];
			$scope.newProfile = response.data.userData[0];
			console.log($scope.userProfile);
		}), function(err){
			console.log(err);
		}

		$scope.cancelEditDP = function() {
			
			// $scope.newProfile = $scope.userProfile; Este proceso no funciona...resolver despues
			console.log($scope.newProfile);
			console.log($scope.userProfile)
			$scope.editarDP = false;
			$http({
				method: "POST",
				url: '/api/client/profile/request_userData',
				headers: {
					'auth-token': clientSvc.token
				}
			}).then(function(response){
				$scope.userProfile = response.data.userData[0];
				$scope.newProfile = response.data.userData[0];
				console.log($scope.userProfile);
			}), function(err){
				console.log(err);
			}
		}

		$scope.saveData = function(newData){
			console.log(newData);
			$scope.editarDP = false;
			$scope.editarDU = false;
			swal("Exito", "Su información personal ha sido actualizada.", "success");
		}


	}])
})(window, window.angular)