'use strict';

describe('Controller Tests', function() {

    describe('SubCategory Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockSubCategory, MockCategory, MockHospital;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockSubCategory = jasmine.createSpy('MockSubCategory');
            MockCategory = jasmine.createSpy('MockCategory');
            MockHospital = jasmine.createSpy('MockHospital');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'SubCategory': MockSubCategory,
                'Category': MockCategory,
                'Hospital': MockHospital
            };
            createController = function() {
                $injector.get('$controller')("SubCategoryDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'betaMedecinApp:subCategoryUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
