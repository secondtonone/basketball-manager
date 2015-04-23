basketballManagerApp.controller('teamController',['$scope', '$modal', '$log','$http',function ($scope, $modal, $log, $http) {

  $scope.tmpUrl ='app/shared/player/';

  $http.post('/assets/source/teamData.json'/*, {msg:'hello word!'}*/).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available

    $scope.tableHead = data.tableHead;
    $scope.team = data.team;

    $scope.tabs = [{
      title: data.tabs.skill,
      url: $scope.tmpUrl + '/playerSkillView.html'
    },{
      title: data.tabs.health,
      url: $scope.tmpUrl + '/playerHealthView.html'
    }, {
      title: data.tabs.contract,
      url: $scope.tmpUrl + '/playerContractView.html'
    }, {
      title: data.tabs.statistic,
      url: $scope.tmpUrl + '/playerStatisticView.html'
    }, {
      title: data.tabs.transfer,
      url: $scope.tmpUrl + '/playerTransferView.html'
    }];

    $scope.modalText = data.modalText;

    $('.team-position__court__player_1').css({"top":"30px", "left":"100px"});
    $('.team-position__court__player_2').css({"top":"40px", "left":"100px"});
    $('.team-position__court__player_3').css({"top":"50px", "left":"100px"});
    $('.team-position__court__player_4').css({"top":"60px", "left":"100px"});
    $('.team-position__court__player_5').css({"top":"70px", "left":"100px"});
  });

  $scope.open = function (id) {

    var modalInstance = $modal.open({
      templateUrl: 'app/shared/player/playerModalView.html',
      controller: 'teamModalController',
      size: 'lg',
      backdrop: true,
      resolve: {
        id: function () {
          return id;
        },
        modalText: function () {
          return $scope.modalText;
        },
        tabs: function () {
          return $scope.tabs;
        },
        http: function () {
          return $http;
        }
      }
    });

    modalInstance.result.then(function (selectedId) {
      $scope.selected = selectedId;
    }, function () {
      console.log($scope.selected);
    });
  };
}]);