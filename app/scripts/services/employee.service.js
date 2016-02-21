(function() {
	'use strict';

	angular.module('anglrApp').service('employeeService', employeeService);

	function employeeService() {
		var self = this;

		self.getEmployees = function () {
			return [{
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
		}
	}
})()