import { TweedleDeeV1 } from './tweedle-dee-v1.js';
import { TweedleDumV1 } from './tweedle-dum-v1.js';
export declare enum FlatlanaInstructionData {
    NONE = 0,
    DeeV1 = 1,
    DumV1 = 2
}
export declare function unionToFlatlanaInstructionData(type: FlatlanaInstructionData, accessor: (obj: TweedleDeeV1 | TweedleDumV1) => TweedleDeeV1 | TweedleDumV1 | null): TweedleDeeV1 | TweedleDumV1 | null;
export declare function unionListToFlatlanaInstructionData(type: FlatlanaInstructionData, accessor: (index: number, obj: TweedleDeeV1 | TweedleDumV1) => TweedleDeeV1 | TweedleDumV1 | null, index: number): TweedleDeeV1 | TweedleDumV1 | null;
