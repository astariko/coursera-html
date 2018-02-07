(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var search = this;
  search.searchItem = "";

  search.search = function (){
    search.errorMessage = "";

    var promise = MenuSearchService.getMatchedMenuItems(search.searchTerm);

    promise.then(function (response) {
      var items = response.data.menu_items;
      //console.log(search.items)
      search.items = [];

      for (var i=0; i < items.length; i++) {
        if (items[i].description.indexOf(search.searchItem) >= 0){
          search.items.push(items[i]);
        }
      }

      if (search.items.length == 0){
        search.errorMessage = "Nothing found."
      }

      if (search.searchItem =="") {
        search.items = [];
        search.errorMessage = "Please enter a search criteria"
      }

    })
    .catch(function (error) {
      search.errorMessage = "Something went terribly wrong."
    });
  }


  search.removeItem = function (index) {
    search.items.splice(index, 1);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })

    return response;
  };
}

foundItemsDirective.$inject = []
function foundItemsDirective() {
	var ddo = {
		templateUrl: 'found.html',
    scope: {
      items: '<',
      onRemove: '&'
    },

    controller: NarrowItDownController,
    bindToController: true,
    controllerAs: 'search'
	};
	return ddo;
}

})();
