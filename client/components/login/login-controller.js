(function(window, angular, undefined){
	angular.module('app')
	.controller('loginCtrl', ['$scope', '$http', '$state', 'clientSvc', '$location', function($scope, $http, $state, clientSvc, $location){
		$scope.loginModal = function(){
			console.log("Funciona el modal");
			$("#modalLog").modal('show');
		}

		$scope.loginCheck = function(userData){
			console.log(userData);
			$http.post('/api/client/login', userData).then(function(response){
				console.log("Respuesta obtenida")
				console.log(response);
				console.log("Respuesta recibida")
				if (response.data.userName == false) 
					swal("Error", "Este usuario no existe en el sistema.", "error");
				else {
					if (response.data.userAccess == false){
						swal("Error", "No tienes acceso a la plataforma.", "error");
					} else {
						if (response.data.userPassword == false){
							swal("Error", "La contraseña ingresada es incorrecta.", "error");
						} else {
							clientSvc.token = response.data.token;
							clientSvc.user = response.data.userData;
							localStorage.setItem('token', JSON.stringify(clientSvc.token));
							localStorage.setItem('user', JSON.stringify(clientSvc.user));
							location.reload();
							window.location.href = "http://localhost:8050/#!/index";
							// $location.path('/index');

						}
					}
				}

			})
		}
	}])
})(window, window.angular)