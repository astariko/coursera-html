(function () {
"use strict";

angular.module('public')
.controller('UserController', UserController);
//.service('MenuSearchService', MenuSearchService);

UserController.$inject = ['MenuService', 'UserService'];
function UserController(MenuService, UserService) {
  var userCtrl = this;
  //$ctrl.menuCategories = menuCategories;
    userCtrl.register = function(){
      MenuService.getMenuItem(userCtrl.user.menu_item)
      .then(function(result){
      console.log("I'm in")
      //console.log(userCtrl.last_name)
      //console.log(MenuSearchService.getItem('C5'))
      userCtrl.wrongItem = false;
      userCtrl.user.item = result;
      UserService.login(userCtrl.user);
      userCtrl.result = "Success";
    })
    .catch(function(result){
        console.log("Caught wrong item")
        userCtrl.wrongItem = true;
        userCtrl.result = "Fail, item not found";
    });
  }
}



// MenuSearchService.$inject = ['$http', 'ApiBasePath'];
// function MenuSearchService($http, ApiBasePath) {
//   var service = this;
//
//   service.getItem = function (searchTerm) {
//     var response = $http({
//       method: "GET",
//       url: (ApiBasePath + searchTerm + ".json")
//     })
//
//     return response;
//   };
// }

})();
