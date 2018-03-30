(function() {
    'use strict';

    angular
        .module('betaMedecinApp')
        .controller('TownDetailController', TownDetailController);

    TownDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'Town', 'Quarter'];

    function TownDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, Town, Quarter) {
        var vm = this;

        vm.town = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('betaMedecinApp:townUpdate', function(event, result) {
            vm.town = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
