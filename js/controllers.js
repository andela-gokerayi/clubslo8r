var clubsInLagModule = angular.module('clubsInLagModule', []);

var clubName;

var validateName = function(name) {
  if (name == undefined) {
    return false;
  } 
  else {
    alert('Enter a valid name');
    return true;
  }
};

var validateFacilities = function(facilities) {
  if (facilities == undefined) {
    return false;
  }
  else {
    alert('Enter a vaild facility type');
    return true;
  }
};

var validateAddress = function(address) {
  if (address == undefined) {
    return false;
  }
  else {
    alert('Enter a valid address');
    return true;
  }
};

validateTimeOfOpening = function(timeOfOpening) {
  if (timeOfOpening == undefined) {
    return false;
  }
  else {
    alert('Enter time of opening. eg. Monday-Tuesday. 3pm-3am');
    return true;
  }
};

var validateRate = function (rating) {
  if (rating >= 0 && rating <= 5) {
    return true;
  }
  else {
    alert('Please, enter a number between 0-5 for Club Rating');
    return false;
  }
};

clubsInLagModule.controller('ClubListController', ['$scope', '$http', '$location', '$window', function($scope, $http, $location, $window) {
  // scope.reload = function () {
  //   window.location.reload();
  // };
  $http.get('https://clubsinlag.herokuapp.com/users/clubs')
      .success(function(response) {
        $scope.clubs = response;
        console.log($scope.clubs);
      });
  }]
);

clubsInLagModule.controller('addController', ['$scope', '$http', '$location', '$window', function($scope, $http, $location, $window) {

  $scope.addClub = function() {

    var anotherClub = {
      name : $('#name').val(),
      facilities : $('#facility').val(),
      address : $('#address').val(),
      rating : $('#rating').val(),
      timeOfOpening : $('#opening').val(),
    };
    var data = $.param(anotherClub);
    console.log(data);
    // if (validateName(anotherClub.name) && validateFacilities(anotherClub.facilities) && validateAddress(anotherClub.address) && validateTimeOfOpening(anotherClub.timeOfOpening) && validateRate(anotherClub.rating)) {
        $http({
        method: 'POST',
        url: 'http://clubsinlag.herokuapp.com/users/clubs',
        data: data,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
        .success(function (res) {
          console.log(res);
          console.log("Club has been Successfully Created");
        })

      .error(function (e) {
        console.log(e);
        console.log('Error occured, Club could not be added(fill all fields)');
      });
    // }
  };
}]);

clubsInLagModule.controller('viewOneController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $scope.viewOne = function(clubs_id) {
      $http.get('https://clubsinlag.herokuapp.com/users/clubs/' + clubs_id)
      .success(function(response) {
        $scope.clubs = response;
        $scope.sin_club = $routeParams.clubs_id;
      });
    }
  }]
);

clubsInLagModule.controller('editController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $scope.update = function(clubs_id) {
      $http({
        method: 'PUT',
        url: 'https://clubsinlag.herokuapp.com/users/clubs' + clubs_id
      })
      .success(function(data) {
        $scope.clubs = data;
        $scope.sin_club = $routeParams.clubs_id;
      })
      .error(function(data) {
        $scope.clubs = data;
      })
    };
  }]
);

function deletePostController($scope, $http, $location, $routeParams) {
  $http.get('https://clubsinlag.herokuapp.com/users/clubs:_id').
    success(function(data) {
      $scope.clubs = data.clubs;
    })

  $scope.deletePost = function (clubs_id) {
    $http.delete('https://clubsinlag.herokuapp.com/users/clubs' + $routeParams.clubs_id).
      success(function(data) {
        ;
      });
  };

  $scope.clubs = function () {
    $location.url('/clubs');
  };
}