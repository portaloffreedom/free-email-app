
(function(){
'use strict';
  angular
    .module('mailApp', ['ngMaterial'])
    
    .controller('AppCtrl', function($scope) {
      $scope.test = "hello world";

      $scope.mails = [
        { id:1, content: 'test'},
        { id:2, content: 'test 2'},
        { id:3, content: 'test 3'},
      ];
    })

    .config(function($mdThemingProvider) {

      // Use the 'brown' theme - override default 'blue' theme

      $mdThemingProvider.theme('default')
        .primaryPalette('deep-orange')
        .accentPalette('indigo');

    });

})();
