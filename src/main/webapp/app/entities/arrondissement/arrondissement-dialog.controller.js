(function() {
    'use strict';

    angular
        .module('betaMedecinApp')
        .controller('ArrondissementDialogController', ArrondissementDialogController);

    ArrondissementDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Arrondissement', 'Department', 'Hospital'];

    function ArrondissementDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Arrondissement, Department, Hospital) {
        var vm = this;

        vm.arrondissement = entity;
        vm.clear = clear;
        vm.save = save;
        vm.departments = Department.query();
        vm.hospitals = Hospital.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.arrondissement.id !== null) {
                Arrondissement.update(vm.arrondissement, onSaveSuccess, onSaveError);
            } else {
                Arrondissement.save(vm.arrondissement, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('betaMedecinApp:arrondissementUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
