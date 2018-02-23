(function() {
'use strict';

angular.module('public')
.constant('ApiBasePath', "https://astariko-course5a.herokuapp.com/menu_items/")
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.myinfo', {
      url: '/public.myinfo',
      templateUrl: 'src/public/user/myinfo.html',
      controller: 'InfoController',
      controllerAs: 'userCtrl',
      resolve: {
        user: ['UserService', function (UserService) {
          //console.log("I run >> ")
          return UserService.getInfo();
        }]
      }
    })
    .state('public.signup', {
      url: '/public.signup',
      templateUrl: 'src/public/user/signup.html',
      controller: 'UserController',
      controllerAs: 'userCtrl',
      resolve: {
        //menuCategories: ['MenuSearchService', function (MenuSearchService) {
        //  return MenuSearchService.getItem('c5');
        //}]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();
