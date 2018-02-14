(function () {
'use strict';

angular.module('Ass4App')
.service('GetCategoriesService', GetCategoriesService);


GetCategoriesService.$inject = ['$http', 'ApiBasePath'];
function GetCategoriesService($http, ApiBasePath) {
  var service = this;

  service.getAllMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    })

    return response;
  };


  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category="+categoryShortName)
    })

    return response;
  };
}



})();
