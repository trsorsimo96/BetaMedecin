(function() {
    'use strict';

    angular
        .module('betaMedecinApp')
        .controller('ArrondissementDetailController', ArrondissementDetailController);

    ArrondissementDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Arrondissement', 'Department', 'Hospital'];

    function ArrondissementDetailController($scope, $rootScope, $stateParams, previousState, entity, Arrondissement, Department, Hospital) {
        var vm = this;

        vm.arrondissement = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('betaMedecinApp:arrondissementUpdate', function(event, result) {
            vm.arrondissement = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
