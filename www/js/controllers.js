angular.module('Notes.controllers', [])
.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.status = "It works!";
}])
.controller('ViewCtrl', ['$scope', function ($scope) {
  $scope.status = "Also totally works!";
}])
.controller('NotesCtrl', ['$scope', function ($scope) {
  $scope.name = 'Notes'
}]);
