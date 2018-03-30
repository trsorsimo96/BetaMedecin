(function() {
    'use strict';

    angular
        .module('betaMedecinApp')
        .controller('QuarterDialogController', QuarterDialogController);

    QuarterDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Quarter', 'Town', 'Hospital'];

    function QuarterDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Quarter, Town, Hospital) {
        var vm = this;

        vm.quarter = entity;
        vm.clear = clear;
        vm.save = save;
        vm.towns = Town.query();
        vm.hospitals = Hospital.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.quarter.id !== null) {
                Quarter.update(vm.quarter, onSaveSuccess, onSaveError);
            } else {
                Quarter.save(vm.quarter, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('betaMedecinApp:quarterUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
