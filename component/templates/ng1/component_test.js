'use strict';

describe('<%= name %>', () => {
  let $componentController;
  beforeEach(module('<%= appName %>'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should expose a `user` object', function() {
    var bindings = {user: {name: 'Boss'}};
    var ctrl = $componentController('meuComponent', null, bindings);

    expect(ctrl.user).toBeDefined();
    expect(ctrl.user.name).toBe('Boss');
  });
});
