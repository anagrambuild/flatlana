// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class TweedleDeeV1 {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):TweedleDeeV1 {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTweedleDeeV1(bb:flatbuffers.ByteBuffer, obj?:TweedleDeeV1):TweedleDeeV1 {
  return (obj || new TweedleDeeV1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTweedleDeeV1(bb:flatbuffers.ByteBuffer, obj?:TweedleDeeV1):TweedleDeeV1 {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TweedleDeeV1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

theString():string|null
theString(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
theString(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

theInt():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

mutate_the_int(value:number):boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt32(this.bb_pos + offset, value);
  return true;
}

static startTweedleDeeV1(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addTheString(builder:flatbuffers.Builder, theStringOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, theStringOffset, 0);
}

static addTheInt(builder:flatbuffers.Builder, theInt:number) {
  builder.addFieldInt32(1, theInt, 0);
}

static endTweedleDeeV1(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishTweedleDeeV1Buffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
}

static finishSizePrefixedTweedleDeeV1Buffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
}

static createTweedleDeeV1(builder:flatbuffers.Builder, theStringOffset:flatbuffers.Offset, theInt:number):flatbuffers.Offset {
  TweedleDeeV1.startTweedleDeeV1(builder);
  TweedleDeeV1.addTheString(builder, theStringOffset);
  TweedleDeeV1.addTheInt(builder, theInt);
  return TweedleDeeV1.endTweedleDeeV1(builder);
}
}
