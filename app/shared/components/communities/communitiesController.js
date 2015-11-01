(function () {

    var module = angular.module("dspaceApplication");

    var communitiesController = function ($scope, dspace) {

        var onCommunities = function (communities) {
            $scope.communities = communities;
        };

        var onError = function (reason) {
            $scope.error = reason;
        }
        dspace.getCommunities()
                .then(onCommunities, onError);
    };

    module.controller("communitiesController", communitiesController);

}());