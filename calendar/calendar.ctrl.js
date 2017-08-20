(function () {
    'use strict';
    angular.module('myApp').controller('calendarController', ['$scope', 'calendarService', function ($scope, calendarService) {
        $scope.name = "Calendar Controller";
        $scope.events = calendarService.getEvents();
    }])
})();
