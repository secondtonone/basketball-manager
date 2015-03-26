basketballManagerApp.controller('storeModalController', function ($scope, $modalInstance, item, http) {

  http.post('/assets/source/storeModal.json'/*, {msg:'hello word!'}*/).
    success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available

    $scope.modalTitle = data.modalTitle;
    $scope.buyFor = data.buyFor;

  });

  $scope.icon = item.icon;
  $scope.id = item.id;
  $scope.price = item.price;

  $scope.ok = function () {
    $modalInstance.close($scope.id);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});