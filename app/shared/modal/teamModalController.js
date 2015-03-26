basketballManagerApp.controller('teamModalController', function ($scope, $modalInstance, id, modalText,tabs, http) {

  //запрос инфы об игроке через id
  http.post('/assets/source/playerData-' + id + '.json'/*, {msg:'hello word!'}*/).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.player = data;

  });

  $scope.tabs = tabs;

  $scope.currentTab = $scope.tabs[0].url;

  $scope.onClickTab = function (tab) {
    $scope.currentTab = tab.url;
  };

  $scope.isActiveTab = function(tabUrl) {
    return tabUrl == $scope.currentTab;
  };

  $scope.ok = function () {
    $modalInstance.close($scope.id);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };



});