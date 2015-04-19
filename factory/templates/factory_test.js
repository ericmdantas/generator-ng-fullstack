"use strict";

describe('<%= name %>', function () {
    var _<%= name % >;

    beforeEach(module('myAwesomeApp'));

    beforeEach(inject(function ($injector) {
        _<%= name %> = $injector.get('<%= name %>');
    }));
});
