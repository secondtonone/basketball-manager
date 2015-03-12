basketballManagerApp.controller('clubController',['$scope', function($scope) {

  $scope.panels = {
    overview: 'Обзор',
    history: 'История'
  };

  $scope.currentTab = 1;

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
    matches: {
      main:'Матчи',
      wins:'В',
      draw:'Н',
      loses:'П'
    },
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
    mostScoredGoals: 'Матчи',
    mostPasses: 'Забитые голы',
    mostPlayedMatches: 'Пропущенные голы',
    mostGoalsInMatch: 'Наибольшее кол-во голов в матче',
    mostSuccessfulMatch: 'Наиболее результативный матч',
  };

  $scope.playerStatisticValue = {
    mostScoredGoals: {
      field:'Джек',
      value:'3'
    },
    mostPasses: {
      field:'Бмж',
      value:'1'
    },
    mostPlayedMatches: {
      field:'Стрелок',
      value:'2'
    },
    mostGoalsInMatch: {
      field:'Мастер',
      value:'2'
    },
    mostSuccessfulMatch: {
      field:'Сборная мира FC',
      value:'0:7'
    }
  };

  $scope.playerInOutItem = {
    in:'Пришедшие игроки',
    out: 'Ушедшие игроки'
  };

  $scope.playerInOutValue = {
    in: ['Курт','Кобейн'],
    out: ['Фреди','Меркюри']
  };


}]);