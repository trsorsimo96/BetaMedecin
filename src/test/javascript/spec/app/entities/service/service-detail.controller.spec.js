'use strict';

describe('Controller Tests', function() {

    describe('Service Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockService, MockHospital, MockMedecin;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockService = jasmine.createSpy('MockService');
            MockHospital = jasmine.createSpy('MockHospital');
            MockMedecin = jasmine.createSpy('MockMedecin');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Service': MockService,
                'Hospital': MockHospital,
                'Medecin': MockMedecin
            };
            createController = function() {
                $injector.get('$controller')("ServiceDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'betaMedecinApp:serviceUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
