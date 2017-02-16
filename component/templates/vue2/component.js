;(function() {
    "use strict";

    Vue.component('<%= name %>', {
        data() {
            return {
                msg: 'yo!'
            }
        },
        template: `
            <div>
              <h1>{{msg}}</h1>
            </div>
        `,
        methods() {
            update() {

            },
            remove() {

            },
            save() {

            }
        }
    });
}());
