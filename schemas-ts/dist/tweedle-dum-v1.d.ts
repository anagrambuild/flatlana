import * as flatbuffers from 'flatbuffers';
export declare class TweedleDumV1 {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TweedleDumV1;
    static getRootAsTweedleDumV1(bb: flatbuffers.ByteBuffer, obj?: TweedleDumV1): TweedleDumV1;
    static getSizePrefixedRootAsTweedleDumV1(bb: flatbuffers.ByteBuffer, obj?: TweedleDumV1): TweedleDumV1;
    theSlice(index: number): number | null;
    theSliceLength(): number;
    theSliceArray(): Uint8Array | null;
    theBool(): boolean;
    mutate_the_bool(value: boolean): boolean;
    static startTweedleDumV1(builder: flatbuffers.Builder): void;
    static addTheSlice(builder: flatbuffers.Builder, theSliceOffset: flatbuffers.Offset): void;
    static createTheSliceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTheSliceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTheBool(builder: flatbuffers.Builder, theBool: boolean): void;
    static endTweedleDumV1(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTweedleDumV1Buffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTweedleDumV1Buffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTweedleDumV1(builder: flatbuffers.Builder, theSliceOffset: flatbuffers.Offset, theBool: boolean): flatbuffers.Offset;
}
