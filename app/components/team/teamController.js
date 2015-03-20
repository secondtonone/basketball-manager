basketballManagerApp.controller('teamController',['$scope', '$modal', '$log',function ($scope, $modal, $log) {

  $scope.tmpUrl ='app/shared/player/';

  $scope.tableHead = {
    position:'Позиция',
    number:'№',
    name:'Имя',
    roles:'Роли',
    nation:'Национальность',
    transfer:'Трансфер',
    status:'Статус',
    speciality:'Специальность',
    quality:'Качество'
  };

  $scope.team = [{
    id: 1,
    position:'GK',
    number:'1',
    name:'V Kaleka1',
    roles:['GK'],
    nation:'RUS',
    transfer:'',
    status:'',
    speciality:'',
    quality:'2',
  },{
    id: 2,
    position:'GK',
    number:'12',
    name:'V Kaleka2',
    roles:['GK'],
    nation:'RUS',
    transfer:'',
    status:'',
    speciality:'',
    quality:'5',
  },{
    id: 3,
    position:'GK',
    number:'13',
    name:'V Kaleka3',
    roles:['GK'],
    nation:'RUS',
    transfer:'',
    status:'',
    speciality:'',
    quality:'1',
  },{
    id: 4,
    position:'GK',
    number:'14',
    name:'V Kaleka4',
    roles:['GK'],
    nation:'RUS',
    transfer:'',
    status:'',
    speciality:'',
    quality:'3',
  }];

  $scope.tabs = [{
    title: 'Навыки',
    url: $scope.tmpUrl + '/playerSkillView.html'
  },{
    title: 'Здоровье',
    url: $scope.tmpUrl + '/playerHealthView.html'
  }, {
    title: 'Контракт',
    url: $scope.tmpUrl + '/playerContractView.html'
  }, {
    title: 'Статистика',
    url: $scope.tmpUrl + '/playerStatisticView.html'
  }, {
    title: 'Трансферы',
    url: $scope.tmpUrl + '/playerTransferView.html'
  }];


  $scope.modalText = {
    modalTitle: 'Вы действительно хотите купить этот предмет?',
    buyFor: 'Купить за'
  };


  $scope.open = function (id) {

    var modalInstance = $modal.open({
      templateUrl: 'app/shared/player/playerModalView.html',
      controller: 'teamModalController',
      size: 'lg',
      backdrop: true,
      resolve: {
        id: function () {
          return id;
        },
        modalText: function () {
          return $scope.modalText;
        },
        tabs: function () {
          return $scope.tabs;
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