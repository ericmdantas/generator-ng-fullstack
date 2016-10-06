"use strict";

const fs = require('fs');

exports.createYoRc = function(obj, done) {
    fs.writeFile('.yo-rc.json', JSON.stringify(obj), done);
};