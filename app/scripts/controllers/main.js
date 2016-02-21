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

  MainController.$inject= ['employeeService'];
  function MainController(employeeService) {
    var mainVm = this;
    
    mainVm.Employees = employeeService.getEmployees();

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
