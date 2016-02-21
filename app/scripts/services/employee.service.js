(function() {
	'use strict';

	angular.module('anglrApp').service('employeeService', employeeService);

	employeeService.$inject = ['$http']

	function employeeService($http) {
		var self = this;

		self.getEmployees = function () {
			$http
				.get('http://jsonplaceholder.typicode.com/users')
				.then(function (response) {
					console.dir(response.data);
				}, function (error) {
					console.dir(error.status);
				})
		}
	}
})()