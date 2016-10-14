'use strict';

describe('Controller: VaibhaviCtrl', function () {

  // load the controller's module
  beforeEach(module('yoeManAppApp'));

  var VaibhaviCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VaibhaviCtrl = $controller('VaibhaviCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VaibhaviCtrl.awesomeThings.length).toBe(3);
  });
});
