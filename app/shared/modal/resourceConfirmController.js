basketballManagerApp.controller('resourceConfirmController', function ($scope, $modalInstance,http,modal,item) {

  //запрос инфы об игроке через id


  $scope.item = item;
  $scope.modal = modal;


  $scope.ok = function () {
   /* http.post('/assets/source/playerData-' + type + '.json', {msg:'hello word!'}).success(function(data, status, headers, config) {
      $scope.player = data;
    });*/
    console.log($scope.item.id);
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };


});