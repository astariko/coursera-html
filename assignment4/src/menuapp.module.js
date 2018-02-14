(function () {
'use strict';

angular.module('Ass4App',['ui.router']);

angular.module('Ass4App')
.config(RoutesConfig)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to / if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/categories.html',
      controller: 'GetCategoriesController as search',
      resolve: {
         categories: ['GetCategoriesService', function (GetCategoriesService) {
           //console.log("I actually run, see?")
           console.log(GetCategoriesService.getAllMenuItems());
           return GetCategoriesService.getAllMenuItems();
         }]
      }
    })

    .state('items', {
      url: '/items/{shortName}', // /{shortName}
      templateUrl: 'src/items.html',
      //params: {shortName:null},
      controller: 'GetItemsController as itemsSearch',
      resolve: {
         items: ['GetCategoriesService', '$stateParams', function (GetCategoriesService, $stateParams) {
           //console.log("I actually run, see?")
           //console.log($stateParams)
           return GetCategoriesService.getItemsForCategory($stateParams.shortName);
         }]
      }
    })
}

})();
