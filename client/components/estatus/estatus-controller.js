(function(window, angular, undefined){
	angular.module('app')
	.controller('estatusCtrl', ['$scope', '$http', '$state', 'clientSvc', function($scope, $http, $state, clientSvc){
		$scope.userData = clientSvc.user;
		
		$scope.orderProcess = [];
		$scope.orderID = '';
		$scope.sectionOrder = [];
		$scope.pageSize = 10;
		$scope.currentPage = 1;

		$http({
			method: "POST",
			url: '/api/client/estatus/request_starterOrders',
			headers: {
				'auth-token': clientSvc.token
			}
		}).then(function(response){
			console.log(response);
			$scope.orderProcess = response.data.orderData;
			console.log($scope.orderProcess);
		}), function errorGETOUT(err){
			console.log("Error, hay que salir de aqui");
			window.location.href = "http://localhost:8050/#!";
			console.log(err);
		}

		$scope.checkOrder = function(id_orden){
			for (var i = 0; i < $scope.orderProcess.length; i++) {
				if ($scope.orderProcess[i].id_orden == id_orden) 
				{
					if ($scope.orderProcess[i].status == 'espera'){
						$scope.orderID = id_orden;
						$("#modalEdit").modal('show');
					} else {
						swal("Error", "Lo siento, el pedido ha sido aprobado y no se puede editar", "error");
					}
				}
			}
		}

		$scope.editOption = function(id_orden){
			var orden = id_orden;
			for (var i = 0; i < $scope.orderProcess.length; i++) {
				if ($scope.orderProcess[i].id_orden == orden) 
				{
					if ($scope.orderProcess[i].status == 'espera'){
						return true;
					}
				}
			}
		}

	

		$scope.editOrder = function(secOrder){
			console.log(secOrder);
			console.log($scope.orderID);
			localStorage.setItem("ID", $scope.orderID);
			localStorage.setItem("sections", JSON.stringify(secOrder));
			if (secOrder.material == true){
				console.log("Entro a Materials");
				location.reload();
				window.location.href = "http://localhost:8050/#!/editMaterials";
			} else{
				if (secOrder.dimension == true){
					console.log("Entro a Dimensiones");
					location.reload();
					window.location.href = "http://localhost:8050/#!/editDimensions";
				} else {				
					if (secOrder.service == true){
						console.log("Entro a Servicios");
						location.reload();
						window.location.href = "http://localhost:8050/#!/editServices";
					}
				}
			}
		}

		$scope.sort = function(keyname){
			$scope.sortKey = keyname; 
			$scope.reverse = !$scope.reverse;
		}

	}])
})(window, window.angular)