;(function() {
    "use strict";

    Vue.component('<%= name %>', {
        data() {
            return {
                msg: 'yo!'
            }
        },
        template: `
            <h1>{{msg}}</h1>
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