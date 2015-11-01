(function () {

    var module = angular.module("dspaceApplication");

    var communityController = function ($scope, $routeParams, $sce, dspace) {

        var onCommunity = function (community) {
            $scope.sidebarText = $sce.trustAsHtml(community.sidebarText);
            $scope.name = community.name;
            $scope.description = $sce.trustAsHtml(community.introductoryText);
            $scope.copyrightText = $sce.trustAsHtml(community.copyrightText);
            $scope.subCommunities = community.subCommunities;
            $scope.collections = community.collections;
        };

        var onError = function (reason) {
            $scope.error = reason;
        }
        
        var communityId = $routeParams.communityid;
                
        dspace.getCommunity(communityId)
                .then(onCommunity, onError);
    };

    module.controller("communityController", communityController);

}());