'use strict';

describe('Controller Tests', function() {

    describe('Arrondissement Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockArrondissement, MockDepartment, MockHospital;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockArrondissement = jasmine.createSpy('MockArrondissement');
            MockDepartment = jasmine.createSpy('MockDepartment');
            MockHospital = jasmine.createSpy('MockHospital');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Arrondissement': MockArrondissement,
                'Department': MockDepartment,
                'Hospital': MockHospital
            };
            createController = function() {
                $injector.get('$controller')("ArrondissementDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'betaMedecinApp:arrondissementUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
