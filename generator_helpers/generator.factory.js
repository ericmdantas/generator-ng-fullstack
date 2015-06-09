"use strict";
var node_1 = require('node/node');
var go_1 = require('go/go');
var GeneratorFactory = (function () {
    function GeneratorFactory(info) {
        switch (info) {
            case "node": return new node_1.Node();
            case "go": return new go_1.Go();
        }
    }
    return GeneratorFactory;
})();
exports.GeneratorFactory = GeneratorFactory;
