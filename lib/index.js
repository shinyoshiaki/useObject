"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useObject(obj) {
    var _a = react_1.useState(__assign({}, obj)), state = _a[0], setObj = _a[1];
    var setState = function (next) {
        setObj(function (prev) {
            return __assign({}, prev, next);
        });
    };
    var prevState = function () {
        var result;
        setObj(function (prev) {
            result = prev;
            return prev;
        });
        return result;
    };
    return { state: state, setState: setState, prevState: prevState };
}
exports.default = useObject;
function alphaUseObject2(obj) {
    var store = {};
    Object.keys(obj).forEach(function (key) {
        store[key] = react_1.useState(__assign({}, obj[key]));
    });
    var setState = function (next) {
        Object.keys(next).forEach(function (key) {
            store[key][1](next[key]);
        });
    };
    var state = {};
    Object.keys(store).forEach(function (key) {
        state[key] = store[key][0];
    });
    return { state: state, setState: setState };
}
exports.alphaUseObject2 = alphaUseObject2;
//# sourceMappingURL=index.js.map