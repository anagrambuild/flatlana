import { Cluster, LuzidSdk } from '@luzid/sdk'
import {
  appendTransactionInstruction,
  createTransaction,
  signTransaction,
  lamports,
  setTransactionFeePayer,
  getBase64EncodedWireTransaction,
  setTransactionLifetimeUsingBlockhash,
  createSolanaRpcSubscriptions,
  createDefaultTransactionSender,
  createSolanaRpc, generateKeyPair, createDefaultRpcTransport, address, getAddressFromPublicKey, createDefaultAirdropRequester, signature, getSignatureFromTransaction
} from '@solana/web3.js';
import { PROG, FlatlanaProgram } from "../src/index";
import { randomBytes } from 'crypto';
import { pipe } from '@solana/functional';
import { createDefaultRpcSubscriptionsTransport } from '@solana/web3.js';

describe('Flatlata', () => {
  it('should create valid TweedleDees', async () => {
    const keyPair = await generateKeyPair();
    const tsp = createDefaultRpcTransport({ url: Cluster.Development.apiUrl })
    const ssp = createDefaultRpcSubscriptionsTransport({
      url: Cluster.Development.apiUrl.replace('http', 'ws').replace("8899", "8900")
    })
    const api = createSolanaRpc({ transport: tsp });
    const sub = createSolanaRpcSubscriptions({ transport: ssp })
    const pub = await getAddressFromPublicKey(keyPair.publicKey);
    const airdrop = createDefaultAirdropRequester({
      rpc: api,
      rpcSubscriptions: sub
    })
    await airdrop({
      commitment: "confirmed",
      lamports: lamports(1000000000n),
      recipientAddress: pub
    })
    const result = await FlatlanaProgram.Dee(
      {
        deeString: "ffddd818c78b130ba84aacd1cc69e075e40053c4ca14f1b0272bf196c204d2d0",
        deeInt: 100,
        deePayer: pub
      }
    )
    const s = createDefaultTransactionSender({
      rpc: api,
      rpcSubscriptions: sub
    }) 
    const ctx = await api.getLatestBlockhash().send()
    expect(() => {
    const transaction = pipe(
      createTransaction({ version: 0 }),
      tx => setTransactionFeePayer(pub, tx),
      tx => setTransactionLifetimeUsingBlockhash(ctx.value, tx),
      tx => appendTransactionInstruction(result, tx),
      async tx => signTransaction([keyPair], tx),
      async tx => s(await tx, { commitment: "confirmed" })
    );
    }).not.toThrow()
  })
})
