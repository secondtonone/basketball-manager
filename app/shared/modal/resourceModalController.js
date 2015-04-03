basketballManagerApp.controller('resourceModalController', function ($scope, $modalInstance, type, modalText,resourceModal, http,modal) {

  //запрос инфы об игроке через id
  http.post('/assets/source/playerData-' + type + '.json'/*, {msg:'hello word!'}*/).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.player = data;

  });

  $scope.resource = modalText;
  $scope.resourceModal = resourceModal;

  $scope.open = function (item) {

    var urlPart = 'Medkit';

    $scope.modalText = $scope.resourceModal.resources[type];

    if(type == 'token') {
      urlPart = 'Token';
    }
    if(type == 'money') {
      urlPart = 'Money';
    }

    var modalInstance = modal.open({
      templateUrl: 'app/shared/resource/resourceConfirm'+ urlPart +'View.html',
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
          return $scope.resourceModal;
        },
        item: function () {
          return item;
        },
        type: function () {
          return type;
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