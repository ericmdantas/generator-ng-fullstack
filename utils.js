"use strict";

exports.capitalizeFirst = function(str)
{
    if (!str)
        return '';

    return str.charAt(0).toUpperCase() + str.slice(1);
}
