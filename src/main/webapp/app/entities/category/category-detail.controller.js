(function() {
    'use strict';

    angular
        .module('betaMedecinApp')
        .controller('CategoryDetailController', CategoryDetailController);

    CategoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'Category', 'SubCategory'];

    function CategoryDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, Category, SubCategory) {
        var vm = this;

        vm.category = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('betaMedecinApp:categoryUpdate', function(event, result) {
            vm.category = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
