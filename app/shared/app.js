(function () {
    var app = angular.module("dspaceApplication", ["ngRoute"]);
    app.value("dspaceUrl", "https://demo.dspace.org");
    
    app.config(function ($routeProvider) {
        $routeProvider
                .when("/communities", {
                    templateUrl: "app/shared/components/communities/communities.html",
                    controller: "communitiesController"
                })
                .when("/community/:communityid", {
                    templateUrl: "app/shared/components/communities/community/community.html",
                    controller: "communityController"
                })
                .when("/collection/:collectionid", {
                    templateUrl: "app/shared/components/collections/collection/collection.html",
                    controller: "collectionController"
                })
                .when("/item/:itemid", {
                    templateUrl: "app/shared/components/items/item/item.html",
                    controller: "itemController"
                })
                .otherwise({redirectTo:"/communities"});
    })

}())