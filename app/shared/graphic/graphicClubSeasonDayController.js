basketballManagerApp.controller('graphicClubSeasonDayController',['$scope', function($scope) {

  var clubSeasonDay = $scope.response.graphics.clubSeasonDay;
  $scope.labels = clubSeasonDay.labels;
  $scope.series = clubSeasonDay.series;

  $scope.data = clubSeasonDay.data;
}]);