(function(){
    'use strict';
    angular
    .module('myApp')
    .service('contactService', function () {
        this.getContacts = function () {
            var contacts = [];
            var date = new Date();
            for (var index = 0; index < 5; index++) {
                contacts.push({
                    id: index + 1,
                    title: 'Contact ' + (index + 1).toString(),
                    description: 'Contact ' + (index + 1).toString(),
                    createdby: 'Contact ' + (index + 1).toString(),
                    createdDate: date.toDateString()
                })
            }
            return contacts;
        }
    });
})();
