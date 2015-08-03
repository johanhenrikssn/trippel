(function() {
    'use strict';

    angular
        .module('trippelApp')
        .controller('mainController', mainController);

    function mainController($scope) { 

    	$scope.hej = "Stora fötter, stort hår";

    }
})();