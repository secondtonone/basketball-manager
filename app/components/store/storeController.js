basketballManagerApp.controller('storeController',['$scope', function($scope) {
  //$scope.tmpUrl ='app/components/club/';

  $scope.tabs = [{
    title: 'Новые',
    url: 1
  }, {
    title: 'Скидки',
    url: 2
  }, {
    title: 'Офиц.',
    url: 3
  }, {
    title: 'Аптечки',
    url: 4
  }, {
    title: 'Форма',
    url: 5
  }, {
    title: 'Эмблемы',
    url: 6
  }, {
    title: 'Деньги',
    url: 7
  }, {
    title: 'Хранилище',
    url: 8
  }, {
    title: 'Подарки',
    url: 9
  }];

  $scope.currentTab = $scope.tabs[0].url;

  $scope.onClickTab = function (tab) {
    $scope.currentTab = tab.url;
  };

  $scope.isActiveTab = function(tabUrl) {
    return tabUrl == $scope.currentTab;
  };

  $scope.myInterval = 0;

  $scope.slides = [[{
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
  }]];

  $scope.selectItem = function(id) {

    console.log(id);
  };

}]);