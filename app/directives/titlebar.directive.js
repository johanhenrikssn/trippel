(function() {
    'use strict';

    angular
        .module('trippelApp')
        .directive("titleBarScroll", hejhej);


        function hejhej()
        {
            return function(scope, element, attrs) {
                angular.element(window).bind("scroll", function() {

                    if (!scope.scrollPosition) {
                        scope.scrollPosition = 0;
                    }

                    var inWin = window.innerHeight;

                    if (this.pageYOffset > 0.05*inWin) {
                        scope.bgColor = "rgba(53,53,53,0.8)";
                    }
                    else
                        scope.bgColor = "transparent";

                    scope.scrollPosition = this.pageYOffset;
                    scope.$apply();
                });
            };
        }

})();
