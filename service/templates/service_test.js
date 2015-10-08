"use strict";

describe('<%= name %>Service', function() {
    var _<%= name %>Service;

    beforeEach(module('myAwesomeApp'));

    beforeEach(inject(function($injector) {
        _<%= name %>Service = $injector.get('<%= name %>Service');
    }));

    describe('doSomething', function() {
        it('should doSomething', function() {
            _<%= name %>Service.doSomething();
        })
    })
})
