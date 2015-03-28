basketballManagerApp.controller('transfersController',['$scope','$http','$modal', '$log',function ($scope,$http,$modal, $log) {
  $scope.tmpUrl ='app/shared/player/';

  $http.post('/assets/source/transferData.json'/*, {msg:'hello word!'}*/).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available

    $scope.tableHead = data.tableHead;
    $scope.team = data.team;
    $scope.search = data.search;


    $scope.tabs = [{
      title: data.tabs.skill,
      url: $scope.tmpUrl + '/playerSkillView.html'
    },{
      title: data.tabs.statistic,
      url: $scope.tmpUrl + '/playerStatisticView.html'
    }, {
      title: data.tabs.transfer,
      url: $scope.tmpUrl + '/playerTransferView.html'
    }];

    $scope.modalText = data.modalText;

    $scope.selectedExp = $scope.search.values[0];
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