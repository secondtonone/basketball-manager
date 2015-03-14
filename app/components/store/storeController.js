basketballManagerApp.controller('storeController',['$scope', '$modal', '$log',function($scope, $modal, $log) {
  //$scope.tmpUrl ='app/components/club/';

  $scope.tabs = [{
    title: 'Новые',
    url: 'new'
  }, {
    title: 'Скидки',
    url: 'discount'
  }, {
    title: 'Офиц.',
    url: 'official'
  }, {
    title: 'Аптечки',
    url: 'medikit'
  }, {
    title: 'Форма',
    url: 'form'
  }, {
    title: 'Эмблемы',
    url: 'emblem'
  }, {
    title: 'Деньги',
    url: 'money'
  }, {
    title: 'Хранилище',
    url: 'storage'
  }, {
    title: 'Подарки',
    url: 'present'
  }];

  $scope.currentTab = $scope.tabs[0].url;

  $scope.onClickTab = function (tab) {
    $scope.currentTab = tab.url;
  };

  $scope.isActiveTab = function(tabUrl) {
    return tabUrl == $scope.currentTab;
  };

  $scope.myInterval = 0;

  $scope.slides = {
    form: [[{
    id:3,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:34,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:3,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:34,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:3,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:34,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:36,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:32,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:13,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:63,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:39,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:53,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:73,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:43,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  }]],
    new: [[{
    id:3,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:34,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:3,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:34,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:3,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:34,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:36,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:32,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:13,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:63,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:39,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:53,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:73,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:43,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  }],[{
    id:356,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:341,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:356,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:328,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:133,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:631,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:399,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:539,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:736,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  },{
    id:433,
    icon:'/assets/img/home.png',
    title:'Заем в банке',
    price: {
      token:56,
      money:678
    }
  }]]
};

  $scope.open = function (item) {

    var modalInstance = $modal.open({
      templateUrl: 'app/components/store/storeModalView.html',
      controller: 'storeModalController',
      size: '',
      backdrop: true,
      resolve: {
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

}]);