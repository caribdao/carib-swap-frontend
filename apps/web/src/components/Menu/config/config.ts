import { SUPPORTED_CHAIN_IDS as IFO_SUPPORTED_CHAINS } from '@pancakeswap/ifos'
import { ContextApi } from '@pancakeswap/localization'
import { SUPPORTED_CHAIN_IDS as POOL_SUPPORTED_CHAINS } from '@pancakeswap/pools'
import { SUPPORTED_CHAIN_IDS as POSITION_MANAGERS_SUPPORTED_CHAINS } from '@pancakeswap/position-managers'
import { SUPPORTED_CHAIN_IDS as PREDICTION_SUPPORTED_CHAINS } from '@pancakeswap/prediction'
import {
  DropdownMenuItems,
  DropdownMenuItemType,
  EarnFillIcon,
  EarnIcon,
  MenuItemsType,
  MoreIcon,
  NftFillIcon,
  NftIcon,
  PancakeProtectorIcon,
  CaribLogoIcon,
  ShoppingBasketFilledIcon,
  ShoppingBasketIcon,
  SwapFillIcon,
  SwapIcon,
} from '@pancakeswap/uikit'
import {
  FIXED_STAKING_SUPPORTED_CHAINS,
  LIQUID_STAKING_SUPPORTED_CHAINS,
  SUPPORT_CAKE_STAKING,
  SUPPORT_FARMS,
  SUPPORT_ONLY_BSC,
} from 'config/constants/supportChains'
import { getOptionsUrl } from 'utils/getOptionsUrl'
import { getPerpetualUrl } from 'utils/getPerpetualUrl'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap?outputCurrency=0x9f8b8FE01b26957cf3dcd6FBd3675053bA2c02C8',
      // showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap?outputCurrency=0x9f8b8FE01b26957cf3dcd6FBd3675053bA2c02C8',
        },
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
        
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Buy'),
      href: 'https://caribdao.com/buy',
      icon: ShoppingBasketIcon,
      fillIcon: ShoppingBasketFilledIcon,
      items: [
        {
          label: t('Buy Crypto'),
          href: 'https://caribdao.com/buy',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },  
    {
      label: t('Earn'),
      href: 'https://caribdao.com/earn',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      supportChainIds: SUPPORT_FARMS,
      items: [
       /* {
          label: t('Farms'),
          href: '/farms',
          supportChainIds: SUPPORT_FARMS,
        },
        {
          label: t('Pools'),
          href: '/pools',
          supportChainIds: POOL_SUPPORTED_CHAINS,
        }, */
        {
          label: t('CARIB-CAKE LP'),
          href: '/v2/pair/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/0x9f8b8FE01b26957cf3dcd6FBd3675053bA2c02C8',
          supportChainIds: SUPPORT_CAKE_STAKING,
        },
        {
          label: t('CAKE Staking'),
          href: '/cake-staking',
          supportChainIds: SUPPORT_CAKE_STAKING,
        },
        {
          label: t('Vote'),
          href: 'https://app.dexe.io/dao/0x04a7419d62320256ebdf59cb7d28ace7e9f3f544/about',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Earn'),
          href: 'https://caribdao.com/earn',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
 /* {
      label: t('CARIB'),
      icon: CaribLogoIcon,
      hideSubNav: true,
      href: '/info/v3/tokens/0x9f8b8fe01b26957cf3dcd6fbd3675053ba2c02c8',
      items: [
        {
          label: t('Info'),
          href: '/info/v3/tokens/0x9f8b8fe01b26957cf3dcd6fbd3675053ba2c02c8',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
       
      ].map((item) => addMenuItemSupported(item, chainId)),
    },   */ 
    {
      label: t('Game'),
      icon: PancakeProtectorIcon,
      hideSubNav: true,
      href: 'https://t.me/starfishgame_bot',
      items: [
        {
          label: t('STARFISH Game'),
          href: 'https://t.me/starfishgame_bot',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
       
      ].map((item) => addMenuItemSupported(item, chainId)),
    },    
   /*  {
      label: t('NFT'),
      href: `${nftsBaseUrl}`,
      icon: NftIcon,
      fillIcon: NftFillIcon,
      supportChainIds: SUPPORT_ONLY_BSC,
      image: '/images/decorations/nft.png',
      items: [
        {
          label: t('Overview'),
          href: `${nftsBaseUrl}`,
        },
        {
          label: t('Collections'),
          href: `${nftsBaseUrl}/collections`,
        },
        {
          label: t('Activity'),
          href: `${nftsBaseUrl}/activity`,
        },
      ],
    }, 
    {
      label: t('v4'),
      href: '/v4',
      showOnMobile: false,
      items: [],
    },    */ 
    {
      label: 'Info',
      href: '/info',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        /* {
          label: t('Market'),
          href: '/info',
        },
        {
          label: t('CARIB'),
          href: '/info/pairs/0x4ec411247c357d0fa1636a0cfe2a5d6256295568',
        }, */
        {
          label: t('Events'),
          href: 'https://link3.to/carib',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Blog'),
          href: 'https://peakd.com/@caribdao',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('White Paper'),
          href: 'https://swap.caribdao.com/whitepaper.pdf',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
