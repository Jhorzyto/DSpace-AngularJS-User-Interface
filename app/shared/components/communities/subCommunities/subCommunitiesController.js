(function () {

    var module = angular.module("dspaceApplication");

    var subCommunitiesController = function ($scope, $routeParams, dspace) {

        var onsubCommunities = function (subCommunities) {
            $scope.subCommunities = subCommunities;
        };

        var onError = function (reason) {
            $scope.error = reason;
        }
        
        var communityId = $routeParams.communityid;
        
        dspace.getSubCommunities(communityId)
                .then(onsubCommunities, onError);
    };

    module.controller("subCommunitiesController", subCommunitiesController);

}());