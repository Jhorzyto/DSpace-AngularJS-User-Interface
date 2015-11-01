(function () {

    var module = angular.module("dspaceApplication");

    var collectionController = function ($scope, $routeParams, $sce, dspace) {

        var onCollection = function (collection) {
            $scope.parentCommunityId = collection.parentCommunity.id;
            $scope.parentCommunityName = collection.parentCommunity.name;
            $scope.sidebarText = $sce.trustAsHtml(collection.sidebarText);
            $scope.name = collection.name;
            $scope.description = $sce.trustAsHtml(collection.introductoryText);
            $scope.copyrightText = $sce.trustAsHtml(collection.copyrightText);
        };

        var onError = function (reason) {
            $scope.error = reason;
        }
        
        var collectionId = $routeParams.collectionid;
                
        dspace.getCollection(collectionId)
                .then(onCollection, onError);
    };

    module.controller("collectionController", collectionController);

}());