(function(window, angular, undefined){
	angular.module('app')
	.controller('smCtrl', ['$scope', '$http', '$state', 'clientSvc', '$location', function($scope, $http, $state, clientSvc, $location){
		$scope.userData = clientSvc.user;

		$scope.changeLocation = function(dataLocation) {
			console.log(dataLocation);
			location.reload();
			window.location.href = "http://localhost:8050/#!/" + dataLocation;
			// $location.path(dataLocation);
		};

		$scope.logOut = function(){
			console.log("Intentando ")
			try
			{
				localStorage.clear();
				location.reload();	
				window.location.href = "http://localhost:8050";
			}
			catch(err)
			{
				console.log(err);	
			}
			
		};

	}])
})(window, window.angular)