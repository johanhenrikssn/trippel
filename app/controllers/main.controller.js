(function() {
    'use strict';

    angular
        .module('trippelApp')
        .controller('mainController', mainController);

    function mainController($scope) { 

    	$scope.activeProject;
        $scope.show = false;

    	$scope.projects = [
        {
    		title: "POLYGON",
    		description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            color: "#3E4F5B"
        },
        {
            title: "MR.CARROT",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            color: "#B0B6BA"
        },
        {
            title: "WEATHER",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            color: "#3BC0C3"
        }, 
        {
            title: "MOTE",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            color: "#F16161"
        }, 
        {
            title: "TRAIN",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            color: "#F0F0F1"
        },
        {
            title: "X",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            color: "#3E4F5B"
        },
        {
            title: "ANSIKTET",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            color: "#B0B6BA"
        },
        {
            title: "JONKEN",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            color: "#3BC0C3"
        },
        {
            title: "PUTTE",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            color: "#F16161"
        }, 

        ];





        $scope.changeView = function(project) {

            $scope.show = !$scope.show;
            $scope.activeProject = project;
        }

    }
})();