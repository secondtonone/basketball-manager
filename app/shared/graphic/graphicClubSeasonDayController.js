basketballManagerApp.controller('graphicClubSeasonDayController',['$scope', function($scope) {

  $scope.labels = ["4 день", "8 день", "12 день", "14 день", "18 день", "22 день", "24 день", "28 день"];
  $scope.series = ['Позиция в лиге за дни сезона'];
  $scope.data = [
    [3, 4, 5, 8, 6, 5, 0]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
}]);