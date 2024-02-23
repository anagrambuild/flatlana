import * as flatbuffers from 'flatbuffers';
export declare class TweedleDeeV1 {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TweedleDeeV1;
    static getRootAsTweedleDeeV1(bb: flatbuffers.ByteBuffer, obj?: TweedleDeeV1): TweedleDeeV1;
    static getSizePrefixedRootAsTweedleDeeV1(bb: flatbuffers.ByteBuffer, obj?: TweedleDeeV1): TweedleDeeV1;
    theString(): string | null;
    theString(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    theInt(): number;
    mutate_the_int(value: number): boolean;
    static startTweedleDeeV1(builder: flatbuffers.Builder): void;
    static addTheString(builder: flatbuffers.Builder, theStringOffset: flatbuffers.Offset): void;
    static addTheInt(builder: flatbuffers.Builder, theInt: number): void;
    static endTweedleDeeV1(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTweedleDeeV1Buffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTweedleDeeV1Buffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTweedleDeeV1(builder: flatbuffers.Builder, theStringOffset: flatbuffers.Offset, theInt: number): flatbuffers.Offset;
}
