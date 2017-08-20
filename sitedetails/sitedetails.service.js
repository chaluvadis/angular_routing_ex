(function(){
    'use strict';
    angular
    .module('myApp')
    .service('siteService', function () {
        this.getSites = function () {
            var sites = [];
            var date = new Date();
            for (var index = 0; index < 5; index++) {
                sites.push({
                    id: index + 1,
                    title: 'Site ' + (index + 1).toString(),
                    description: 'Site ' + (index + 1).toString(),
                    createdby: 'Site ' + (index + 1).toString(),
                    createdDate: date.toDateString()
                })
            }
            return sites;
        }
    });
})();
