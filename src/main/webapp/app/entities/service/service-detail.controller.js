(function() {
    'use strict';

    angular
        .module('betaMedecinApp')
        .controller('ServiceDetailController', ServiceDetailController);

    ServiceDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'Service', 'Hospital', 'Medecin'];

    function ServiceDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, Service, Hospital, Medecin) {
        var vm = this;

        vm.service = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('betaMedecinApp:serviceUpdate', function(event, result) {
            vm.service = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
