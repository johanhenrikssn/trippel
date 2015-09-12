(function() {
    'use strict';

    angular
        .module('trippelApp')
        .controller('mainController', mainController);


    function mainController($scope, $http) {

        $http.get('projectdata.json').success(function(data) {
          $scope.projects = data;
        }).then(function(){

            $scope.activeProject;
            $scope.show = false;
            $scope.fullscreen = { bool: false};

            $scope.infofilm = {
                title: "Om medieteknik",
                description: "Här ligger tyngdpunkten på själva tekniken bakom medier och andra informationsflöden. Det kan handla om twitter, chat och smartphones, om dataspel och specialeffekter i film, om flygsimulatorer och tekniska verktyg för kirurger, det vill säga branscher och områden i ständig utveckling. Det är därför ingen slump att utbildningen sker i Norrköping, i nära anslutning till världsledande forskning och till Visualiseringscenter C.",
                source: "././projects/movies/presentationsfilm.mp4",
                type: "video"

            };

            $scope.changeView = function(project) {
              $scope.show = !$scope.show;
              $scope.activeProject = project;

              $scope.fullscreen.bool = false;
            };

            $scope.getProjectsFromYear = function(year) {
                var tmpArray = [];
                for (var i = 0; i < $scope.projects.length; i++) {
                    if($scope.projects[i].year == year)
                        tmpArray.push($scope.projects[i])
                };

                return tmpArray;
            };

        });

        
    }
})();
