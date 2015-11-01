(function () {

    var module = angular.module("dspaceApplication");

    var collectionsController = function ($scope, $routeParams, dspace) {

        var onCollections = function (collections) {
            $scope.collections = collections;
        };

        var onError = function (reason) {
            $scope.error = reason;
        }
        
        var communityId = $routeParams.communityid;
        
        dspace.getCollections(communityId)
                .then(onCollections, onError);
    };

    module.controller("collectionsController", collectionsController);

}());