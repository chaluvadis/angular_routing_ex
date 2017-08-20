(function(){
'use strict';
angular.module('myApp', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/assignment', {
                templateUrl: './assignment/assignment.html',
                controller: 'assignmentController'
            })
            .when('/calendar', {
                templateUrl: './calendar/calendar.html',
                controller: 'calendarController'
            })
            .when('/contact', {
                templateUrl: './contacts/contact.html',
                controller: 'contactController'
            })
            .when('/document', {
                templateUrl: './documents/document.html',
                controller: 'documentController'
            })
            .when('/sitedetail', {
                templateUrl: './sitedetails/sitedetails.html',
                controller: 'siteDetailsController'
            })
            .otherwise({
                redirectTo: '/assignment'
            });
        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });
})();