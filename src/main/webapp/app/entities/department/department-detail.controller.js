(function() {
    'use strict';

    angular
        .module('betaMedecinApp')
        .controller('DepartmentDetailController', DepartmentDetailController);

    DepartmentDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Department', 'Region', 'Arrondissement'];

    function DepartmentDetailController($scope, $rootScope, $stateParams, previousState, entity, Department, Region, Arrondissement) {
        var vm = this;

        vm.department = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('betaMedecinApp:departmentUpdate', function(event, result) {
            vm.department = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
