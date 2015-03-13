basketballManagerApp.controller('graphicClubSeasonController',['$scope', function($scope) {
  $scope.labels = ['1 сезон', '2 сезон', '3 сезон', '4 сезон', '5 сезон', '6 сезон', '7 сезон'];
  $scope.series = ['Позиция в лиге за сезоны'];

  $scope.data = [
    [1,2,4,5,1]
  ];
}]);