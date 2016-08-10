const knownPaths = require('../utils/known_paths');

function _getExt(gen) {
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

  return _ext;
}

exports.copyStyleForMainGenerator = function(gen, dest) {
  let _ext = _getExt(gen);

  gen.template('client/_styles/todo' + _ext, dest + _ext);
};

exports.copyStyleForSubGenerator = function(gen, path) {
  let _pathTemplate = path || '';
  let _ext = _getExt(gen);

  gen.template(`${_pathTemplate}style${_ext}`,
               `${knownPaths.PATH_CLIENT_FEATURES + gen.options.feature}/styles/${gen.name}${_ext}`
  );
};
