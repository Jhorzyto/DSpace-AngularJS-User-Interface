(function () {

    var module = angular.module("dspaceApplication");

    var itemsController = function ($scope, $routeParams, dspace) {

        var onItems = function (items) {
            $scope.items = items;
        };

        var onError = function (reason) {
            $scope.error = reason;
        }
        
        var collectionId = $routeParams.collectionid;
        
        dspace.getItems(collectionId)
                .then(onItems, onError);
    };

    module.controller("itemsController", itemsController);

}());