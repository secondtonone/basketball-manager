basketballManagerApp.controller('matchController',['$scope','$location','$http','$timeout',function ($scope,$location,$http,$timeout) {

  $http.post('/assets/source/matchData.json'/*, {msg:'hello word!'}*/).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.dataMatchEvents = data.matchEvents;

    $scope.matchEvents = [];



    for (var i=0; i < $scope.dataMatchEvents.length; ++i) {
      //цикл по таймам

      for (var j=0; j < $scope.dataMatchEvents[i].length; ++j) {
        //цикл по событиям в тайме
        (function (event,pos,length,period) {
          period+=1;
          setTimeout(function () {

            $(".stadium__events__show").prepend('<tr><td class="stadium__events__event">' + event.ownTeam + '</td><td class="stadium__events__time">' + event.timeEvent + '</td><td class="stadium__events__event">' + event.enemyTeam + '</td></tr>');

            if (pos == length-1) {
              $(".stadium__events__show").prepend('<tr><td colspan="3" class="stadium__events__end-time">Конец ' + period +' тайма</td></tr>');
            }
          }, event.timeEvent);

        })($scope.dataMatchEvents[i][j], j, $scope.dataMatchEvents[i].length, i);
      }

    }

  });



}]);