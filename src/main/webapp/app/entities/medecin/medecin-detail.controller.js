(function() {
    'use strict';

    angular
        .module('betaMedecinApp')
        .controller('MedecinDetailController', MedecinDetailController);

    MedecinDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Medecin', 'Service'];

    function MedecinDetailController($scope, $rootScope, $stateParams, previousState, entity, Medecin, Service) {
        var vm = this;

        vm.medecin = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('betaMedecinApp:medecinUpdate', function(event, result) {
            vm.medecin = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
