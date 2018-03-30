(function() {
    'use strict';

    angular
        .module('betaMedecinApp')
        .controller('RegionDetailController', RegionDetailController);

    RegionDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Region', 'Department'];

    function RegionDetailController($scope, $rootScope, $stateParams, previousState, entity, Region, Department) {
        var vm = this;

        vm.region = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('betaMedecinApp:regionUpdate', function(event, result) {
            vm.region = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
