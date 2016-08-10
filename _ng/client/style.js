const knownPaths = require('../utils/known_paths');

exports.copyStylePreprocessor = function(gen, path) {
  let _pathTemplate = path || '';
  let _ext = '';

  switch(gen.stylePreprocessor) {
    case "less":
      _ext = ".less";
      break;

    case "sass":
      _ext = ".scss";
      break;

    default:
      _ext = ".css";
  }

  gen.template(`${_pathTemplate}style${_ext}`,
               `${knownPaths.PATH_CLIENT_FEATURES + gen.options.feature}/styles/${gen.name}${_ext}`
  );
};
