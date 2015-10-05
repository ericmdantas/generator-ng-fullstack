"use strict";

exports.getFeature = (opt) => {
    return opt && opt.feature ? opt.feature + '/' : '';
}
