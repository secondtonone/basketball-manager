basketballManagerApp.controller('mainController',['$scope','$location','$http', '$modal',function ($scope,$location,$http, $modal) {

  $http.post('/assets/source/mainData.json'/*, {msg:'hello word!'}*/).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.headerData = data.header;
    $scope.menuData = data.menu;
    $scope.resourceModal = data.resourceModal;
    /*вычисление времени*/
    $scope.dayOfWeek = $scope.headerData.dayOfWeek;
    $scope.dayOfMatch ='';
    $scope.startMatch = $scope.headerData.gameInfo.timeOfMatch;// время матча в UTC
    $scope.startMatchGMT = new Date($scope.startMatch).getHours() + ' : ' + (new Date($scope.startMatch).getMinutes()<10?'0':'') + new Date($scope.startMatch).getMinutes();//GMT в представлении, время матча
    $scope.dayOfMatchGMT = new Date($scope.startMatch).getDay();//день недели, время матча

    $scope.now = new Date().getTime();//время сейчас в UTC
    $scope.nowDay = new Date().getDay();//день сейчас

    if ($scope.nowDay == $scope.dayOfMatchGMT) {
      $scope.dayOfMatch = $scope.dayOfWeek[7];
    } else if ($scope.nowDay + 1 == $scope.dayOfMatchGMT){
      $scope.dayOfMatch = $scope.dayOfWeek[8];
    } else {
      $scope.dayOfMatch = $scope.dayOfWeek[$scope.dayOfMatchGMT];
    }

    var timer = $scope.startMatch - $scope.now;
    var timeOfMatch = 240000;//время матча

    var startMatchTimer = function(){

      $(".match__beggining").show();

      setTimeout(function () {
        $(".match__beggining").hide();
      },timeOfMatch);

    };

    /*if (timer > 0) {
      setTimeout(startMatchTimer,timer);
    } else {
      if (timer + timeOfMatch > 0) {
        setTimeout(function () {
          $(".match__beggining").hide();
        },timer + timeOfMatch);
      } else {
        $(".match__beggining").hide();
      }
    }*/
  });


  $scope.isActive = function(route) {
    //console.log($location.path().split('/')[1]);
    return route === $location.path();
  };

  $scope.startMatchDisable =function () {
    $(".match__beggining").hide();
  };

  $scope.open = function (type) {

    var urlPart = 'Medkit';

    $scope.modalText = $scope.resourceModal.resources[type];

    if(type == 'token') {
      urlPart = 'Token';
    }
    if(type == 'money') {
      urlPart = 'Money';
    }

    var modalInstance = $modal.open({
      templateUrl: 'app/shared/resource/resource' + urlPart + 'View.html',
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
        resourceModal: function () {
          return $scope.resourceModal;
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