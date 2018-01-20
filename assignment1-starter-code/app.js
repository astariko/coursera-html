(function () {
'use strict';

angular.module('Ass1', [])
.controller('AssController', AssController);

function calculate(string) {

  var split_dishes = string.split(',')
  var count = 0
  for (var i = 0; i < split_dishes.length; i++) {
    if (split_dishes[i].concat() != "") {
      count += 1;
    }
  }
  return count
};


AssController.$inject = ['$scope', '$filter'];
function AssController($scope, $filter) {
  $scope.dishes = ""
  $scope.msg = ""
  $scope.color = "#FFFFFF"


  $scope.click = function () {
    var count = calculate($scope.dishes)

    $scope.msg = ""
    $scope.color = "#228B22"

    if (count > 3) {
      $scope.msg = "Too much!"
    }
    else {
      $scope.msg = "Enjoy"
    }

    if (count < 1){
      $scope.msg = "Please enter data first"
      $scope.color = "#8B0000"
    }

  };
}

})();
