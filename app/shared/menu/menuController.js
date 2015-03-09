basketballManagerApp.controller('menuController',['$scope','$location',function ($scope,$location) {

  $scope.menu = [{
    title: "Новости",
    link: "/news"
  },{
    title: "Команда",
    link: "/team"
  },{
    title: "Тренировки",
    link: "/training"
  },{
    title: "Календарь",
    link: "/calendar"
  },{
    title: "Соревнования",
    link: "/competition"
  },{
    title: "Трансферы",
    link: "/transfers"
  },{
    title: "Финансы",
    link: "/finances"
  },{
    title: "Стадион",
    link: "/stadium"
  },{
    title: "Клуб",
    link: "/club"
  },{
    title: "Менеджер",
    link: "/manager"
  },{
    title: "Магазин",
    link: "/store"
  }];

  $scope.isActive = function(route) {
    return route === $location.path();
  };
}]);