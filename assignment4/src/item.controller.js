(function () {
'use strict';

angular.module('Ass4App')
.controller('GetItemsController', GetItemsController);


GetItemsController.$inject = ['GetCategoriesService', 'items'];
function GetItemsController(service, items) {
  var itemsSearch = this;
  //search.categories = categories.data;
  console.log("i'm in");
  console.log(items.data.menu_items);
  itemsSearch.items = items.data.menu_items;
};//function


})();
