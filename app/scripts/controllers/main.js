'use strict';

/**
 * @ngdoc function
 * @name anglrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anglrApp
 */
angular.module('anglrApp')
  .controller('MainCtrl', function () {
  	var mainVm = this;
    mainVm.awesomeThings = [
      'Two way data binding',
      'Dirty checking',
      'Digest cycle'
    ];
    mainVm.Employees = [{
    	"id": 1,
    	"name": "Sumeer"
    }, {
    	"id": 2,
    	"name": "Sam"
    }, {
    	"id": 3,
    	"name": "Tuli"
    }, {
    	"id": 4,
    	"name": "TuliSumeer"
    }]

    mainVm.addEmployee = function () {
    	mainVm.Employees.push(mainVm.Employee);
    	mainVm.Employee = null;
    }

    mainVm.deleteEmployee = function (position) {
    	mainVm.Employees.splice(position, 1);
    }

  });
