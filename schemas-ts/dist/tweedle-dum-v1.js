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
exports.TweedleDumV1 = void 0;
const flatbuffers = __importStar(require("flatbuffers"));
class TweedleDumV1 {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsTweedleDumV1(bb, obj) {
        return (obj || new TweedleDumV1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsTweedleDumV1(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new TweedleDumV1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    theSlice(index) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
    }
    theSliceLength() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    theSliceArray() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    }
    theBool() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    mutate_the_bool(value) {
        const offset = this.bb.__offset(this.bb_pos, 6);
        if (offset === 0) {
            return false;
        }
        this.bb.writeInt8(this.bb_pos + offset, +value);
        return true;
    }
    static startTweedleDumV1(builder) {
        builder.startObject(2);
    }
    static addTheSlice(builder, theSliceOffset) {
        builder.addFieldOffset(0, theSliceOffset, 0);
    }
    static createTheSliceVector(builder, data) {
        builder.startVector(1, data.length, 1);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addInt8(data[i]);
        }
        return builder.endVector();
    }
    static startTheSliceVector(builder, numElems) {
        builder.startVector(1, numElems, 1);
    }
    static addTheBool(builder, theBool) {
        builder.addFieldInt8(1, +theBool, +false);
    }
    static endTweedleDumV1(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static finishTweedleDumV1Buffer(builder, offset) {
        builder.finish(offset);
    }
    static finishSizePrefixedTweedleDumV1Buffer(builder, offset) {
        builder.finish(offset, undefined, true);
    }
    static createTweedleDumV1(builder, theSliceOffset, theBool) {
        TweedleDumV1.startTweedleDumV1(builder);
        TweedleDumV1.addTheSlice(builder, theSliceOffset);
        TweedleDumV1.addTheBool(builder, theBool);
        return TweedleDumV1.endTweedleDumV1(builder);
    }
}
exports.TweedleDumV1 = TweedleDumV1;
