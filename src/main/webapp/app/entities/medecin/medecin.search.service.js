(function() {
    'use strict';

    angular
        .module('betaMedecinApp')
        .factory('MedecinSearch', MedecinSearch);

    MedecinSearch.$inject = ['$resource'];

    function MedecinSearch($resource) {
        var resourceUrl =  'api/_search/medecins/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
