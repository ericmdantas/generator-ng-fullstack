"use strict";

exports.getFeature = function(opt)
{
    return opt && opt.feature ? opt.feature + '/' : '';
}
