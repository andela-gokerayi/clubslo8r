var clubsInLagModule = angular.module('clubs', []);

clubsInLagModule.controller('clubController', ['$scope', '$http', function($scope, $http) {
	$http.get('https://clubsinlag.herokuapp.com/users/clubs')
		.success(function(data) {
			$scope.clubs = data.clubs;
		});
}]
);

function addController($scope, $http) {
	$scope.form = {};
	$scope.submitPost = function() {
		$http.post('https://clubsinlag.herokuapp.com/users/clubs', $scope.form)
			.success(function(data) {
				$scope.clubs = data.clubs;
			});
	};
}

function viewOneController($scope, $http, $routeParams) {
  $http.get('https://clubsinlag.herokuapp.com/users/clubs' + $routeParams.id).
    success(function(data) {
      $scope.clubs = data.clubs;
    });
}

function editController($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.form = data.post;
    });

  $scope.editPost = function () {
    $http.put('https://clubsinlag.herokuapp.com/users/clubs' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/readPost/' + $routeParams.id);
      });
  };
}

function deletePostController($scope, $http, $location, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.clubs = data.clubs;
    });

  $scope.deletePost = function () {
    $http.delete('https://clubsinlag.herokuapp.com/users/clubs' + $routeParams.id).
      success(function(data) {
        ;
      });
  };

  $scope.clubs = function () {
    $location.url('/');
  };
}