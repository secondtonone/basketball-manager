basketballManagerApp.controller('storeModalController', function ($scope, $modalInstance, item, http, scope) {

  http.post('/assets/source/storeModal.json'/*, {msg:'hello word!'}*/).
    success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available

    $scope.modalTitle = data.modalTitle;
    $scope.buyFor = data.buyFor;

  });

  console.log(scope.tabs);

  $scope.icon = item.icon;
  $scope.id = item.id;
  $scope.price = item.price;

  $scope.ok = function () {
    http.post('/assets/source/storeModal.json', {id:item.id}).success(function(data, status, headers, config) {

    });//запрос на сервер
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});