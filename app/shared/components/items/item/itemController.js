(function () {

    var module = angular.module("dspaceApplication");

    var itemController = function ($scope, $routeParams, $sce, dspace) {

        var onItem= function (item) {
            $scope.parentCollectionId = item.parentCollection.id;
            $scope.parentCollectionName = item.parentCollection.name;
            $scope.name = item.name;
            $scope.metadatas = item.metadata;
            $scope.bitstreams = item.bitstreams;
        };

        var onError = function (reason) {
            $scope.error = reason;
        }
        
        var itemId = $routeParams.itemid;
                
        dspace.getItem(itemId)
                .then(onItem, onError);
    };

    module.controller("itemController", itemController);

}());