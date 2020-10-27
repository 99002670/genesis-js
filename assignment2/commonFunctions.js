/* Include this file in any HTML file where you wan't to use these functions*/

// Check if the given value is number or not
const getNumber = function (val) {
    if (isNaN(val)) {
        return 0;
    } else {
        return parseFloat(val);
    }
};

const $get = function (id) {
    return document.getElementById(id);
};

const addFunc = function (v1, v2) {
    return getNumber(v1) + getNumber(v2);
};

const subFunc = function (v1, v2) {
    return v1 - v2;
};

const mulFunc = function (v1, v2) {
    return v1 * v2;
};

const divFunc = function (v1, v2) {
    return v1 / v2;
};
