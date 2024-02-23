"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.unionListToFlatlanaInstructionData = exports.unionToFlatlanaInstructionData = exports.FlatlanaInstructionData = void 0;
const tweedle_dee_v1_js_1 = require("./tweedle-dee-v1.js");
const tweedle_dum_v1_js_1 = require("./tweedle-dum-v1.js");
var FlatlanaInstructionData;
(function (FlatlanaInstructionData) {
    FlatlanaInstructionData[FlatlanaInstructionData["NONE"] = 0] = "NONE";
    FlatlanaInstructionData[FlatlanaInstructionData["DeeV1"] = 1] = "DeeV1";
    FlatlanaInstructionData[FlatlanaInstructionData["DumV1"] = 2] = "DumV1";
})(FlatlanaInstructionData || (exports.FlatlanaInstructionData = FlatlanaInstructionData = {}));
function unionToFlatlanaInstructionData(type, accessor) {
    switch (FlatlanaInstructionData[type]) {
        case 'NONE': return null;
        case 'DeeV1': return accessor(new tweedle_dee_v1_js_1.TweedleDeeV1());
        case 'DumV1': return accessor(new tweedle_dum_v1_js_1.TweedleDumV1());
        default: return null;
    }
}
exports.unionToFlatlanaInstructionData = unionToFlatlanaInstructionData;
function unionListToFlatlanaInstructionData(type, accessor, index) {
    switch (FlatlanaInstructionData[type]) {
        case 'NONE': return null;
        case 'DeeV1': return accessor(index, new tweedle_dee_v1_js_1.TweedleDeeV1());
        case 'DumV1': return accessor(index, new tweedle_dum_v1_js_1.TweedleDumV1());
        default: return null;
    }
}
exports.unionListToFlatlanaInstructionData = unionListToFlatlanaInstructionData;
