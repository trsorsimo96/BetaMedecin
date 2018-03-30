(function() {
    'use strict';

    angular
        .module('betaMedecinApp')
        .controller('QuarterDetailController', QuarterDetailController);

    QuarterDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Quarter', 'Town', 'Hospital'];

    function QuarterDetailController($scope, $rootScope, $stateParams, previousState, entity, Quarter, Town, Hospital) {
        var vm = this;

        vm.quarter = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('betaMedecinApp:quarterUpdate', function(event, result) {
            vm.quarter = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
