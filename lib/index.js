"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useObject(obj) {
    var _a = react_1.useState(Object.assign({}, obj)), state = _a[0], setObj = _a[1];
    var setState = function (next) {
        setObj(Object.assign({}, state, next));
    };
    return { state: state, setState: setState };
}
exports.default = useObject;
//# sourceMappingURL=index.js.map