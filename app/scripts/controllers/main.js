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
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
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
    	// console.log(mainVm.Employee);
    }

  });
