import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'Duro',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0xeBa5f6AA262cE96178557656CE0061d7EfB10E83',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'Duro-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x1807b4e71b661E283c51F43852B8B7486b692599',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF4fC6F191a647846b26A0860DCb537616ACE7419',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'Duro-BUSD LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x5cd0dF3f9b440Cf83aC47A551ca70E862091F869',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'FORTE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0BC1B96424aE2C5Fb045D80F781FFf6F8d50a878',
    },
    token: serializedTokens.forte,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'FORTE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x9Cb00177B6E7EA3702D780E6b0c96cc8E559b4d9',
    },
    token: serializedTokens.forte,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 6,
    lpSymbol: 'BTCn-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xe36BDE70cB4Dc96E4c5727FB3289E1d834EbbA50',
    },
    token: serializedTokens.btcn,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 7,
    lpSymbol: 'BTCn-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDf6324D888A37f48637a58cf803151dB2632404C',
    },
    token: serializedTokens.btcn,
    quoteToken: serializedTokens.bnb,
  },
  {
    pid: 8,
    lpSymbol: 'FORTE-Duro LP',
    lpAddresses: {
      97: '',
      56: '0x1BD798b724d6FAcBA8BF49E1a9934b0d97703B83',
    },
    token: serializedTokens.forte,
    quoteToken: serializedTokens.cake,
  }
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
]

export default farms
