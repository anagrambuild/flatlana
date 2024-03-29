"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlatlanaInstruction = void 0;
const flatbuffers = __importStar(require("flatbuffers"));
const instruction_type_js_1 = require("./instruction-type.js");
class FlatlanaInstruction {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsFlatlanaInstruction(bb, obj) {
        return (obj || new FlatlanaInstruction()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsFlatlanaInstruction(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new FlatlanaInstruction()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    ixType() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : instruction_type_js_1.InstructionType.Unknown;
    }
    mutate_ix_type(value) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        if (offset === 0) {
            return false;
        }
        this.bb.writeUint8(this.bb_pos + offset, value);
        return true;
    }
    deev1(index) {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
    }
    deev1Length() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    deev1Array() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    }
    dumv1(index) {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
    }
    dumv1Length() {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    dumv1Array() {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    }
    static startFlatlanaInstruction(builder) {
        builder.startObject(3);
    }
    static addIxType(builder, ixType) {
        builder.addFieldInt8(0, ixType, instruction_type_js_1.InstructionType.Unknown);
    }
    static addDeev1(builder, deev1Offset) {
        builder.addFieldOffset(1, deev1Offset, 0);
    }
    static createDeev1Vector(builder, data) {
        builder.startVector(1, data.length, 1);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addInt8(data[i]);
        }
        return builder.endVector();
    }
    static startDeev1Vector(builder, numElems) {
        builder.startVector(1, numElems, 1);
    }
    static addDumv1(builder, dumv1Offset) {
        builder.addFieldOffset(2, dumv1Offset, 0);
    }
    static createDumv1Vector(builder, data) {
        builder.startVector(1, data.length, 1);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addInt8(data[i]);
        }
        return builder.endVector();
    }
    static startDumv1Vector(builder, numElems) {
        builder.startVector(1, numElems, 1);
    }
    static endFlatlanaInstruction(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static finishFlatlanaInstructionBuffer(builder, offset) {
        builder.finish(offset);
    }
    static finishSizePrefixedFlatlanaInstructionBuffer(builder, offset) {
        builder.finish(offset, undefined, true);
    }
    static createFlatlanaInstruction(builder, ixType, deev1Offset, dumv1Offset) {
        FlatlanaInstruction.startFlatlanaInstruction(builder);
        FlatlanaInstruction.addIxType(builder, ixType);
        FlatlanaInstruction.addDeev1(builder, deev1Offset);
        FlatlanaInstruction.addDumv1(builder, dumv1Offset);
        return FlatlanaInstruction.endFlatlanaInstruction(builder);
    }
}
exports.FlatlanaInstruction = FlatlanaInstruction;
