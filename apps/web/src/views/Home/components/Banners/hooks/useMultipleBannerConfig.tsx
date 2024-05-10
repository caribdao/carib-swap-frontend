import { useCountdown } from '@pancakeswap/hooks'
import shuffle from 'lodash/shuffle'
import { ReactElement, useMemo } from 'react'
import CompetitionBanner from '../CompetitionBanner'
import { GalxeTraverseBanner } from '../GalxeTraverseBanner'
import GameBanner from '../GameBanner'
import { MasaTCBanner } from '../MasaTCBanner'
import { MultiChainBanner } from '../MultichainBanner'
import { PancakeProtectorBanner } from '../PancakeProtectorBanner'
import NewIFOBanner from '../NewIFOBanner'
import { OptionsBanner } from '../OptionsBanner'
import PerpetualBanner from '../PerpetualBanner'
import { TopTraderBanner } from '../TopTraderBanner'
import UserBanner from '../UserBanner'
import { V4InfoBanner } from '../V4InfoBanner'
import { VeCakeBanner } from '../VeCakeBanner'
import WebNotificationBanner from '../WebNotificationBanner'
import useIsRenderCompetitionBanner from './useIsRenderCompetitionBanner'
import useIsRenderIfoBanner from './useIsRenderIFOBanner'
import useIsRenderUserBanner from './useIsRenderUserBanner'

interface IBannerConfig {
  shouldRender: boolean
  banner: ReactElement
}

/**
 * make your custom hook to control should render specific banner or not
 * add new campaign banner easily
 *
 * @example
 * ```ts
 *  {
 *    shouldRender: isRenderIFOBanner,
 *    banner: <IFOBanner />,
 *  },
 * ```
 */

export const useMultipleBannerConfig = () => {
  const isRenderIFOBanner = useIsRenderIfoBanner()
  const isRenderCompetitionBanner = useIsRenderCompetitionBanner()
  const isRenderUserBanner = useIsRenderUserBanner()
  const countdown = useCountdown(1704369600)
  return useMemo(() => {
    const NO_SHUFFLE_BANNERS: IBannerConfig[] = [
      {
        shouldRender: isRenderUserBanner.shouldRender && !isRenderUserBanner.isEarningsBusdZero,
        banner: <UserBanner />,
      },
   // { shouldRender: isRenderIFOBanner || Boolean(countdown), banner: <NewIFOBanner /> },
      {
        shouldRender: false,
        banner: <MasaTCBanner />, 
      },
      {
        shouldRender: false,
        banner: <MultiChainBanner />,
      },
      {
        shouldRender: false,
        banner: <OptionsBanner />,
      },
      { shouldRender: true, banner: <VeCakeBanner /> },
      {
        shouldRender: false,
        banner: <V4InfoBanner />,
      },
      {
        shouldRender: true,
        banner: <PancakeProtectorBanner />,
      },
      {
        shouldRender: false,
        banner: <TopTraderBanner />,
      },

    ]

    const SHUFFLE_BANNERS: IBannerConfig[] = [
      { shouldRender: false, banner: <GalxeTraverseBanner /> },
      { shouldRender: false, banner: <WebNotificationBanner /> },
      { shouldRender: false, banner: <GameBanner /> },
      {
        shouldRender: false,
        banner: <CompetitionBanner />,
      },
      {
        shouldRender: false,
        banner: <PerpetualBanner />,
      },
     
    ]
    return [
      ...NO_SHUFFLE_BANNERS,
      ...shuffle(SHUFFLE_BANNERS),
      {
        // be the last one if harvest value is zero
        shouldRender: isRenderUserBanner.shouldRender && isRenderUserBanner.isEarningsBusdZero,
        banner: <UserBanner />,
      },
    ]
      .filter((bannerConfig: IBannerConfig) => bannerConfig.shouldRender)
      .map((bannerConfig: IBannerConfig) => bannerConfig.banner)
  }, [
    countdown,
    isRenderCompetitionBanner,
    isRenderIFOBanner,
    isRenderUserBanner.isEarningsBusdZero,
    isRenderUserBanner.shouldRender,
  ])
}
