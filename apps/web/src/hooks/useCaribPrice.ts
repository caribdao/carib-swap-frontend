import { ChainId } from '@pancakeswap/chains'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import { chainlinkOracleCAKE } from '@pancakeswap/prediction'
import BigNumber from 'bignumber.js'
import { chainlinkOracleABI } from 'config/abi/chainlinkOracle'
import { publicClient } from 'utils/wagmi'
import { formatUnits } from 'viem'
import { FAST_INTERVAL } from 'config/constants'
import { useQuery } from '@tanstack/react-query'
import { CARIB_PRICE_DEXSCREENER_API_URL } from 'config/constants/endpoints'

// for migration to bignumber.js to avoid breaking changes
export const useCaribPrice = ({ enabled = true } = {}) => {
  const { data } = useQuery<BigNumber, Error>({
    queryKey: ['caribPrice'],
    queryFn: async () => new BigNumber(await getCaribPriceDs()),
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


// Define the function to fetch and return the priceUsd as a BigNumber
export const getCaribPriceDs = async () => {
  try {
    const response = await fetch(CARIB_PRICE_DEXSCREENER_API_URL);
    if (!response.ok) {
      return '\xa0';
    }
    const data = await response.json();

    // Extract the priceUsd from the API response
    const priceUsd = data?.pair?.priceUsd;

    // Convert priceUsd to a BigNumber and return it
    return priceUsd;
  } catch (error) {
    console.error('Failed to fetch priceUsd:', error);

    return '0'; // Return a BigNumber with value 0 in case of error
  }
};
