(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyer = this;
  //console.log("me! i'm alive")
  buyer.items = ShoppingListCheckOffService.getToBuyItems()
  //console.log(buyer.items)

  buyer.buy = function (index) {
    ShoppingListCheckOffService.buy(index);
  }
}
// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems()

}

// Service starts with initialized array
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    {name: "void", quantity: 10},
    {name: "dreams", quantity: 11},
    {name: "ships", quantity: 12},
    {name: "milk", quantity: 13},
    {name: "cows", quantity: 14.5}
  ];

  var boughtItems = [];


  service.buy = function (itemIdex) {
    var el = toBuyItems.splice(itemIdex, 1);
    //console.log(el);
    boughtItems.push(el[0])
    console.log(boughtItems)
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };
}
})();
