basketballManagerApp.controller('matchController',['$scope','$location','$http','$timeout',function ($scope,$location,$http,$timeout) {


  $scope.msToString = function (ms)
  {
    var time = new Date(0, 0, 0, 0, 0, 0, ms*12);
    return (time.getMinutes()<10?'0':'') + time.getMinutes() + " : " + (time.getSeconds()<10?'0':'') + time.getSeconds();
  };

  $http.post('/assets/source/matchData.json'/*, {msg:'hello word!'}*/).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    var timeOfMatch = 240000;//время матча
    var i=0;
    var j=0;

    $scope.dataMatchEvents = data.matchEvents;
    $scope.matchData = data.matchData;
    $scope.gameStatusNow = $scope.matchData.gameStatus[0];
    $scope.ownTeam = data.matchData.teams.own;
    $scope.enemyTeam = data.matchData.teams.enemy;
    $scope.ownPeriods = [0,0,0,0];
    $scope.enemyPeriods = [0,0,0,0];

    $scope.scoreOwnTeam = 0;
    $scope.scoreEnemyTeam = 0;
    $scope.advantage = 50;
    $scope.timeOfMatch = "00 : 00";

    $scope.matchEvents = [];

    $scope.nowOnMatch = new Date().getTime();
    $scope.onStartMatch = $scope.nowOnMatch - $scope.startMatch;//разница между началом матча и заходом пользователя на страницу матча
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
    } else {

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

      }
    }

  });



}]);