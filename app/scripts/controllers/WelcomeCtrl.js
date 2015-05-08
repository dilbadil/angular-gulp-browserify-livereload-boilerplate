"use strict";

var WelcomeCtrl = function($scope) {
  $scope.testVar = 'Yeah, we are up and running from a required module!';
};

WelcomeCtrl.$inject = ['$scope'];

module.exports = WelcomeCtrl;
