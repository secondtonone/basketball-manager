basketballManagerApp.controller('graphicClubSeasonController',['$scope','$http', function($scope, $http) {

  //инфу можно получить из родительского контроллера
  var clubSeason = $scope.response.graphics.clubSeason;
  $scope.labels = clubSeason.labels;
  $scope.series = clubSeason.series;

  $scope.data = clubSeason.data;
}]);