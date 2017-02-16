;(function(ng) {
  "use strict";

  ng.module("<%= appName %>")
    .factory("Todo", [function() {
      const MIN_ACCEPTED_LENGTH = 5;
      
      class Todo {
        constructor(t) {
          this.todoMessage = null;
          ng.extend(this, t);
        }
        
        isValid() {
          let _isDefined = ng.isDefined(this.todoMessage);
          let _isString = ng.isString(this.todoMessage);
          let _isBigEnough = (_isDefined && _isString) ? this.todoMessage.length >= MIN_ACCEPTED_LENGTH : false;

          return _isDefined && _isString && _isBigEnough;
        }
      }
      
      return Todo;
    }]);
}(window.angular));
