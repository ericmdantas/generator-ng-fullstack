"use strict";

exports.directory = function(gen, paths, opts) {
  if (!gen) {
    throw new TypeError('Generator is not defined.');
  }

  if (!gen.template || (typeof gen.template !== "function")) {
    throw new TypeError('Template is not a valid method of the generator.');
  }

  paths.forEach((p) => {
    gen.template(p[0], p[1], opts);
  });
}
