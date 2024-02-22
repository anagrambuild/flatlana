import * as flatbuffers from "flatbuffers"
import { AccountRole, Address, IInstruction, ReadonlyAccount, WritableAccount, address, getAddressEncoder, getProgramDerivedAddress } from "@solana/web3.js";
import { FlatlanaInstruction, TweedleDeeV1 } from "flatlana-types";
import { InstructionType } from "flatlana-types";
export const PROG = "fLatK5NbbRdgjLJ9vAJqUP9VWJZcomvqcbsrsLPLK2R";


export class FlatlanaProgram {
  static async Dee(params: {
    deePayer: Address,
    deeString: string,
    deeInt: number,
  }): Promise<IInstruction<
    Address,
    [
      WritableAccount,
      WritableAccount,
      ReadonlyAccount,
    ]
  >> {
    const {
      deePayer,
      deeString,
      deeInt,
    } = params;
    const deeIntInt = deeInt | 0;
    let builder = new flatbuffers.Builder(0);
    const str = builder.createString(deeString)
    TweedleDeeV1.startTweedleDeeV1(builder);
    TweedleDeeV1.addTheString(builder, str);
    TweedleDeeV1.addTheInt(builder, deeIntInt);
    const dee = TweedleDeeV1.endTweedleDeeV1(builder);
    builder.finish(dee)
    const deebuf = builder.asUint8Array();
    builder = new flatbuffers.Builder(0);
    const deev = FlatlanaInstruction.createDeev1Vector(builder, deebuf);
    FlatlanaInstruction.startFlatlanaInstruction(builder);
    FlatlanaInstruction.addDeev1(builder, deev);
    FlatlanaInstruction.addIxType(builder, InstructionType.DeeV1);
    const ci = FlatlanaInstruction.endFlatlanaInstruction(builder);
    builder.finish(ci);
    const buf = builder.asUint8Array();
    return {
      accounts: [
        {
          address: deePayer,
          role: AccountRole.WRITABLE,
        },
        {
          address: await flatlanaAddress(deePayer),
          role: AccountRole.WRITABLE,
        },
        {
          address: address("11111111111111111111111111111111"),
          role: AccountRole.READONLY,
        }
      ],
      programAddress: address(PROG),
      data: buf,
    }
  }
}

export async function flatlanaAddress(
  payer: Address,
): Promise<Address> {
  const addressEncoder = getAddressEncoder();
  const pd = await getProgramDerivedAddress({
    programAddress: address(PROG),
    seeds: [
      Buffer.from("flatlana", "utf-8"),
      addressEncoder.encode(payer)
    ]
  });
  return pd[0];
}