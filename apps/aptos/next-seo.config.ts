import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | CARIB Swap',
  defaultTitle: 'CARIB Swap',
  description: 'Trade, earn, and own crypto on a Caribbean-flavored multichain DEX',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@CaribDAO',
    site: '@CaribDAO',
  },
  openGraph: {
    title: "🌊 CARTIB Swap Aptos - A Caribbean-flavored DEX",
    description: 'Trade, earn, and own crypto on a Caribbean-flavored multichain DEX',
    images: [{ url: 'https://aptos.pancakeswap.finance/images/hero.jpeg' }],
  },
}
