"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var normalizeResponse = function (originalObject) {
    if (originalObject instanceof Array) {
        var sortedArray = sortByDisplayOrder(originalObject);
        return sortedArray.map(function (value) {
            if (typeof value === "object") {
                value = normalizeResponse(value);
            }
            return value;
        });
    }
    else {
        return toCamelCase(originalObject);
    }
};
var sortByDisplayOrder = function (originalObject) {
    var sortedArray = originalObject;
    if (originalObject.length > 0 && originalObject[0].hasOwnProperty("DisplayOrder")) {
        sortedArray = __spreadArray([], originalObject, true).sort(function (a, b) { return a.DisplayOrder - b.DisplayOrder; });
    }
    return sortedArray;
};
var toCamelCase = function (originalObject) {
    var normalisedResponse = {};
    var origKey;
    var newKey;
    var value;
    for (origKey in originalObject) {
        if (originalObject.hasOwnProperty(origKey)) {
            newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString();
            value = originalObject[origKey];
            if (value instanceof Array || (value !== null && value.constructor === Object)) {
                value = normalizeResponse(value);
            }
            normalisedResponse[newKey] = value;
        }
    }
    return normalisedResponse;
};
var menuService = {
    normalizeResponse: normalizeResponse
};
exports["default"] = menuService;
