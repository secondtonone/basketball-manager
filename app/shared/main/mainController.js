basketballManagerApp.controller('mainController',['$scope','$location','$http', '$modal',function ($scope,$location,$http, $modal) {

  $http.post('/assets/source/mainData.json'/*, {msg:'hello word!'}*/).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.headerData = data.header;
    $scope.menuData = data.menu;
    $scope.resousrceModal = data.resousrceModal;
  });

  $scope.isActive = function(route) {
    //console.log($location.path().split('/')[1]);
    return route === $location.path();
  };

  $scope.open = function (type) {

    $scope.modalText = $scope.resousrceModal.medkit[type];

    var modalInstance = $modal.open({
      templateUrl: 'app/shared/resource/resourceView.html',
      controller: 'resourceModalController',
      size: 'lg',
      backdrop: true,
      resolve: {
        type: function () {
          return type;
        },
        modalText: function () {
          return $scope.modalText;
        },
        resousrceModal: function () {
          return $scope.resousrceModal;
        },
        http: function () {
          return $http;
        },
        modal: function () {
          return $modal;
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