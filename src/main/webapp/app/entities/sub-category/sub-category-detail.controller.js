(function() {
    'use strict';

    angular
        .module('betaMedecinApp')
        .controller('SubCategoryDetailController', SubCategoryDetailController);

    SubCategoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'SubCategory', 'Category', 'Hospital'];

    function SubCategoryDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, SubCategory, Category, Hospital) {
        var vm = this;

        vm.subCategory = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('betaMedecinApp:subCategoryUpdate', function(event, result) {
            vm.subCategory = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
