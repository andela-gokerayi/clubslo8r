var app = angular.module('clubsApp', ['ngRoute', 'clubsInLagModule']);

app.config(['$routeProvider', function($routeProvider) {
	
	// $locationProvider.html5Mode(true);

	$routeProvider

	.when('/clubs', {
		templateUrl: 'partials/clubs.html',
		controller: 'ClubListController'
	})
	.when('/viewOne', {
		templateUrl: 'partials/viewOne.html',
		controller: 'viewOneController'
	})
	.when('/add', {
		templateUrl: 'partials/add.html',
		controller: 'addController'
	})
	.when('/signin', {
		templateUrl: 'partials/signin.html',
		controller: 'signinController'
	})
	.when('/signup', {
		templateUrl: 'partials/signup.html',
		controller: 'signupController'
	})
	.when('/edit', {
		templateUrl: 'partials/edit.html',
		controller: 'editController'
	})
	.when('/deletePost/:id', {
        templateUrl: 'partials/deletePost',
        controller: 'deletePostController'
      })
	.otherwise({
		redirectTo: '/clubs'
	});

}]);