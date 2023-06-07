import { BladeSigner } from '@bladelabs/blade-web3.js'
import { DAppMetadata } from '@hashgraph/hedera-wallet-connect'

export type BladeWallet = {
  authenticate: () => Promise<Response>
  logout: () => Promise<Response>
} & BladeSigner

export type BladeDAppMetadata = DAppMetadata
