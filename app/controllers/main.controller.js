(function() {
    'use strict';

    angular
        .module('trippelApp')
        .controller('mainController', mainController);

    function mainController($scope) { 

    	$scope.activeProject;
        $scope.show = false;

        $scope.infofilm = {
            title: "Om medieteknik",
            description: "Informationsfilm om programmet.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan."
        };

    	$scope.projects = [
        {
    		title: "POLYGON",
    		description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#3E4F5B",
            year: 3
        },
        {
            title: "MR.CARROT",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#3BC0C3",
            year: 2
        },
        {
            title: "WEATHER",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#B0B6BA",
            year: 2

        }, 
        {
            title: "MOTE",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#F16161",
            year: 2
        }, 
        {
            title: "TRAIN",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#F0F0F1",
            year: 1
        },
        {
            title: "X",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#F16161",
            year: 4
        },
        {
            title: "ANSIKTET",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#B0B6BA",
            year: 4
        },
        {
            title: "JONKEN",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#B0B6BA",
            year: 1
        },
        {
            title: "PUTTE",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#F0F0F1",
            year: 5
        }, 
        {
            title: "MOTE",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#F16161",
            year: 5
        }, 
        {
            title: "TRAIN",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#F0F0F1",
            year: 2
        },
        {
            title: "X",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#F16161",
            year: 5
        },
        {
            title: "POLYGON",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#3E4F5B",
            year: 3
        },
        {
            title: "MR.CARROT",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#3BC0C3",
            year: 1
        },
        {
            title: "WEATHER",
            description: "Nulla semper, metus vel consequat posuere, neque nisi molestie quam, eu rhoncus nibh ex sed eros. Ut condimentum nec risus nec interdum. Aenean eget lainia metus. In interdum mi eu nisi egestas, nec pulvinar felis accumsan. Quisque sodales luctus pellentesque. Etiam vulputate id sapien sed ultricies. Nulla ac lobortis libero. Suspendisse nec placerat eros, sed commodo lorem. Aliquam sem ante, elementum ac quam sed, condimentum bibendum dolor. Pellentesque imperdiet arcu ut orci vestibulum pretium. Nam maximus sem eget dolor eleifend condimentum. Quisque tempus eget arcu ac sagittis. Curabitur ac nibh imperdiet, hendrerit arcu non, mattis mauris. Phasellus a lectus sit amet nisl pulvinar sollicitudin. Nam sit amet augue sed nibh laoreet faucibus in et dolor. Aenean ex turpis, volutpat eu nibh in, semper sagittis dui.",
            subtitle: "Cool stufff here yäyäy, najjan i bajjan.",
            color: "#B0B6BA",
            year: 2

        },];

       

        $scope.changeView = function(project) {

            $scope.show = !$scope.show;
            $scope.activeProject = project;
        }

    }
})();