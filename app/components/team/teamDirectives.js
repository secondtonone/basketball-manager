basketballManagerApp.directive('draggable', function(){
  // Runs during compile
  return  function($scope, element, attrs) {
    element.draggable();
  };

});