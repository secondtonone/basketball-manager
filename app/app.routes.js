//конфигурация
basketballManagerApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  var viewUrl = '/app/components/';

  $routeProvider.
    when('/club', {
      templateUrl: viewUrl + 'club/clubView.html',
      controller: 'clubController'
    }).
    when('/team', {
      templateUrl: viewUrl + 'team/teamView.html',
      controller: 'teamController'
    }).
    when('/manager', {
      templateUrl: viewUrl + 'manager/managerView.html',
      controller: 'managerController'
    }).
    when('/calendar', {
      templateUrl: viewUrl + 'calendar/calendarView.html',
      controller: 'calendarController'
    }).
    when('/news', {
      templateUrl: viewUrl + 'news/newsView.html',
      controller: 'newsController'
    }).
    when('/store', {
      templateUrl: viewUrl + 'store/storeView.html',
      controller: 'storeController'
    }).
    when('/competition', {
      templateUrl: viewUrl + 'competition/competitionView.html',
      controller: 'competitionController'
    }).
    when('/finances', {
      templateUrl: viewUrl + 'finances/financesView.html',
      controller: 'financesController'
    }).
    when('/stadium', {
      templateUrl: viewUrl + 'stadium/stadiumView.html',
      controller: 'stadiumController'
    }).
    when('/training', {
      templateUrl: viewUrl + 'training/trainingView.html',
      controller: 'trainingController'
    }).
    when('/transfers', {
      templateUrl: viewUrl + 'transfers/transfersView.html',
      controller: 'transfersController'
    }).
    otherwise({
      redirectTo: '/club'
    });
}]);