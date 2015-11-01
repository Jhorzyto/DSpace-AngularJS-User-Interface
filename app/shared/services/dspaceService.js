var module = angular.module("dspaceApplication");

(function () {
    var dspace = function ($http, dspaceUrl) {
        
        var getCommunities = function () {
            return $http.get(dspaceUrl + "/rest/communities/top-communities")
                    .then(function (response) {
                        return response.data;
                    });
        };

        var getCommunity = function (communityId) {
            return $http.get(dspaceUrl + "/rest/communities/" + communityId)
                    .then(function (response) {
                        return response.data;
                    });
        };
        
        var getCollections = function (communityId) {
            return $http.get(dspaceUrl + "/rest/communities/" + communityId + "/collections")
                    .then(function (response) {
                        return response.data;
                    });
        };

        var getSubCommunities = function (communityId) {
            return $http.get(dspaceUrl + "/rest/communities/" + communityId + "/communities")
                    .then(function (response) {
                        return response.data;
                    });
        };
        
        var getCollection = function (collectionId) {
            return $http.get(dspaceUrl + "/rest/collections/" + collectionId + "?expand=parentCommunity")
                    .then(function (response) {
                        return response.data;
                    });
        };

        var getItems = function (collectionId) {
            return $http.get(dspaceUrl + "/rest/collections/" + collectionId + "/items")
                    .then(function (response) {
                        return response.data;
                    });
        };
        
        var getItem = function (itemId) {
            return $http.get(dspaceUrl + "/rest/items/" + itemId + "?expand=metadata,parentCollection,bitstreams")
                    .then(function (response) {
                        return response.data;
                    });
        };

        return {
            getCommunities: getCommunities,
            getCommunity: getCommunity,
            getSubCommunities: getSubCommunities,
            getCollections: getCollections,
            getCollection: getCollection,
            getItems: getItems,
            getItem: getItem
        };
    };

    module.factory("dspace", dspace);

}());
