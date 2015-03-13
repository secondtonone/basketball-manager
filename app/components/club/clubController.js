basketballManagerApp.controller('clubController',['$scope', function($scope) {

  $scope.tmpUrl ='app/components/club/';

  $scope.tabs = [{
    title: 'Обзор',
    url: $scope.tmpUrl + 'clubOverviewView.html'
  }, {
    title: 'История',
    url: $scope.tmpUrl + 'clubHistoryView.html'
  }];

  $scope.currentTab = $scope.tabs[0].url;

  $scope.onClickTab = function (tab) {
    $scope.currentTab = tab.url;
  };

  $scope.isActiveTab = function(tabUrl) {
    return tabUrl == $scope.currentTab;
  };

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
  $scope.generalSeasonTitle = 'Общая статистика';


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

  $scope.generalStatisticValue = {
    matches: {
     wins: 6,
     draw: 7,
     loses: 9
    },
    scoredGoals: 16,
    missedGoals: 2,
    averageAttendance: 200,
    winningStreak: 3,
    losslessStreak: 3
  };

  $scope.playerStatisticItem = {
    mostScoredGoals: 'Больше всего голов',
    mostPasses: 'Больше всего передач',
    mostPlayedMatches: 'Больше всего матчей',
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

  $scope.playerGeneralStatisticValue = {
    mostScoredGoals: {
      field:'Джек',
      value:'6'
    },
    mostPasses: {
      field:'Бмж',
      value:'2'
    },
    mostPlayedMatches: {
      field:'Стрелок',
      value:'5'
    },
    mostGoalsInMatch: {
      field:'Мастер',
      value:'7'
    },
    mostSuccessfulMatch: {
      field:'Сборная мира FC',
      value:'4:7'
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

  $scope.clubTitlesItem = {
    champion: 'Чемпион',
    viceChampion: 'Вице-чемпион',
    winnerChampionsLeague: 'Победитель Лиги Чемпионов',
    finalistChampionsLeague: 'Финалист Лиги Чемпионов',
    winnerCup: 'Победитель Кубка',
    finalistCup: 'Финалист Кубка'
  };

  $scope.clubTitlesValue = {
    champion: 4,
    viceChampion: 5,
    winnerChampionsLeague: 6,
    finalistChampionsLeague: 9,
    winnerCup: 8,
    finalistCup: 7
  };
}]);