basketballManagerApp.controller('headerController',['$scope',function ($scope) {
  $scope.typeOfMatch = 'Клубный матч';
  $scope.dateOfMatch = 'Завтра';
  $scope.timeOfMatch = '13 : 40';

  $scope.userName = 'Great Player';
  $scope.seasonGame = 'Сезон 1, день 26/28';
  $scope.levelManager = 'Уровень менеджера';
  $scope.playerPosition = 'Позиция в лиге';

  $scope.levelManagerValue = '1-Новичок';
  $scope.playerPositionValue = '5';

  $scope.playerResources = {
    fans: '234',
    money: '234,5M',
    tokens: '23'
  };

  $scope.teams = {
    own:{
      name: 'My club bs',
      img: '/assets/img/club.jpg'
    },
    enemy: {
      name: 'Enemy club bs',
      img: '/assets/img/club.jpg'
    }
  };

  $scope.medicineBox = {
    red: 2,
    blue: 3,
    green: 5,
  };

  $scope.userEvent = 'Доступна разминка';
}]);