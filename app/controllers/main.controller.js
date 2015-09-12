(function() {
    'use strict';

    angular
        .module('trippelApp')
        .controller('mainController', mainController);


    function mainController($scope, $http) {

        $http.get('projectdata.json').success(function(data) {
          $scope.projects = data;
        });

        $scope.activeProject;
        $scope.show = false;
        $scope.fullscreen = { bool: false};

        $scope.infofilm = {
            title: "Om medieteknik",
            description: "",
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
    }
})();
