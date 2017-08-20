(function () {
    'use strict';
    angular.module('myApp').controller('siteDetailsController', ['$scope', 'siteService',function ($scope,siteService) {
        $scope.name = "Site Details Controller";
        $scope.sites = siteService.getSites();
    }])
})();
