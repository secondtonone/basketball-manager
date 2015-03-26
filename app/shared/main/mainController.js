basketballManagerApp.controller('mainController',['$scope','$location','$http',function ($scope,$location,$http) {

  $http.post('/assets/source/mainData.json'/*, {msg:'hello word!'}*/).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.headerData = data.header;
    $scope.menuData = data.menu;
  });

  $scope.isActive = function(route) {
    //console.log($location.path().split('/')[1]);
    return route === $location.path();
  };
}]);