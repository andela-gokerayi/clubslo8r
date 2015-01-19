var clubService = angular.module('club', ['ngResource', 'ngRoute'])

clubService.factory('Club', ['$resource', function($resource) {
  return $resource('http://clubsinlag.herokuapp.com/users/clubs:id', { id: '@_id' }, {
    'update': {
      method: 'PUT'
    }
  });
}]);



