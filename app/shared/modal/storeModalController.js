basketballManagerApp.controller('storeModalController', function ($scope, $modalInstance, item, modalText) {

  $scope.modalTitle = modalText.modalTitle;
  $scope.buyFor = modalText.buyFor;

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