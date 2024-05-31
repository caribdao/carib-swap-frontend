import { ChainId } from '@pancakeswap/chains'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
// import { chainlinkOracleCAKE } from '@pancakeswap/prediction'
import { getTokenPrice } from '../../../../packages/smart-router/evm/v3-router/utils/pool'
import BigNumber from 'bignumber.js'
import { chainlinkOracleABI } from 'config/abi/chainlinkOracle'
import { publicClient } from 'utils/wagmi'
import { formatUnits } from 'viem'
import { FAST_INTERVAL } from 'config/constants'
import { useQuery } from '@tanstack/react-query'

// for migration to bignumber.js to avoid breaking changes
export const useCaribPrice = ({ enabled = true } = {}) => {
  const { data } = useQuery<BigNumber, Error>({
    queryKey: ['caribPrice'],
    queryFn: async () => new BigNumber(await getCaribPriceFromOracle()),
    staleTime: FAST_INTERVAL,
    refetchInterval: FAST_INTERVAL,
    enabled,
  })
  return data ?? BIG_ZERO
}

export const getCaribPriceFromOracle = async () => {
  const data = await publicClient({ chainId: ChainId.BSC }).readContract({
    abi: chainlinkOracleABI,
    address: '0x9f8b8fe01b26957cf3dcd6fbd3675053ba2c02c8',
    functionName: 'latestAnswer',
  }) 

  return formatUnits(data, 8)
}
