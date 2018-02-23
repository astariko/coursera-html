(function () {
  "use strict";

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['user', 'ApiPath'];
  function InfoController(user, ApiPath) {
    var userCtrl = this;
    userCtrl.user = user;
    userCtrl.basePath = ApiPath;
  }


})();
