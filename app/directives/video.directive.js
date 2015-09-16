(function() {
    'use strict';

    angular
        .module('trippelApp')
        .directive('videoContainer', videoContainer);

    function videoContainer() {
        var directive = {
            link: link,
            templateUrl: 'app/views/videocontainer.html',
            restrict: 'EA'
        };

        return directive;

        function link($scope, $element, $attrs, $window) {


     	  	document.addEventListener("webkitfullscreenchange", overlay);

        	function overlay() {
        		$scope.overlay = !$scope.overlay;
        		$scope.$apply();
        	}

        }


    }

})();
