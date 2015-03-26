basketballManagerApp.controller('storeController',['$scope', '$modal', '$log','$http',function($scope, $modal, $log, $http) {
  //$scope.tmpUrl ='app/components/club/';

  $scope.getItems = function (group) {

    $http.post('/assets/source/storeItem-'+ group +'.json'/*, {msg:'hello word!'}*/).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.slides = data;

    });
  };

  $http.post('/assets/source/storeData.json'/*, {msg:'hello word!'}*/).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.tabs = [{
      title: data.new,
      url: 'new'
    }, {
      title: data.discount,
      url: 'discount'
    }, {
      title: data.official,
      url: 'official'
    }, {
      title: data.medkit,
      url: 'medkit'
    }, {
      title: data.form,
      url: 'form'
    }, {
      title: data.emblem,
      url: 'emblem'
    }, {
      title: data.money,
      url: 'money'
    }, {
      title: data.storage,
      url: 'storage'
    }, {
      title: data.present,
      url: 'present'
    }];

    $scope.currentTab = $scope.tabs[0].url;

    $scope.getItems($scope.tabs[0].url);

  });


  $scope.onClickTab = function (tab) {
    $scope.currentTab = tab.url;

    $scope.getItems(tab.url);


  };

  $scope.isActiveTab = function(tabUrl) {
    return tabUrl == $scope.currentTab;
  };


  $scope.myInterval = 0;


  $scope.open = function (item) {

    var modalInstance = $modal.open({
      templateUrl: 'app/components/store/storeModalView.html',
      controller: 'storeModalController',
      size: '',
      backdrop: true,
      resolve: {
        item: function () {
          return item;
        },
        http: function () {
          return  $http;
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