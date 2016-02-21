'use strict';

/**
 * @ngdoc function
 * @name anglrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anglrApp
 */
angular.module('anglrApp')
  .controller('MainCtrl', MainController);

  function MainController() {
    var mainVm = this;
    
    mainVm.Employees = [{
      "id": 1,
      "name": "Sumeer",
      "price": 4
    }, {
      "id": 2,
      "name": "Sam",
      "price": 4
    }, {
      "id": 3,
      "name": "Tuli",
      "price": 4
    }, {
      "id": 4,
      "name": "TuliSumeer",
      "price": 4
    }]

    mainVm.addEmployee = function () {
      mainVm.Employees.push(mainVm.Employee);
      mainVm.Employee = null;
    }

    mainVm.deleteEmployee = function (position) {
      mainVm.Employees.splice(position, 1);
    }

    mainVm.sort = {
      by: 'id',
      reverse: false
    }

  }
