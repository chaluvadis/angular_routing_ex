(function () {
    'use strict';
    angular.module('myApp').controller('assignmentController', ['$scope', 'assignmentService', function ($scope, assignmentService) {
        $scope.name = "Assignments";
        $scope.assignments = assignmentService.getAssignments();
    }])
})();
