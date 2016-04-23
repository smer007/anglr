'use strict';

/**
 * @ngdoc function
 * @name anglrApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the anglrApp
 */

angular.module('anglrApp')
  .controller('LoginCtrl', LoginController);

  LoginController.$inject= ['loginService'];
  function LoginController(loginService) {
    var loginVm = this;

    loginService.getTweets().then(function (result) {
      loginVm.Tweets = result;
      // console.dir(loginVm.Tweets);
    }
    );

  }


