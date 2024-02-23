import * as flatbuffers from 'flatbuffers';
import { InstructionType } from './instruction-type.js';
export declare class FlatlanaInstruction {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FlatlanaInstruction;
    static getRootAsFlatlanaInstruction(bb: flatbuffers.ByteBuffer, obj?: FlatlanaInstruction): FlatlanaInstruction;
    static getSizePrefixedRootAsFlatlanaInstruction(bb: flatbuffers.ByteBuffer, obj?: FlatlanaInstruction): FlatlanaInstruction;
    ixType(): InstructionType;
    mutate_ix_type(value: InstructionType): boolean;
    deev1(index: number): number | null;
    deev1Length(): number;
    deev1Array(): Uint8Array | null;
    dumv1(index: number): number | null;
    dumv1Length(): number;
    dumv1Array(): Uint8Array | null;
    static startFlatlanaInstruction(builder: flatbuffers.Builder): void;
    static addIxType(builder: flatbuffers.Builder, ixType: InstructionType): void;
    static addDeev1(builder: flatbuffers.Builder, deev1Offset: flatbuffers.Offset): void;
    static createDeev1Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDeev1Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addDumv1(builder: flatbuffers.Builder, dumv1Offset: flatbuffers.Offset): void;
    static createDumv1Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDumv1Vector(builder: flatbuffers.Builder, numElems: number): void;
    static endFlatlanaInstruction(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishFlatlanaInstructionBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedFlatlanaInstructionBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createFlatlanaInstruction(builder: flatbuffers.Builder, ixType: InstructionType, deev1Offset: flatbuffers.Offset, dumv1Offset: flatbuffers.Offset): flatbuffers.Offset;
}
