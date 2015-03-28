basketballManagerApp.controller('matchController',['$scope','$location','$http',function ($scope,$location,$http) {
  $http.post('/assets/source/matchData.json'/*, {msg:'hello word!'}*/).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available

  });
}]);