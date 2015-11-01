exports.getFeature = (opt) => {
    return opt && opt.feature ? opt.feature + '/' : '';
}

exports.isServerOnly = (opt) => {
    return opt ? !!opt.serverOnly : false;
}

exports.isClientOnly = (opt) => {
    return opt ? !!opt.clientOnly : false;
}
