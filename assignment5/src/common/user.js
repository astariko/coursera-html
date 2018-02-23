(function() {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = [];
function UserService() {
  var service = this;

  service.login = function (user){
    service.user = user;
  };
  service.getInfo = function (user){
    return service.user;
  };
}

})();
