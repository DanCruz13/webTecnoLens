(function(window, angular, undefined){
	angular.module('app')
	.controller('editMatCtrl', ['$scope', '$http', '$state', 'clientSvc', function($scope, $http, $state, clientSvc){
		$scope.userData = clientSvc.user;
		var idOrden = localStorage.getItem('ID');


		$http({
			method: "POST",
			url: '/api/client/edit_materials/request_materialsOrder',
			headers: {
				'auth-token': clientSvc.token
			},
			data: {
				'id_orden': idOrden
			}
		}).then(function(response){
			$scope.materialOrder = response.data.orderData;
			for (var i = 0; i < $scope.materialOrder.length ; i++) {
				if ($scope.materialOrder[i].ojo == 'D')
				{
					$scope.materialOrder[i].ojo = 'Derecho';
					if ($scope.materialOrder[i].p_d == 'p')
						$scope.materialOrder[i].p_d = 'Parejo'
					else
						$scope.materialOrder[i].p_d = 'Disparejo'
					$scope.ordenDerecho = $scope.materialOrder[i];

				}
				else 
				{
					$scope.materialOrder[i].ojo = 'Izquierdo';
					if ($scope.materialOrder[i].p_d == 'p')
						$scope.materialOrder[i].p_d = 'Parejo'
					else
						$scope.materialOrder[i].p_d = 'Disparejo'
					$scope.ordenIzquierdo = $scope.materialOrder[i];
				}
			}
		}), function(err){
			console.log(err);
		}


		// API para obtener los materiales
		$http({
			method: "GET",
			url: '/api/client/edit_materials/request_materials',
			headers: {
				'auth-token': clientSvc.token
			}
		}).then(function(response){
			$scope.allMaterials = response.data.material;
			console.log($scope.allMaterials);
		}), function(err){
			console.log(err);
		}


		$http({
			method: "GET",
			url: '/api/client/edit_materials/request_technologies',
			headers: {
				'auth-token': clientSvc.token
			}
		}).then(function(response){
			$scope.allTechnologies = response.data.tecnologia;
			console.log($scope.allTechnologies);
		}), function(err){
			console.log(err);
		}

		$http({
			method: "GET",
			url: '/api/client/edit_materials/request_typesMaterial',
			headers: {
				'auth-token': clientSvc.token
			}
		}).then(function(response){
			$scope.allTypesMaterials = response.data.tiposM;
			console.log($scope.allTypesMaterials);
		}), function(err){
			console.log(err);
		}

		$http({
			method: "GET",
			url: '/api/client/edit_materials/request_progresives',
			headers: {
				'auth-token': clientSvc.token
			}
		}).then(function(response){
			$scope.allProgresives = response.data.progresivo;
			console.log($scope.allProgresives);
		}), function(err){
			console.log(err);
		}

		$http({
			method: "GET",
			url: '/api/client/edit_materials/request_colorTinte',
			headers: {
				'auth-token': clientSvc.token
			}
		}).then(function(response){
			$scope.allColorTint = response.data.colorT;
			console.log($scope.allColorTint);
		}), function(err){
			console.log(err);
		}


	}])
})(window, window.angular)