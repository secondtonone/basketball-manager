basketballManagerApp.controller('storeModalController', function ($scope, $modalInstance, item) {

  $scope.modalTitle = 'Вы действительно хотите купить этот предмет?';
  $scope.buyFor = 'Купить за';

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