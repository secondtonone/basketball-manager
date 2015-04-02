basketballManagerApp.controller('resourceModalController', function ($scope, $modalInstance, type, modalText,resousrceModal, http,modal) {

  //запрос инфы об игроке через id
  http.post('/assets/source/playerData-' + type + '.json'/*, {msg:'hello word!'}*/).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.player = data;

  });

  $scope.resource = modalText;
  $scope.resousrceModal = resousrceModal;

  $scope.open = function (item) {
    console.log(item);
    var modalInstance = modal.open({
      templateUrl: 'app/shared/resource/resourceConfirmView.html',
      controller: 'resourceConfirmController',
      size: 'sm',
      backdrop: true,
      resolve: {
        /*modalText: function () {
          return $scope.modalText;
        },*/
        http: function () {
          return http;
        },
        modal: function () {
          return $scope.resousrceModal;
        },
        item: function () {
          return item;
        }
      }
    });

    modalInstance.result.then(function (selectedId) {
      $scope.selected = selectedId;
    }, function () {
      console.log($scope.selected);
    });
  };

});