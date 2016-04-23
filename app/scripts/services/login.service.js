(function() {
	'use strict';

	angular.module('anglrApp').service('loginService', loginService);

	loginService.$inject = ['$http', '$q'];

	function loginService($http, $q) {
		var self = this;

		self.getTweets = function () {

			// defer object is created when you want to tell the caller of the function that whenever the response comes from 
			// this call, I promise I will return back to you.
			var defer = $q.defer();

			$http
				.get('http://localhost:8080/RESTApi/api/employees/tweets')
				.then(function (response) {
					console.log(response.data);
					defer.resolve(response.data);//proimse made is successfull
				}, function (error) {
					defer.reject(error.status);//proimse made is unsuccessfull
				});

				return defer.promise;
		};
	}
})();