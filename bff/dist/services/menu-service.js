"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const normalizeResponse = (originalObject) => {
    if (originalObject instanceof Array) {
        const sortedArray = sortByDisplayOrder(originalObject);
        return sortedArray.map((value) => {
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
const sortByDisplayOrder = (originalObject) => {
    let sortedArray = originalObject;
    if (originalObject.length > 0 && originalObject[0].hasOwnProperty("DisplayOrder")) {
        sortedArray = [...originalObject].sort((a, b) => a.DisplayOrder - b.DisplayOrder);
    }
    return sortedArray;
};
const toCamelCase = (originalObject) => {
    let normalisedResponse = {};
    let origKey;
    let newKey;
    let value;
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
const menuService = {
    normalizeResponse
};
exports.default = menuService;
