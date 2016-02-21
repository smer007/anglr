(function() {
	'use strict';

	angular.module('anglrApp').service('employeeService', employeeService);

	employeeService.$inject = ['$http', '$q']

	function employeeService($http, $q) {
		var self = this;

		self.getEmployees = function () {

			// defer object is created when you want to tell the caller of the function that whenever the response comes from 
			// this call, I promise I will return back to you.
			var defer = $q.defer();

			$http
				.get('http://jsonplaceholder.typicode.com/users')
				.then(function (response) {
					defer.resolve(response.data);//proimse made is successfull
				}, function (error) {
					defer.reject(error.status);//proimse made is unsuccessfull
				})

				return defer.promise;
		}
	}
})()