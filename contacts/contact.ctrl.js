(function () {
    'use strict';
    angular.module('myApp').controller('contactController', ['$scope', 'contactService', function ($scope, contactService) {
        $scope.name = "Contact Controller";
        $scope.contacts = contactService.getContacts();
    }])
})();
