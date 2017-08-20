(function(){
    'use strict';
    angular
    .module('myApp')
    .service('assignmentService', function () {
        this.getAssignments = function () {
            var assignments = [];
            var date = new Date();
            for (var index = 0; index < 5; index++) {
                assignments.push({
                    id: index + 1,
                    title: 'Assignment ' + (index + 1).toString(),
                    description: 'Assignment ' + (index + 1).toString(),
                    createdby: 'Assignment ' + (index + 1).toString(),
                    createdDate: date.toDateString()
                })
            }
            return assignments;
        }
    });
})();
