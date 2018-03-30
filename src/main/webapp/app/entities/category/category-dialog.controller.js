(function() {
    'use strict';

    angular
        .module('betaMedecinApp')
        .controller('CategoryDialogController', CategoryDialogController);

    CategoryDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'Category', 'SubCategory'];

    function CategoryDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, Category, SubCategory) {
        var vm = this;

        vm.category = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.subcategories = SubCategory.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.category.id !== null) {
                Category.update(vm.category, onSaveSuccess, onSaveError);
            } else {
                Category.save(vm.category, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('betaMedecinApp:categoryUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setImage = function ($file, category) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        category.image = base64Data;
                        category.imageContentType = $file.type;
                    });
                });
            }
        };

    }
})();
