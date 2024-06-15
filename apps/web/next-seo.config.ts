import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | CARIB Swap',
  defaultTitle: 'CARIB Swap',
  description: 'Trade, earn, and own crypto on a Caribbean-flavored DEX',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@caribdao',
    site: '@caribdao',
  },
  openGraph: {
    title: "🌊 CARIB Swap - A Caribbean-flavored DEX",
    description: 'Trade, earn, and own crypto on a Caribbean-flavored DEX',
    images: [{ url: 'https;//swap.caribdao.com/images/caribswap/logo.png' }],
  },
}
