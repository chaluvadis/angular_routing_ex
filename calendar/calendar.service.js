(function(){
    'use strict';
    angular
    .module('myApp')
    .service('calendarService', function () {
        this.getEvents = function () {
            var events = [];
            var date = new Date();
            for (var index = 0; index < 5; index++) {
                events.push({
                    id: index + 1,
                    title: 'Event ' + (index + 1).toString(),
                    description: 'Event ' + (index + 1).toString(),
                    createdby: 'Event ' + (index + 1).toString(),
                    createdDate: date.toDateString()
                })
            }
            return events;
        }
    });
})();
