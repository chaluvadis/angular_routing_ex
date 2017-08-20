(function(){
    'use strict';
    angular
    .module('myApp')
    .service('documentService', function () {
        this.getDocuments = function () {
            var documents = [];
            var date = new Date();
            for (var index = 0; index < 5; index++) {
                documents.push({
                    id: index + 1,
                    title: 'Document ' + (index + 1).toString(),
                    description: 'Document ' + (index + 1).toString(),
                    createdby: 'Document ' + (index + 1).toString(),
                    createdDate: date.toDateString()
                })
            }
            return documents;
        }
    });
})();
