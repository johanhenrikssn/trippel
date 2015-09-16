(function() {
    'use strict';

    angular
        .module('trippelApp')
        .directive('carouselContainer', carouselContainer);

    function carouselContainer() {
        var directive = {
            link: link,
            templateUrl: 'app/views/carouselcontainer.html',
            restrict: 'EA'
        };

        return directive;

        function link($scope, $element, $attrs, $window) {

            $(function() {
                $('.carousel').carousel({
                    interval: 3000
                });
            });

        }


    }

})();
