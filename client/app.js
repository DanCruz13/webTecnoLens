(function(window, angular, undefined){
	angular.module('app', [
		'ui.router',
		'ui.bootstrap',
		'angularUtils.directives.dirPagination'])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$stateProvider
			.state('login', {
				url: '/',
				templateUrl: '/client/components/login/login.html',
				controller: 'loginCtrl'
			})
			.state('homeMenu', {
				url: '/index',
				views: {
					'home': {
						templateUrl: '/client/components/home/home.html',
						controller: 'homeCtrl'
					},
					// 'slide-menu': {
					// 	templateUrl: '/client/components/slide-menu/slide-menu.html',
					// 	controller: 'smCtrl'	
					// },
					'navbar': {
						templateUrl: '/client/components/navbar/navbar.html',
						controller: 'navbarCtrl'
					}
				}
			})
			.state('generate', {
				url: '/generate',
				views: {
					'home': {
						templateUrl:'/client/components/generate/generate.html',
						controller: 'generateCtrl'
					},
					// 'slide-menu': {
					// 	templateUrl: '/client/components/slide-menu/slide-menu.html',
					// 	controller: 'smCtrl'	
					// },
					'navbar': {
						templateUrl: '/client/components/navbar/navbar.html',
						controller: 'navbarCtrl'
					}
				}
			})
			.state('editar', {
				url: '/editar',
				views: {
					'home': {
						templateUrl: '/client/components/editar/editar.html',
						controller: 'editarCtrl'
					},
					// 'headroom': {
					// 	templateUrl: '/client/components/headroom/headroom.html',
					// }
					// 'slide-menu': {
					// 	templateUrl: '/client/components/slide-menu/slide-menu.html',
					// 	controller: 'smCtrl'
					// },
					'navbar': {
						templateUrl: '/client/components/navbar/navbar.html',
						controller: 'navbarCtrl'
					}	
				}
			})
			.state('estatus', {
				url: '/estatus',
				views: {
					'home': {
						templateUrl: '/client/components/estatus/estatus.html',
						controller: 'estatusCtrl'
					},
					// 'slide-menu': {
					// 	templateUrl: '/client/components/slide-menu/slide-menu.html',
					// 	controller: 'smCtrl'
					// },
					'navbar': {
						templateUrl: '/client/components/navbar/navbar.html',
						controller: 'navbarCtrl'
					}
				}
			})
			.state('user', {
				url: '/user',
				views: {
					'home': {
						templateUrl: '/client/components/user/user.html',
						controller: 'userCtrl'
					},
					// 'slide-menu': {
					// 	templateUrl: '/client/components/slide-menu/slide-menu.html',
					// 	controller: 'smCtrl'
					// },
					'navbar': {
						templateUrl: '/client/components/navbar/navbar.html',
						controller: 'navbarCtrl'
					}
				}
			})
			.state('materials', {
				url: '/editMaterials',
				views: {
					'home': {
						templateUrl: '/client/components/editMaterials/editMaterials.html',
						controller: 'editMatCtrl'
					},
					// 'slide-menu': {
					// 	templateUrl: '/client/components/slide-menu/slide-menu.html',
					// 	controller: 'smCtrl'
					// },
					'navbar': {
						templateUrl: '/client/components/navbar/navbar.html',
						controller: 'navbarCtrl'
					}
				}
			})
			.state('dimensions', {
				url: '/editDimensions',
				views: {
					'home': {
						templateUrl: '/client/components/editDimensions/editDimensions.html',
						controller: 'editDimCtrl'
					},
					// 'slide-menu': {
					// 	templateUrl: '/client/components/slide-menu/slide-menu.html',
					// 	controller: 'smCtrl'
					// },
					'navbar': {
						templateUrl: '/client/components/navbar/navbar.html',
						controller: 'navbarCtrl'
					}
				}
			})
			.state('services', {
				url: '/editServices',
				views: {
					'home': {
						templateUrl: '/client/components/editServices/editServices.html',
						controller: 'editSerCtrl'
					},
					// 'slide-menu': {
					// 	templateUrl: '/client/components/slide-menu/slide-menu.html',
					// 	controller: 'smCtrl'
					// },
					'navbar': {
						templateUrl: '/client/components/navbar/navbar.html',
						controller: 'navbarCtrl'
					}
				}
			})
		$urlRouterProvider.otherwise('/');
	}])
})(window, window.angular)