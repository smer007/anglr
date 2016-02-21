(function() {
	'use strict';

	angular.module('anglrApp').filter('phone', phoneFilter);

	function phoneFilter() {

		return function (phoneStr) {
			let filteredPhone = '';
			if(phoneStr){
				filteredPhone = phoneStr.replace(/-|x/g, "");
				filteredPhone = '('+ filteredPhone.substring(0,3) +') '+ filteredPhone.substring(3,6)+'-'+filteredPhone.substring(6,10);
			}
			return filteredPhone;
		};
	}
})();