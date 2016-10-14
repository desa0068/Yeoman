'use strict';

/**
 * @ngdoc overview
 * @name yoeManAppApp
 * @description
 * # yoeManAppApp
 *
 * Main module of the application.
 */
angular
	.module('yoeManAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl',
				controllerAs: 'about'
			})
			.when('/vaibhavi', {
				templateUrl: 'views/vaibhavi.html',
				controller: 'VaibhaviCtrl',
				controllerAs: 'vaibhavi'
			})
			.otherwise({
				redirectTo: '/'
			});
	});