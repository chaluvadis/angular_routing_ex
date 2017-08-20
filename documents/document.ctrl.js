(function () {
    'use strict';
    angular.module('myApp').controller('documentController', ['$scope', 'documentService', function ($scope, documentService) {
        $scope.name = "Document Controller";
        $scope.documents = documentService.getDocuments();
    }])
})();
