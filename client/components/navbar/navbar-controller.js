(function(window, angular, undefined){
	angular.module('app')
	.controller('navbarCtrl', ['$scope', '$http', '$state', 'clientSvc', function($scope, $http, $state, clientSvc){
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