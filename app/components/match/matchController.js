basketballManagerApp.controller('matchController',['$scope','$location','$http','$timeout',function ($scope,$location,$http,$timeout) {

  $scope.period = 1;

  $scope.ownPeriods = [0,0,0,0];
  $scope.enemyPeriods = [0,0,0,0];

  $scope.scoreOwnTeam = 0;
  $scope.scoreEnemyTeam = 0;

  $scope.advantage = 50;

  $scope.timeOfMatch = "00 : 00";

  $scope.msToString = function (ms)
  {
    var time = new Date(0, 0, 0, 0, 0, 0, ms*12);
    return (time.getMinutes()<10?'0':'') + time.getMinutes() + " : " + (time.getSeconds()<10?'0':'') + time.getSeconds();
  };


  $scope.eventsTimer = {
    i: 0,//не знаю за чем
    timers:[],//сгенерированные таймеры всех событий, промисы от $timeout
    currentTimer: 0,//порядковый номер таймера
    currentTime: 0,//время таймера
    lastTime: 0,
    stopTimers: function () {//остановка таймеров
      for (var i = this.currentTimer + 1; i < this.timers.length; ++i) {
        (function(i){
          $timeout.cancel($scope.eventsTimer.timers[i]);
        })(i);
      }
      this.timers = [];
      this.lastTime = this.currentTime;
      getEndingMatch($scope.period, this.currentTime);
    },
    makeTimerQueue: function (events) {//генерация таймеров в массив
      var eventsCount = events.length;
      var promise = '';
      for (var i=0; i < eventsCount; ++i) {//цикл по событиям матча

        (function (i,count) {
          promise = $timeout(function () {//ангуляр таймер

            $scope.eventsTimer.currentTimer = i;
            $scope.eventsTimer.currentTime = events[i].timeEvent*50;
            //счет
            $scope.scoreOwnTeam = events[i].score.own;
            $scope.scoreEnemyTeam = events[i].score.enemy;
            //счет периода
            $scope.ownPeriods[$scope.period-1] = events[i].period.own;
            $scope.enemyPeriods[$scope.period-1] = events[i].period.enemy;
            //ползунок и время
            $scope.advantage = events[i].advantage;
            $scope.timeOfMatch = $scope.msToString(events[i].timeEvent*50*$scope.period);
            //вставка события в шаблон
            $(".match-display__events__show").prepend('<tr><td class="match-display__events__event">' + events[i].ownTeam + '</td><td class="match-display__events__time">' + $scope.msToString(events[i].timeEvent*50) + '</td><td class="match-display__events__event">' + events[i].enemyTeam + '</td></tr>');
            //если последнее событие
            if (i == count-1) {
              //вставка сообщения что период закончен
              $(".match-display__events__show").prepend('<tr><td colspan="3" class="match-display__events__end-time">'+ $scope.matchData.period.end + ' ' + $scope.period + $scope.matchData.period.th +' '+ $scope.matchData.period.quarter +'</td></tr>');
              //статус игры
              $scope.gameStatusNow = $scope.matchData.gameStatus[$scope.period];
              //следующий период
              $scope.period += 1;
              $scope.eventsTimer.timers = [];
              //вызываем события на след период
              getMatch($scope.period);
            }
          }, events[i].timeEvent*50 - $scope.eventsTimer.lastTime);
        })(i,eventsCount)
        //добавляем промисы в массив
        $scope.eventsTimer.timers.push(promise);
      }
    }
  };
  //запрос на шаблонные данные

  $http.post('/assets/source/matchData.json'/*, {msg:'hello word!'}*/).
  success(function(data, status, headers, config) {
    $scope.matchData = data.matchData;
    $scope.gameStatusNow = $scope.matchData.gameStatus[0];
    $scope.ownTeam = data.matchData.teams.own;
    $scope.enemyTeam = data.matchData.teams.enemy;
  });
  //запрос на период
  function getMatch (period) {
    //если меньше 5, 5ого периода ведь нет
    if (period < 5) {
      $http.post('/assets/source/matchData-' + period + '.json'/*, {msg:'hello word!'}*/).
        success(function(data, status, headers, config) {
          $scope.matchEvents = data;

          $scope.nowOnMatch = new Date().getTime();
          //делаем очередь из таймеров
          $scope.eventsTimer.makeTimerQueue($scope.matchEvents);
      });
    } else {
      return false;
    }
  }
  //запрос на остаток матча
  function getEndingMatch (period,time) {
    if (period < 5) {
      $http.post('/assets/source/matchData-' + period + '-' + time + '.json'/*, {msg:'hello word!'}*/).
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          //var timeOfMatch = 240000;//время матча
          $scope.matchEvents = data;

          $scope.nowOnMatch = new Date().getTime();

          $scope.eventsTimer.makeTimerQueue($scope.matchEvents);
      });
    } else {
      return false;
    }
  }
  //запрос на первый матч
  getMatch($scope.period);

 /* $http.post('/assets/source/matchData-1.json').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    var timeOfMatch = 240000;//время матча
    var i=0;
    var j=0;


    $scope.matchEvents = data;

    $scope.nowOnMatch = new Date().getTime();

    $scope.eventsTimer.makeTimerQueue($scope.matchEvents);*/

    /*$scope.onStartMatch = $scope.nowOnMatch - $scope.startMatch;//разница между началом матча и заходом пользователя на страницу матча
    console.log($scope.onStartMatch);
    if($scope.onStartMatch > timeOfMatch) {

      $scope.gameStatusNow = $scope.matchData.gameStatus[4];

      for (i=0; i < $scope.dataMatchEvents.length; ++i) {
        //цикл по таймам

        for (j=0; j < $scope.dataMatchEvents[i].length; ++j) {
          //цикл по событиям в тайме
          (function (event,pos,length,period) {
            period+=1;


              $scope.scoreOwnTeam = event.score.own;
              $scope.scoreEnemyTeam = event.score.enemy;

              $scope.ownPeriods[period-1] = event.period.own;
              $scope.enemyPeriods[period-1] = event.period.enemy;

              $scope.advantage = event.advantage;
              $scope.timeOfMatch = $scope.msToString(event.timeEvent*50);

              $(".stadium__events__show").prepend('<tr><td class="stadium__events__event">' + event.ownTeam + '</td><td class="stadium__events__time">' + $scope.msToString(event.timeEvent*50) + '</td><td class="stadium__events__event">' + event.enemyTeam + '</td></tr>');

              if (pos == length-1) {

                $(".stadium__events__show").prepend('<tr><td colspan="3" class="stadium__events__end-time">'+ $scope.matchData.period.end + ' ' + period + $scope.matchData.period.th +' '+ $scope.matchData.period.quarter +'</td></tr>');

                $scope.gameStatusNow = $scope.matchData.gameStatus[period];
              }
          })($scope.dataMatchEvents[i][j], j, $scope.dataMatchEvents[i].length, i);
        }
      }
    } else {*/
/*
      for (i=0; i < $scope.dataMatchEvents.length; ++i) {
        //цикл по таймам

        for (j=0; j < $scope.dataMatchEvents[i].length; ++j) {
          //цикл по событиям в тайме
          (function (event,pos,length,period) {
            period+=1;
            $timeout(function () {

              $scope.scoreOwnTeam = event.score.own;
              $scope.scoreEnemyTeam = event.score.enemy;

              $scope.ownPeriods[period-1] = event.period.own;
              $scope.enemyPeriods[period-1] = event.period.enemy;

              $scope.advantage = event.advantage;
              $scope.timeOfMatch = $scope.msToString(event.timeEvent*50);

              $(".stadium__events__show").prepend('<tr><td class="stadium__events__event">' + event.ownTeam + '</td><td class="stadium__events__time">' + $scope.msToString(event.timeEvent*50) + '</td><td class="stadium__events__event">' + event.enemyTeam + '</td></tr>');

              if (pos == length-1) {

                $(".stadium__events__show").prepend('<tr><td colspan="3" class="stadium__events__end-time">'+ $scope.matchData.period.end + ' ' + period + $scope.matchData.period.th +' '+ $scope.matchData.period.quarter +'</td></tr>');

                $scope.gameStatusNow = $scope.matchData.gameStatus[period];
              }
            }, event.timeEvent*50);

          })($scope.dataMatchEvents[i][j], j, $scope.dataMatchEvents[i].length, i);
        }

      }*/

    /*}*/

  /*});*/



}]);