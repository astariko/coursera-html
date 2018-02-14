(function () {
'use strict';

angular.module('Ass4App')
.controller('GetCategoriesController', GetCategoriesController);


GetCategoriesController.$inject = ['GetCategoriesService', 'categories'];
function GetCategoriesController(service, categories) {
  var search = this;
  search.categories = categories.data;
  //console.log(categories);
  //search.categories = [];

  search.search = function (){
    search.errorMessage = "";

    var promise = service.getAllMenuItems();
    promise.then(function (response) {
      search.categories = response.data;
      //console.log(response.data);
    })
    .catch(function (error) {
      console.log("Error in menuapp.controller 456");
      search.errorMessage = "Something went terribly wrong."
    });
  }
};//function


})();
