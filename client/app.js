(function(window, angular, undefined){
	angular.module('app', ['ui.router'])
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
					'headroom': {
						templateUrl: '/client/components/headroom/headroom.html',
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
					'slide-menu': {
						templateUrl: '/client/components/slide-menu/slide-menu.html',
						controller: 'smCtrl'	
					},
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
					'slide-menu': {
						templateUrl: '/client/components/slide-menu/slide-menu.html',
						controller: 'smCtrl'
					},
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
					'slide-menu': {
						templateUrl: '/client/components/slide-menu/slide-menu.html',
						controller: 'smCtrl'
					},
					'navbar': {
						templateUrl: '/client/components/navbar/navbar.html',
						controller: 'navbarCtrl'
					}
				}
			})
			.state('perfil', {
				url: '/perfil',
				views: {
					'home': {
						templateUrl: '/client/components/perfil/perfil.html',
						controller: 'perfilCtrl'
					},
					'slide-menu': {
						templateUrl: '/client/components/slide-menu/slide-menu.html',
						controller: 'smCtrl'
					},
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
					'slide-menu': {
						templateUrl: '/client/components/slide-menu/slide-menu.html',
						controller: 'smCtrl'
					},
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
					'slide-menu': {
						templateUrl: '/client/components/slide-menu/slide-menu.html',
						controller: 'smCtrl'
					},
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
					'slide-menu': {
						templateUrl: '/client/components/slide-menu/slide-menu.html',
						controller: 'smCtrl'
					},
					'navbar': {
						templateUrl: '/client/components/navbar/navbar.html',
						controller: 'navbarCtrl'
					}
				}
			})

		$urlRouterProvider.otherwise('/');
	}])
})(window, window.angular)