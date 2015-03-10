basketballManagerApp.controller('clubController',['$scope', function($scope) {
  $scope.clubStatisticItem = {
    clubName: 'Название клуба',
    clubLevel: 'Уровень клуба',
    isFounded: 'Основан',
    clubCountry: 'Страна',
    clubCity: 'Город',
    clubStadium: 'Стадион',
    stadiumCapacity: 'Вместимость',
    clubManager: 'Менеджер',
    fanclubName: 'Название фан-клуба'
  };

  $scope.clubStatisticValue = {
    clubName: 'Club FC',
    clubLevel: '1',
    isFounded: '26.05.2015 13:45',
    clubCountry: 'Россия',
    clubCity: 'Москва',
    clubStadium: 'Сlub FC Stadium',
    stadiumCapacity: '300',
    clubManager: 'Great Player',
    fanclubName: 'Club FC fans'
  };

  $scope.clubAttributes = ['/assets/img/home.png','/assets/img/club.jpg','/assets/img/guest.png'];

  $scope.seasonTitle = 'Статистика сезона';


  $scope.seasonStatisticItem = {
    matches: 'Матчи',
    scoredGoals: 'Забитые голы',
    missedGoals: 'Пропущенные голы',
    averageAttendance: 'Средняя посещаемость',
    winningStreak: 'Победная серия',
    losslessStreak: 'Беспроигрышная серия'
  };

  $scope.seasonStatisticValue = {
    matches: {
     wins: 3,
     draw: 4,
     loses: 5
    },
    scoredGoals: 12,
    missedGoals: 0,
    averageAttendance: 200,
    winningStreak: 3,
    losslessStreak: 3
  };

  $scope.playerStatisticItem = {
    mvpGoals: 'Матчи',
    mvp: 'Забитые голы',
    mvpMatches: 'Пропущенные голы',
    mvpPasses: 'Средняя посещаемость',
    winningStreak: 'Победная серия',
    losslessStreak: 'Беспроигрышная серия'
  };
}]);